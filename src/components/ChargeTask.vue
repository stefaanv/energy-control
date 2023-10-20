<script setup lang="ts">
import { ref, Ref } from 'vue'
import { range } from 'radash'
import { differenceInCalendarDays } from 'date-fns'
import { format, OptionsWithTZ } from 'date-fns-tz'
import { IChargeTask } from '@/shared-models/charge-task.interface'
import { ChargeMode, dateFromRelative } from '@/shared-models/charge-task-wire.interface'

const DAY_NAMES: Record<string, string> = {
  '-4': 'd-4',
  '-3': 'd-3',
  '-2': 'eergisteren',
  '-1': 'gisteren',
  '0': 'vandaag',
  '1': 'morgen',
  '2': 'overmorgen',
  '3': 'd+3',
  '4': 'd+4',
  '5': 'd+5',
}

const TZ_OPTS: OptionsWithTZ = { timeZone: 'Europe/Brussels' }

const props = defineProps<{
  task: IChargeTask
}>()
const emit = defineEmits<{
  'update:task': [value: IChargeTask]
}>()

// select fields content
const hours = Array.from(range(0, 23)).map(h => h.toString())
const minutes = Array.from(range(0, 11, i => 5 * i)).map(m => m.toString())
const days = Array.from(range(-4, 5)).map(rd => ({
  key: rd.toString(),
  title: DAY_NAMES[rd.toString()],
}))

//Variables when being edited
const beingEdited: Ref<boolean> = ref(false)
const dateRelative = ref('0')
const hourFrom = ref('0')
const minutesFrom = ref('0')
const hourTill = ref('0')
const minutesTill = ref('0')
const mode: Ref<ChargeMode> = ref('charge')
const power = ref(0)

const startEdit = () => {
  mode.value = props.task.mode
  power.value = props.task.power
  dateRelative.value = differenceInCalendarDays(props.task.from, new Date()).toString()
  hourFrom.value = props.task.from.getHours().toString()
  minutesFrom.value = props.task.from.getMinutes().toString()
  hourTill.value = props.task.till.getHours().toString()
  minutesTill.value = props.task.till.getMinutes().toString()
  beingEdited.value = true
}

const sendUpdate = () => {
  beingEdited.value = false
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
  beingEdited.value = false
  emit('update:task', props.task)
}

const relDateString = () => {
  return DAY_NAMES[differenceInCalendarDays(props.task.from, new Date()).toString()]
}
</script>

<template>
  <tr v-if="beingEdited">
    <td>
      <v-select
        :items="days"
        density="compact"
        v-model="dateRelative"
        item-value="key"
        item-title="title"
      />
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
      <v-btn class="mx-2" @click="sendUpdate" icon="$complete" density="compact"></v-btn>
      <v-btn class="mx-2" @click="cancelUpdate" icon="$close" density="compact"></v-btn>
    </td>
  </tr>
  <tr v-else @click="startEdit()">
    <td>{{ relDateString() }}</td>
    <td>{{ task.mode }}</td>
    <td>{{ format(task.from, 'HH:mm', TZ_OPTS) }}</td>
    <td>{{ format(task.till, 'HH:mm', TZ_OPTS) }}</td>
    <td>{{ task.power }}</td>
  </tr>
</template>

<style>
td {
  min-width: 200px;
  text-align: center;
}
td.icon {
  min-width: 100px;
  text-align: left;
}
</style>
@/models/charge-task.model
