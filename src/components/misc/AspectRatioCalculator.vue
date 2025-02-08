<script setup>
import { ref, computed, watch } from 'vue'
import { nearestNormalAspectRatio } from '@/lib/aspectRatio'
import NumberInput from '@/components/ui/NumberInput.vue'

const presets = [
  { label: '8K UHDTV (7680 x 4320)', width: 7680, height: 4320 },
  { label: '5K iMac Retina (5120 x 2880)', width: 5120, height: 2880 },
  { label: '4K UHDTV (3840 x 2160)', width: 3840, height: 2160 },
  { label: 'iPad Retina (2048 x 1536)', width: 2048, height: 1536 },
  { label: 'WUXGA (1920 x 1200)', width: 1920, height: 1200 },
  { label: 'HD (1920 x 1080)', width: 1920, height: 1080 },
  { label: 'iPhone 6 (1334 x 750)', width: 1334, height: 750 },
  { label: 'Facebook (1200 x 630)', width: 1200, height: 630 },
  { label: 'iPhone 5 (1136 x 640)', width: 1136, height: 640 },
  { label: 'iPad (1024 x 768)', width: 1024, height: 768 },
  { label: 'Twitter (1024 x 512)', width: 1024, height: 512 },
  { label: 'iPhone 4 (960 x 640)', width: 960, height: 640 },
  { label: '800 x 600', width: 800, height: 600 },
  { label: 'Web Banner (728 x 90)', width: 728, height: 90 },
  { label: 'PAL (720 x 576)', width: 720, height: 576 },
  { label: 'VGA (640 x 480)', width: 640, height: 480 },
  { label: 'NTSC (576 x 486)', width: 576, height: 486 },
  { label: 'HVGA (320 x 480)', width: 320, height: 480 },
]

const selectedRatio = ref(presets[5])
const w1 = ref(presets[5].width)
const h1 = ref(presets[5].height)
const w2 = ref(0)
const h2 = ref(0)
const roundResults = ref(false)

// const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
// const aspectRatio = computed(() => {
//   const divisor = gcd(w1.value, h1.value)
//   return `${w1.value / divisor}:${h1.value / divisor}`
// })
const aspectRatio = computed(() => nearestNormalAspectRatio(w1.value, h1.value))

watch(selectedRatio, (newVal) => {
  if (newVal) {
    w1.value = newVal.width
    h1.value = newVal.height
    w2.value = 0
    h2.value = 0
  }
})

const calculateH2 = (newW2) => {
  let result = (h1.value / w1.value) * newW2
  return roundResults.value ? Math.round(result) : parseFloat(result.toFixed(2))
}

const calculateW2 = (newH2) => {
  let result = (w1.value / h1.value) * newH2
  return roundResults.value ? Math.round(result) : parseFloat(result.toFixed(2))
}

// Watch w2 and h2 to update both values
watch([w2, h2], ([newW2, newH2], [oldW2, oldH2]) => {
  if (newW2 !== oldW2) {
    h2.value = calculateH2(newW2)
  } else if (newH2 !== oldH2) {
    w2.value = calculateW2(newH2)
  }
})
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
          <h1 class="text-3xl font-bold mb-4">Aspect Ratio Calculator</h1>
          <p class="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            Use the form below to calculate the missing value for a particular
            aspect ratio. This is useful, for example, when resizing photos or
            video.
          </p>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-center space-y-4 text-center mt-8"
      >
        <div class="card w-1/2 mx-auto">
          <div class="card-body">
            <div class="mb-4">
              <label class="block mb-2">Select a preset (Common ratios):</label>
              <select
                v-model="selectedRatio"
                class="select w-full appearance-none mb-4"
                aria-label="select"
              >
                <option
                  v-for="ratio in presets"
                  :key="ratio.label"
                  :value="ratio"
                >
                  {{ ratio.label }}
                </option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4">
              <!-- W1 (Original Width) -->
              <NumberInput v-model="w1" label="W1 (Original Width)" :step="1" />

              <!-- H1 (Original Height) -->
              <NumberInput
                v-model="h1"
                label="H1 (Original Height)"
                :step="1"
              />

              <!-- W2 (New Width) -->
              <NumberInput v-model="w2" label="W2 (New Width)" :step="1" />

              <!-- H2 (New Height) -->
              <NumberInput v-model="h2" label="H2 (New Height)" :step="1" />
            </div>

            <div class="flex items-center mb-4">
              <div class="flex items-center gap-1">
                <input
                  v-model="roundResults"
                  type="checkbox"
                  class="checkbox checkbox-primary mr-2"
                  id="checkboxPrimary"
                />
                <label class="label label-text text-base" for="checkboxPrimary">
                  Round results to the nearest whole number
                </label>
              </div>
            </div>

            <div class="p-3 bg-gray-100 rounded">
              Your aspect ratio is: <strong>{{ aspectRatio }}</strong>
            </div>

            <!-- <div class="mb-4">
              <h3 class="mt-4 font-semibold">Instructions</h3>
              <p class="text-sm text-gray-600">
                Enter the original width (W1) & height (H1) on the left. Then
                enter either a new width (W2) or height (H2) to calculate the
                missing value.
              </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
