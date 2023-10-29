<template>
  <price-table />
  <div class="table-container">
    <v-table density="compact">
      <thead>
        <tr>
          <th class="bold text-center" colspan="6" style="font-weight: 800; font-size: larger">
            Charge/discharge tasks
          </th>
        </tr>
        <tr>
          <th class="text-center" style="font-weight: 800">Dag</th>
          <th class="text-center" style="font-weight: 800">Soort</th>
          <th class="text-center" style="font-weight: 800">Van</th>
          <th class="text-center" style="font-weight: 800">Tot</th>
          <th class="text-center" style="font-weight: 800">Verm</th>
          <th>Acties</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) of taskList" v-bind:key="index">
          <td>{{ relDateString(index) }}</td>
          <td>{{ task.mode }}</td>
          <td>{{ format(task.from, 'HH:mm', TZ_OPTS) }}</td>
          <td>{{ format(task.till, 'HH:mm', TZ_OPTS) }}</td>
          <td>{{ task.power }} W</td>
          <td class="icons">
            <v-btn icon="$edit" class="mx-2" variant="text" density="compact" @click="startEdit(index)"></v-btn>
            <v-btn icon="mdi-delete" class="mx-2" variant="text" density="compact" @click="remove(index)"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-btn v-if="editing < 0" icon="$plus" @click="addNew"></v-btn>
  </div>

  <div class="form-container" v-if="editing >= 0">
    <v-form title="add/edit">
      <v-container>
        <v-col sm="4">
          <v-row><v-select label="dag" :items="daySelectItems" v-model="dateRelative" item-value="key"
              item-title="title" /></v-row>
          <v-row>
            <v-select label="van" :items="hours" icon="none" v-model="hourFrom" @update:model-value="fromUpdated" />
            <v-select label="min" :items="minutes" v-model="minutesFrom" />
          </v-row>
          <v-row>
            <v-select label="tot" :items="hours" v-model="hourTill" />
            <v-select label="min" :items="minutes" v-model="minutesTill" />
          </v-row>
          <v-row><v-select label="charge/discharge" :items="['charge', 'discharge']" density="compact"
              v-model="mode" /></v-row>
          <v-row><v-text-field label="power" type="number" v-model="power" suffix="W"></v-text-field></v-row>
        </v-col>
      </v-container>
    </v-form>
    <v-btn variant="outlined" prepend-icon="mdi-check-circle" color="primary" @click="update">Save</v-btn>
    <v-btn variant="outlined" prepend-icon="$cancel" color="secondart" @click="cancel">Cancel</v-btn>
  </div>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { ChargeMode, IChargeTask } from '@/shared-models/charge-task.interface'
import Axios from 'axios'
import PriceTable from '@/components/PriceTable.vue'
import { IChargeTaskWire, chargeTaskFromWire, dateFromRelative } from '@/shared-models/charge-task-wire.interface'
import { addDays, differenceInCalendarDays } from 'date-fns'
import { format, OptionsWithTZ } from 'date-fns-tz'
import { DAY_NAMES, NEW_ID, SELECT_DAY_NAMES, SELECT_HOURS, SELECT_MINUTES } from '@/components/charge-task.constants'

const TZ_OPTS: OptionsWithTZ = { timeZone: 'Europe/Brussels' }
const daySelectItems = SELECT_DAY_NAMES
const hours = SELECT_HOURS
const minutes = SELECT_MINUTES

const taskList: Ref<IChargeTask[]> = ref([])
const editing = ref(-1)
const dateRelative = ref('0')
const hourFrom = ref('0')
const minutesFrom = ref('0')
const hourTill = ref('0')
const minutesTill = ref('0')
const mode: Ref<ChargeMode> = ref('charge')
const power = ref(0)

const axios = Axios.create({ baseURL: import.meta.env.VITE_BE_BASE_URL })
const res = (await axios.get<IChargeTaskWire[]>('energy/tasks')).data
taskList.value = res.map(t => chargeTaskFromWire(t))

async function update() {
  const task = taskList.value[editing.value]
  const id = task.id
  task.from = dateFromRelative(dateRelative.value, hourFrom.value, minutesFrom.value)
  task.till = dateFromRelative(dateRelative.value, hourTill.value, minutesTill.value)
  task.power = parseInt(power.value.toString())
  task.mode = mode.value

  if (id === NEW_ID) {
    const result = await axios.put<string>(`energy/task/add`, task)
    task.id = parseInt(result.data)
  } else {
    await axios.post(`energy/task`, task)
  }
  editing.value = -1
}

function cancel() {
  editing.value = -1
}

async function remove(index: number) {
  const toRemoveId = taskList.value[index].id
  taskList.value.splice(index, 1)
  await axios.delete(`energy/task/${toRemoveId}`)

}

function fromUpdated() {
  hourTill.value = Math.min(parseInt(hourFrom.value) + 2, 23).toString()
}

function startEdit(index: number) {
  editing.value = index
  const task = taskList.value[index]
  dateRelative.value = differenceInCalendarDays(task.from, new Date()).toString()
  hourFrom.value = (task.from.getHours().toString())
  minutesFrom.value = (task.from.getMinutes().toString())
  hourTill.value = (task.till.getHours().toString())
  minutesTill.value = (task.till.getMinutes().toString())
  mode.value = task.mode
  power.value = task.power
}

const relDateString = (index: number) => {
  return DAY_NAMES[differenceInCalendarDays(taskList.value[index].from, new Date()).toString()]
}

function addNew() {
  const tomorrow = addDays(new Date(), 1)
  const [year, month, day] = [tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate()]
  const newTask: IChargeTask = {
    id: NEW_ID,
    from: new Date(year, month, day, 2, 0),
    till: new Date(year, month, day, 5, 0),
    mode: 'charge',
    power: 2000
  }
  const index = taskList.value.length
  taskList.value.push(newTask)
  startEdit(index)
}
/* Example data
taskList.value = [
  {
    id: 1,
    dateRelative: 0,
    mode: 'charge',
    power: 2000,
    from: new Date(2023, 9, 20, 10, 0, 0),
    till: new Date(2023, 9, 20, 12, 0, 0),
  } as IChargeTask,
]
*/
</script>

<style scoped>
.bold {
  font-weight: 900;
}

td.icons {
  align-items: left;
  text-align: left;
}
</style>
