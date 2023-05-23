<script setup lang="ts">
import { isDark, toggleDark } from '~/utils/theme'
import IconWhiteBalanceSunny from '~icons/mdi/white-balance-sunny'
import IconWeatherNight from '~icons/mdi/weather-night'
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <IconWhiteBalanceSunny v-if="isDark" />
    <IconWeatherNight v-else />
  </a>
</template>
