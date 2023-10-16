<script setup lang="ts">
import { ChargeMode, ChargeTaskSetting } from '@/models/charge-task-setting.model'
import { ref, Ref } from 'vue'
import { range } from 'radash'

const props = defineProps<{
  task: ChargeTaskSetting
}>()
const emit = defineEmits<{
  'update:task': [value: ChargeTaskSetting]
}>()

const beingEdited: Ref<boolean> = ref(false)

const hours = Array.from(range(0, 23))
const minutes = Array.from(range(0, 11, i => 5 * i))

const mode: Ref<ChargeMode> = ref('charge')
const hourFrom = ref(0)
const minutesFrom = ref(0)
const hourTill = ref(0)
const minutesTill = ref(0)
const power = ref(0)

const startEdit = () => {
  mode.value = props.task.mode as ChargeMode
  hourFrom.value = parseInt(props.task.from.split(':')[0])
  minutesFrom.value = parseInt(props.task.from.split(':')[1])
  hourTill.value = parseInt(props.task.till.split(':')[0])
  minutesTill.value = parseInt(props.task.till.split(':')[1])
  power.value = props.task.power
  beingEdited.value = true
}

const sendUpdate = () => {
  console.log(power.value)
  const updatedTask = {
    ...props.task,
    mode: mode.value,
    from: `${hourFrom.value}:${formatMinutes(minutesFrom.value)}`,
    till: `${hourTill.value}:${formatMinutes(minutesTill.value)}`,
    power: power.value,
  }
  beingEdited.value = false
  emit('update:task', updatedTask)
}

const formatMinutes = (value: number) => ('0' + value.toString()).slice(-2)
</script>

<template>
  <tr v-if="beingEdited">
    <td class="charge-column">
      <v-select :items="['charge', 'discharge']" density="compact" v-model="mode" />
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
    <td><v-text-field type="number" v-model="power" density="compact"></v-text-field></td>
    <v-btn @click="sendUpdate">save</v-btn>
  </tr>
  <tr v-else @click="startEdit()">
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
.charge-column {
  min-width: 180px;
  text-align: center;
}
</style>
