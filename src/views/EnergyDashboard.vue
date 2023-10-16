<template>
  <div class="table-container">
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-center" colspan="4">Charge/discharge tasks</th>
        </tr>
        <tr>
          <th class="text-center">Soort</th>
          <th class="text-center">Van</th>
          <th class="text-center">Tot</th>
          <th class="text-center">Vermogen [W]</th>
        </tr>
      </thead>
      <tbody>
        <charge-task v-for="(task, index) of taskList" v-bind:key="index" v-model:task="taskList[index]"
          @update:task="console.log(toRaw(taskList[index]))"></charge-task>
      </tbody>
    </v-table>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, toRaw } from 'vue'
import { ChargeTaskSetting } from '@/models/charge-task-setting.model'
import ChargeTask from '@/components/ChargeTask.vue'

const taskList: Ref<ChargeTaskSetting[]> = ref([
  {
    id: 1,
    dateRelative: 0,
    mode: 'charge',
    power: 2000,
    from: '22:10',
    till: '23:00',
  } as ChargeTaskSetting,
  {
    id: 2,
    dateRelative: 1,
    mode: 'discharge',
    power: 1200,
    from: '2:00',
    till: '4:00',
  } as ChargeTaskSetting,
])
</script>

<style>
.table-container {
  max-width: 800px;
}
</style>
