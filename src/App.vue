<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView class="container mx-auto px-7 py-10 text-accent dark:text-primary font-bold" />
    <footer />
  </main>
</template>

<style scoped></style>
