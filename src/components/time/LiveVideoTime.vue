<script setup>
import { ref } from 'vue'

const totalDuration = ref('')
const reverseTime = ref('')
const result = ref('')

const calculateActualTime = () => {
  const total = parseTime(totalDuration.value.trim())
  const reverse = parseTime(reverseTime.value.trim())

  // Validate inputs
  if (isNaN(total) || isNaN(reverse)) {
    alert('Please enter both total duration and reverse time in HH:MM format.')
    return
  }

  // Calculate actual time
  const actualTimeMinutes = total - reverse

  // Handle negative result (in case of incorrect input)
  if (actualTimeMinutes < 0) {
    alert('Reverse time cannot be greater than total duration.')
    return
  }

  result.value = formatTime(actualTimeMinutes)
}

const parseTime = (time) => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

// Convert back to HH:MM format
const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`
}
</script>

<template>
  <section
    class="flex-1 flex flex-col items-center justify-start text-center py-6 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800"
  >
    <div class="container px-4 md:px-6">
      <div
        class="flex flex-col items-center space-y-6 text-center animate-moveUpInitial"
      >
        <div class="space-y-2">
          <h1 class="text-3xl font-bold mb-4">Live Video Time Calculator</h1>
          <p class="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            Enter the total duration of the video and the reverse time shown
            during the live stream.
          </p>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-center space-y-4 text-center mt-8"
      >
        <div class="card w-1/2 mx-auto">
          <div class="card-body">
            <div class="mb-4">
              <label for="totalDuration" class="block"
                >Total Duration (HH:MM):</label
              >
              <input
                type="text"
                id="totalDuration"
                v-model="totalDuration"
                placeholder="e.g., 01:12"
                class="input input-bordered w-full"
              />
            </div>

            <div class="mb-4">
              <label for="reverseTime" class="block"
                >Reverse Time Shown (HH:MM):</label
              >
              <input
                type="text"
                id="reverseTime"
                v-model="reverseTime"
                placeholder="e.g., 00:30"
                class="input input-bordered w-full"
              />
            </div>

            <button @click="calculateActualTime" class="btn btn-primary w-full">
              Calculate Actual Time
            </button>
          </div>

          <div v-if="result" class="card-footer text-center mt-4">
            <h2>
              Actual Time in Video: <span>{{ result }}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
