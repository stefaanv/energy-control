<script setup lang="ts">
import { ref, Ref } from 'vue'
import { differenceInCalendarDays } from 'date-fns'
import { IChargeTask } from '@/shared-models/charge-task.interface'
import { ChargeMode, dateFromRelative } from '@/shared-models/charge-task-wire.interface'
import { SELECT_HOURS, SELECT_MINUTES, DAY_NAMES } from './charge-task.constants'
import { keys } from 'radash'

const props = defineProps<{
  task: IChargeTask
}>()
const emit = defineEmits<{
  'update:task': [value: IChargeTask]
  'cancel': []
}>()

// select fields content
const hours = SELECT_HOURS
const minutes = SELECT_MINUTES
const dayNames = keys(DAY_NAMES).map(rd => ({
  key: rd.toString(),
  title: DAY_NAMES[rd.toString()],
}))


//Variables when being edited
const dateRelative = ref(differenceInCalendarDays(props.task.from, new Date()).toString())
const hourFrom = ref(props.task.from.getHours().toString())
const minutesFrom = ref(props.task.from.getMinutes().toString())
const hourTill = ref(props.task.till.getHours().toString())
const minutesTill = ref(props.task.till.getMinutes().toString())
const mode: Ref<ChargeMode> = ref(props.task.mode)
const power = ref(props.task.power)

const sendUpdate = () => {
  const newValue = {
    id: props.task.id,
    from: dateFromRelative(dateRelative.value, hourFrom.value, minutesFrom.value),
    till: dateFromRelative(dateRelative.value, hourTill.value, minutesTill.value),
    power: parseInt(power.value.toString()),
    mode: mode.value,
  } as IChargeTask
  emit('update:task', newValue)
}

const cancelUpdate = () => {
  emit('cancel')
}
</script>

<template>
  <td>
    <v-select :items="dayNames" density="compact" v-model="dateRelative" item-value="key" item-title="title" />
  </td>
  <td>
    <v-select :items="['charge', 'discharge']" density="compact" v-model="mode" />
  </td>
  <td>
    <v-layout row>
      <v-select :items="hours" density="compact" icon="none" v-model="hourFrom" />
      <v-select :items="minutes" density="compact" v-model="minutesFrom" />
    </v-layout>
  </td>
  <td>
    <v-layout row>
      <v-select :items="hours" density="compact" v-model="hourTill" />
      <v-select :items="minutes" density="compact" v-model="minutesTill" />
    </v-layout>
  </td>
  <td>
    <v-text-field type="number" v-model="power" density="compact" max-width="1"></v-text-field>
  </td>
  <td class="icon">
    <v-btn class="mx-2" variant="text" @click="sendUpdate" icon="$complete" density="compact"></v-btn>
    <v-btn class="mx-2" @click="cancelUpdate" icon="$close" density="compact"></v-btn>
  </td>
</template>

<style>
td {
  /* min-width: 200px; */
  text-align: center;
}

td.icon {
  /* min-width: 100px; */
  text-align: left;
}
</style>
@/models/charge-task.model
