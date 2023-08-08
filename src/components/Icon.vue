<script setup lang="ts">
import spriteHref from "~/components/icon.svg";
import { SVGAttributes } from "vue";
import type { iconNames } from "./icons.json";

type IconName = keyof typeof iconNames;

interface Props extends /* @vue-ignore */ SVGAttributes {
  name: IconName;
}

const props = defineProps<Props>();
</script>

<template>
  <svg v-bind="props">
    <use :href="`${spriteHref}#${name}`" />
  </svg>
</template>
