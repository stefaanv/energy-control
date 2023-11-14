<template>
  <router-view />
</template>

<script lang="ts" setup>
import { watch } from 'vue'
watch(['$route'], (to, from) => {
  console.log('from', from, 'to', to)
})
</script>
