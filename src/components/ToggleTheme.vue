<script setup lang="ts">
import { isDark, toggleDark } from "~/lib";
import IconWeatherNight from "~icons/mdi/weather-night";
import IconWhiteBalanceSunny from "~icons/mdi/white-balance-sunny";
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <IconWhiteBalanceSunny v-if="isDark" />
    <IconWeatherNight v-else />
  </a>
</template>
