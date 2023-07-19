<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ToggleTheme from './ToggleTheme.vue'

import IconGitHub from '~icons/mdi/github'
import { isDark } from '~/lib'
</script>

<template>
  <header>
    <RouterLink
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
    >
      <img v-if="!isDark" alt="Vue logo" class="logo" src="/logo.svg">
      <img v-else alt="Vue logo" class="logo" src="/logo-light.svg">
    </RouterLink>

    <nav class="p-8 w-full grid grid-cols-[auto_max-content] box-border">
      <div />
      <div class="grid gap-5 grid-flow-col items-center">
        <RouterLink to="/projects">
          Projects
        </RouterLink>
        <!-- <RouterLink to="/about">projects</RouterLink> -->
        <a href="https://github.com/lucasali" target="_blank" title="GitHub">
          <IconGitHub />
        </a>
        <ToggleTheme />
      </div>
    </nav>
  </header>
</template>

<style></style>
~/lib/theme
