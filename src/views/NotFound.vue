<script setup>
import { HOME } from '@/router/routes.js'
</script>

<template>
  <section
    class="flex-1 flex flex-col items-center justify-center text-center py-6 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800"
  >
    <h1 class="text-6xl font-bold text-gray-700 dark:text-gray-100 mb-4">
      404
    </h1>
    <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
      Oops! The page you're looking for doesn't exist.
    </p>
    <RouterLink :to="HOME.path" class="btn btn-primary"> Go Home </RouterLink>
  </section>
</template>
