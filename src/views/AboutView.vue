<script setup></script>

<template>
  <section
    class="flex-1 flex flex-col items-center justify-start text-center py-6 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800"
  >
    <div class="container px-4 md:px-6">
      <div
        class="flex flex-col items-center space-y-6 text-center animate-moveUpInitial"
      >
        <div class="space-y-2">
          <h1 class="text-3xl font-bold mb-4">About</h1>
          <p class="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            Welcome to our universal conversion platform, designed to make
            everyday calculations effortless. Whether you need to convert time
            zones, currency, digital storage, or scientific units, we've got you
            covered.
          </p>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-center space-y-4 text-center mt-8"
      >
        <div
          class="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3"
        >
          <p class="text-gray-600 dark:text-gray-400">
            Built with Vue 3, TailwindCSS, and FlyonUI, this project ensures a
            smooth and modern user experience. We prioritize accuracy, speed,
            and usability to help you convert values quickly and efficiently.
          </p>
          <p class="text-gray-600 dark:text-gray-400">
            Our tool is continuously evolving, with more categories and features
            being added. Stay tuned for upcoming updates that will enhance your
            conversion experience.
          </p>
          <p class="text-gray-600 dark:text-gray-400">
            Check out the source code and contribute on GitHub:
            <a href="https://github.com/" class="text-primary hover:underline"
              >GitHub Repository</a
            >.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
