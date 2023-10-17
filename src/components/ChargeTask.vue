<script setup lang="ts">
import { ChargeTaskSetting } from '@/models/charge-task-setting.model'
import { ref, Ref } from 'vue'
import { range } from 'radash'

type ZeroToFour = '0' | '1' | '2' | '3' | '4'
const DAY_NAMES: Record<ZeroToFour, string> = {
  '0': 'vandaag',
  '1': 'morgen',
  '2': 'overmorgen',
  '3': 'd+3',
  '4': 'd+4',
}

const props = defineProps<{
  task: ChargeTaskSetting
}>()
const emit = defineEmits<{
  'update:task': [value: ChargeTaskSetting]
}>()

const beingEdited: Ref<boolean> = ref(false)
const edit: Ref<ChargeTaskSetting> = ref(props.task)

const hours = Array.from(range(0, 23))
const minutes = Array.from(range(0, 11, i => 5 * i))
const days = Array.from(range(0, 4)).map(rd => ({ key: rd, title: DAY_NAMES[rd.toString() as ZeroToFour] }))

const hourFrom = ref(parseInt(props.task.from.split(':')[0]))
const minutesFrom = ref(parseInt(props.task.from.split(':')[1]))
const hourTill = ref(parseInt(props.task.till.split(':')[0]))
const minutesTill = ref(parseInt(props.task.till.split(':')[1]))

const startEdit = () => {
  beingEdited.value = true
}

const sendUpdate = () => {
  edit.value.from = `${hourFrom.value}:${formatMinutes(minutesFrom.value)}`
  edit.value.till = `${hourTill.value}:${formatMinutes(minutesTill.value)}`
  edit.value.power = parseInt(edit.value.power.toString())
  beingEdited.value = false
  emit('update:task', edit.value)
}


const formatMinutes = (value: number) => ('0' + value.toString()).slice(-2)
</script>

<template>
  <tr v-if="beingEdited">
    <td class="other-column">
      <v-select :items="days" density="compact" v-model="edit.dateRelative" item-value="key" item-title="title" />
    </td>
    <td class="other-column">
      <v-select :items="['charge', 'discharge']" density="compact" v-model="edit.mode" />
    </td>
    <td class="time-column">
      <v-layout row>
        <v-select :items="hours" density="compact" icon="none" v-model="hourFrom" />
        <v-select :items="minutes" density="compact" v-model="minutesFrom" />
      </v-layout>
    </td>
    <td class="time-column">
      <v-layout row>
        <v-select :items="hours" density="compact" v-model="hourTill" />
        <v-select :items="minutes" density="compact" v-model="minutesTill" />
      </v-layout>
    </td>
    <td><v-text-field type="number" v-model="edit.power" density="compact"></v-text-field></td>
    <v-btn @click="sendUpdate">save</v-btn>
  </tr>
  <tr v-else @click="startEdit()">
    <td>{{ DAY_NAMES[task.dateRelative.toString() as ZeroToFour] }}</td>
    <td>{{ task.mode }}</td>
    <td class="time-column">{{ task.from }}</td>
    <td class="time-column">{{ task.till }}</td>
    <td>{{ task.power }}</td>
  </tr>
</template>
<style>
.time-column {
  min-width: 190px;
  text-align: center;
}

.other-column {
  min-width: 180px;
  text-align: center;
}
</style>
@/models/charge-task.model