<template>
  <header class="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
    <RouterLink
      class="flex items-center justify-center mr-6"
      :to="ROUTES.HOME.path"
    >
      <div class="flex items-center gap-3 hover:text-gray-800">
        <ConvertIcon size="28" />
        <!-- <GithubIcon /> -->
        <!-- <Mountain class="h-6 w-6" /> -->
        <span class="font-bold text-lg">Convertica</span>
      </div>
    </RouterLink>
    <div>
      <RouterLink
        class="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        :to="ROUTES.HOME.path"
      >
        Home
      </RouterLink>
      <RouterLink
        class="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        :to="ROUTES.ABOUT.path"
      >
        About
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import * as ROUTES from '@/router/routes.js'
import ConvertIcon from '@/components/icons/ConvertIcon.vue'
// import GithubIcon from '@/components/icons/GithubIcon.vue'
// import { Mountain } from 'lucide-vue-next'
</script>
