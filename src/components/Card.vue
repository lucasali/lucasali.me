<script setup lang="ts">
interface Props {
  title?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="rounded-xl border border-secondary bg-background p-8 shadow-lg">
    <h1 v-if="title" class="text-4xl font-bold">{{ title }}</h1>
    <slot></slot>
  </div>
</template>
