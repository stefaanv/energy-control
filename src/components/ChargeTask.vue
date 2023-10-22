<script setup lang="ts">
import { differenceInCalendarDays } from 'date-fns'
import { format, OptionsWithTZ } from 'date-fns-tz'
import { IChargeTask } from '@/shared-models/charge-task.interface'

const DAY_NAMES: Record<string, string> = {
  '-2': 'eergisteren',
  '-1': 'gisteren',
  '0': 'vandaag',
  '1': 'morgen',
  '2': 'overmorgen',
  '3': 'd+3',
  '4': 'd+4',
}

const TZ_OPTS: OptionsWithTZ = { timeZone: 'Europe/Brussels' }

const props = defineProps<{
  task: IChargeTask
}>()
const emit = defineEmits<{
  'edit': [value: number]
}>()

// select fields content
const relDateString = () => {
  return DAY_NAMES[differenceInCalendarDays(props.task.from, new Date()).toString()]
}
function startEdit() {
  emit('edit', props.task.id)
}
</script>

<template >
  <td @click="startEdit">{{ relDateString() }}</td>
  <td @click="startEdit">{{ task.mode }}</td>
  <td @click="startEdit">{{ format(task.from, 'HH:mm', TZ_OPTS) }}</td>
  <td @click="startEdit">{{ format(task.till, 'HH:mm', TZ_OPTS) }}</td>
  <td @click="startEdit">{{ task.power }}</td>
  <td></td>
</template>

<style>
td {
  min-width: 200px;
  text-align: center;
}
</style>
