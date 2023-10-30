<template>
  <div class="pricing-table-container">
    <table class="pricing">
      <tr>
        <th colspan="8">Belpex Spot index in c€/kWh</th>
      </tr>

      <template v-for="(ppRow, index) in clustered" :key="index">
        <tr>
          <td v-for="pp in clustered[index]" :key="pp.col">
            <span class="hour">{{ pp.hrStart }}</span><br>
            <span class="price">{{ pp.hrStart === '' ? '' : (pp.price / 10).toFixed(2) }}</span>
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script setup lang="ts">
interface PricePoint {
  price: number
  startTime: Date
  hrStart: string,
  col: number
}
type PricePointWire = Omit<PricePoint, 'startTime' | 'col'> & { startTime: string }

import Axios from 'axios'
import { ref } from 'vue'
import { parseJSON, differenceInHours } from 'date-fns'
import { cluster, range } from 'radash'

const axios = Axios.create({ baseURL: import.meta.env.VITE_BE_BASE_URL })
const now = new Date()
const startHour = now.getHours() - (now.getHours() % 8)
const priceData = (await axios.get<PricePointWire[]>('pricing')).data
  .map<PricePoint>(pp => ({ ...pp, startTime: parseJSON(pp.startTime), col: 0 }))
  .filter(pp => pp.startTime.getDate() != now.getDate() || pp.startTime.getHours() >= startHour)
  .map(pp => ({ ...pp, col: pp.startTime.getHours() % 8, hrStart: pp.startTime.getHours().toString() }))
  .sort((a, b) => differenceInHours(a.startTime, b.startTime))
const clustered = ref(cluster(priceData, 8))
</script>

<style scoped>
table.pricing {
  border-collapse: collapse;
}

table.pricing tr td {
  border: 1px solid;
  border-color: grey;
  /* top, right, bottom, left */
  padding: 1px 7px;
  text-align: center;
}

table.pricing tr td span.hour {
  text-align: center;
  font-weight: bold;
}

table.pricing tr td span.price {
  display: block;
  text-align: right;
}
</style>
