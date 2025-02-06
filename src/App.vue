<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen mx-auto max-w-screen-xl">
    <NavBar />

    <RouterView />

    <Footer />
  </div>
</template>

<style scoped></style>
