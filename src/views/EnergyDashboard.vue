<template>
  <div class="table-container">
    <v-table density="compact">
      <thead>
        <tr>
          <th class="bold text-center" colspan="5" style="font-weight: 800; font-size: larger">
            Charge/discharge tasks
          </th>
        </tr>
        <tr>
          <th class="text-center" style="font-weight: 800">Dag</th>
          <th class="text-center" style="font-weight: 800">Soort</th>
          <th class="text-center" style="font-weight: 800">Van</th>
          <th class="text-center" style="font-weight: 800">Tot</th>
          <th class="text-center" style="font-weight: 800">Vermogen [W]</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) of taskList" v-bind:key="index">
          <charge-task v-if="task.id !== editing" v-model:task="taskList[index]" @edit="editing = task.id"></charge-task>
          <td class="icon"><v-btn icon="mdi-delete" class="mx-2" variant="text"></v-btn></td>
          <charge-task-edit v-if="task.id === editing" v-model:task="taskList[index]" @update:task="taskUpdated(index)"
            @cancel="editing = -1"></charge-task-edit>
        </tr>
      </tbody>
    </v-table>
  </div>
  <v-btn v-if="editing <= 0" icon="$plus" @click="addNew"></v-btn>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { IChargeTask } from '@/shared-models/charge-task.interface'
import ChargeTask from '@/components/ChargeTask.vue'
import ChargeTaskEdit from '@/components/ChargeTaskEdit.vue'
import Axios from 'axios'
import { IChargeTaskWire, chargeTaskFromWire } from '@/shared-models/charge-task-wire.interface'
import { addDays } from 'date-fns'

const NEW_ID = 999999

const taskList: Ref<IChargeTask[]> = ref([])
const editing = ref(-1)

const axios = Axios.create({ baseURL: import.meta.env.VITE_BE_BASE_URL })
axios.get<IChargeTaskWire[]>('energy/tasks').then(res => taskList.value = res.data.map(t => chargeTaskFromWire(t)))

async function taskUpdated(index: number) {
  const id = taskList.value[index].id
  if (id === NEW_ID) {
    const result = await axios.put<string>(`energy/tasks/add`, taskList.value[index])
    taskList.value[index].id = parseInt(result.data)
  } else {
    axios.post(`energy/tasks/${id}`, taskList.value[index])
  }
  editing.value = -1
}

function addNew() {
  console.log(`new task added`)
  const tomorrow = addDays(new Date(), 1)
  const [year, month, day] = [tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate()]
  const newTask: IChargeTask = {
    id: NEW_ID,
    from: new Date(year, month, day, 2, 0),
    till: new Date(year, month, day, 5, 0),
    mode: 'charge',
    power: 2000
  }
  taskList.value.push(newTask)
  editing.value = NEW_ID
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

.table-container {
  /* max-width: 1300px; */
}

td.icon {
  min-width: 100px;
  text-align: left;
}
</style>
@/models/charge-task.model
