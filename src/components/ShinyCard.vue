<script setup lang="ts">
import { ref } from "vue";
import { useMouseInElement } from "@vueuse/core";

const card = ref<HTMLDivElement>();
const { elementX, elementY } = useMouseInElement(card);

// const props = defineProps<>();
</script>

<template>
  <div
    ref="card"
    :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
    }"
    class="border-gradient group relative rounded-xl p-8 before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-xl"
  >
    <div
      class="absolute inset-0 grid place-items-center rounded-[11px] bg-accent p-2 transition-colors duration-300"
    >
  </div>
  <slot  />
  </div>
</template>

<style>
.border-gradient::before {
  background: radial-gradient(
    300px circle at var(--x) var(--y),
    hsl(var(--secondary)) 0,
    hsl(var(--primary)) 50%,
    transparent 100%
  );
}
</style>
