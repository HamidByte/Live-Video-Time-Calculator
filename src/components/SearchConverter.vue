<script setup>
import { ref, watch } from 'vue'
import { convertersList } from '@/lib/converters'
import { subConverters } from '@/lib/subConverters'
import { Search } from 'lucide-vue-next'

const searchTerm = ref('')
const results = ref([])
const noResults = ref(false)

watch(searchTerm, (newTerm) => {
  if (newTerm) {
    // Main categories
    const mainResults = convertersList.filter((converter) =>
      converter.title.toLowerCase().includes(newTerm.toLowerCase()),
    )

    // Subcategories
    const subResults = Object.values(subConverters)
      .flat()
      .filter((subConverter) =>
        subConverter.title.toLowerCase().includes(newTerm.toLowerCase()),
      )

    results.value = [...mainResults, ...subResults]
    noResults.value = results.value.length === 0
  } else {
    results.value = []
    noResults.value = false
  }
})
</script>

<template>
  <div class="w-full max-w-md">
    <div class="relative">
      <div class="input-group join-item">
        <span class="input-group-text">
          <!-- <span
            class="icon-[tabler--search] text-base-content/80 size-5"
          ></span> -->
          <Search class="text-base-content/80 size-5" />
        </span>
        <input
          v-model="searchTerm"
          type="search"
          class="input max-w-sm border border-gray-200 px-3 py-2 text-sm w-full bg-gray-200 text-gray-900 placeholder:text-gray-600"
          aria-label="input"
          placeholder="Search for a converter..."
        />
      </div>
      <div
        v-if="searchTerm"
        class="absolute left-0 right-0 z-50 mt-2 rounded-md border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
      >
        <div class="max-h-[200px] overflow-auto">
          <div class="space-y-1 p-2">
            <RouterLink
              v-for="result in results"
              :key="result.name"
              :to="result.href"
            >
              <div
                class="flex cursor-pointer items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                tabindex="0"
                role="button"
                aria-pressed="false"
              >
                <span class="font-medium">{{ result.title }}</span>
                <span class="ml-auto text-gray-500 dark:text-gray-400">
                  {{ result.description }}
                </span>
              </div>
            </RouterLink>
            <div
              v-if="noResults"
              class="text-center text-gray-500 dark:text-gray-400"
            >
              No results found
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
