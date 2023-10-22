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
import { IChargeTask } from '@/shared-models/charge-task.interface'
import ChargeTask from '@/components/ChargeTask.vue'
import Axios from 'axios';
import { IChargeTaskWire, chargeTaskFromWire } from '@/shared-models/charge-task-wire.interface';
const taskList: Ref<IChargeTask[]> = ref([])

const axios = Axios.create({ baseURL: import.meta.env.VITE_BE_BASE_URL })
const wireTaskList = (await axios.get<IChargeTaskWire[]>('energy/tasks')).data
taskList.value = wireTaskList.map(t => chargeTaskFromWire(t))

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
  max-width: 1300px;
}
</style>
@/models/charge-task.model
