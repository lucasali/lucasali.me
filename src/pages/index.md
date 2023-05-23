
<script setup>
  import GitHubCard from '~/components/GitHubCard.vue'
</script>

<GitHubCard>
  <div class="relative h-full flex flex-col md:justify-center">
    <h2 class="text-2xl font-medium text-white">
      Lucas Ali
    </h2>
    <div class="mt-4 text-gray-400 md:w-1/2 md:text-lg">
      TODO
    </div>
  </div>
  <div
    class="absolute bottom-0 right-0 flex items-center lg:inset-y-0 lg:h-full"
  >
    <img
      src="https://nuxt.studio/assets/home/projects-deploy.svg"
      class="hidden h-full cursor-pointer object-cover lg:block"
    >
    <img
      src="https://nuxt.studio/assets/home/projects-deploy-small.svg"
      class="cursor-pointer lg:hidden"
    >
  </div>
</GitHubCard>
