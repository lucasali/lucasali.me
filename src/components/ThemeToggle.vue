<script setup lang="ts">
import { isDark, toggleDark } from '~/composables/dark'
</script>

<template>
  <button @click="toggleDark()">
    <div v-show="isDark" i-carbon-moon />
    <div v-show="!isDark" i-carbon-sun />
  </button>
</template>
