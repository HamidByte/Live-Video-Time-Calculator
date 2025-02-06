<template>
  <footer
    class="flex flex-col items-center justify-between gap-4 py-6 md:flex-row md:px-6"
  >
    <div class="flex items-center gap-2">
      <Mountain class="h-6 w-6" />
      <span class="font-bold">Convertica</span>
    </div>
    <nav class="flex gap-4">
      <a class="text-sm hover:underline" href="#"> About </a>
      <a class="text-sm hover:underline" href="#"> Contact </a>
      <a class="text-sm hover:underline" href="#"> Privacy </a>
    </nav>
    <p class="text-sm text-gray-500">© 2025 Convertica. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { Mountain } from 'lucide-vue-next'
</script>
