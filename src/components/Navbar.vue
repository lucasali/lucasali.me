<script setup lang="ts">
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <a href="https://github.com/lucasali" target="_blank" title="GitHub" class="lt-md:hidden">
            <div i-carbon-logo-github />
          </a>
        </li>
        <li>
          <div>
            <router-link to="/projects">
              Projects
            </router-link>
          </div>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  </header>
</template>
