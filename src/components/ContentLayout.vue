<template>
  <div class="flex flex-col min-h-screen mx-auto max-w-screen-xl">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>
