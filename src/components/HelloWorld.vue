<template>
  Hallo {{ teller }}
  <v-btn @click="clicked">tekst</v-btn>
  <v-date-picker v-show="true"></v-date-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const teller = ref(0)
function clicked() {
  teller.value++
  console.log(teller.value)
}
</script>
