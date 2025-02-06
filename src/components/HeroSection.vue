<script setup>
import SearchConverter from '@/components/SearchConverter.vue'
</script>

<template>
  <section class="w-full py-8 md:py-16 lg:py-20">
    <div class="container px-4 md:px-6">
      <div
        class="flex flex-col items-center space-y-6 text-center animate-moveUpInitial"
      >
        <div class="space-y-2">
          <h1 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Quick & Easy Conversions
          </h1>
          <p
            class="mx-auto max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400"
          >
            Convert units, time, currency, dates, and more in one place.
          </p>
        </div>
        <SearchConverter />
      </div>
    </div>
  </section>
</template>
