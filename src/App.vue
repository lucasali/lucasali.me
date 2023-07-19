<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="container mx-auto px-7 py-10">
    <RouterView />
    <footer />
  </main>
</template>
