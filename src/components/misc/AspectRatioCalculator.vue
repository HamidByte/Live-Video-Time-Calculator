<script setup>
import { ref, computed, watch } from 'vue'
import { simpleAspectRatio } from '@/lib/aspectRatio'
import NumberInput from '@/components/ui/NumberInput.vue'

const resPresets = [
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

const ratioPresets = [
  { label: 'Custom', value: 'custom' },
  { label: 'HD Video (16:9)', value: '16:9' },
  { label: 'Standard Monitor (4:3)', value: '4:3' },
  { label: 'Classic Film (3:2)', value: '3:2' },
  { label: 'Cinemascope (21:9)', value: '21:9' },
  { label: 'Ultrawide (32:9)', value: '32:9' },
  { label: 'Widescreen (16:10)', value: '16:10' },
  { label: 'Square (1:1)', value: '1:1' },
  { label: 'Mobile Portrait (9:16)', value: '9:16' },
  { label: 'Panoramic (2:1)', value: '2:1' },
  // { label: 'IMAX (1.43:1)', value: '1.43:1' },
  // { label: 'Anamorphic (2.39:1)', value: '2.39:1' }
];
const w = Number(ratioPresets[1].value.split(':')[0])
const h = Number(ratioPresets[1].value.split(':')[1])

const selectedRes = ref(resPresets[5])
const selectedRatio = ref(ratioPresets[1])
const width = ref(w)
const height = ref(h)
const newWidth = ref(0)
const newHeight = ref(0)
const roundResults = ref(false)

watch(selectedRes, (newVal) => {
  if (newVal) {
    width.value = newVal.width
    height.value = newVal.height
    newWidth.value = 0
    newHeight.value = 0
  }
})

watch(selectedRatio, (newVal) => {
  if (newVal) {
    if (newVal.value !== 'custom') {
      [width.value, height.value] = newVal.value.split(':').map(Number)
      updateDimensions()
    }
  }
})

const aspectRatio = computed(() => simpleAspectRatio(width.value, height.value))

const convertToNumber = () => {
  width.value = Number(width.value);
  height.value = Number(height.value);
  newWidth.value = Number(newWidth.value);
  newHeight.value = Number(newHeight.value);
}

const updateDimensions = () => {
  convertToNumber();
  let calculatedHeight = (newWidth.value / width.value) * height.value;
  newHeight.value = roundResults.value ? Math.round(calculatedHeight) : Number(calculatedHeight.toFixed(2));
}

const updateWidth = () => {
  convertToNumber();
  let calculatedWidth = (newHeight.value / height.value) * width.value;
  newWidth.value = roundResults.value ? Math.round(calculatedWidth) : Number(calculatedWidth.toFixed(2));
}

watch([width, height, newWidth], ([width, height, newW], [oldW, oldH]) => {
  if (newW !== oldW) updateDimensions();
  // Set selectedRatio to 'custom' when width or height changes.
  // if (width !== oldW || height !== oldH) {
  //   selectedRatio.value = ratioPresets[0];
  // }
});

watch([newHeight], ([newH], [oldH]) => {
  if (newH !== oldH) updateWidth();
});

const reset = () => {
  width.value = w
  height.value = h
  newWidth.value = 0
  newWidth.value = 0
  selectedRes.value = resPresets[5]
  selectedRatio.value = ratioPresets[1]
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
              <label class="block mb-2"
                >Select from common presets (resolutions):</label
              >
              <select
                v-model="selectedRes"
                class="select w-full appearance-none mb-4"
                aria-label="select"
              >
                <option v-for="res in resPresets" :key="res.label" :value="res">
                  {{ res.label }}
                </option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block mb-2"
                >Select from common presets (ratios):</label
              >
              <select
                v-model="selectedRatio"
                class="select w-full appearance-none mb-4"
                aria-label="select"
              >
                <option
                  v-for="ratio in ratioPresets"
                  :key="ratio.value"
                  :value="ratio"
                >
                  {{ ratio.label }}
                </option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4">
              <NumberInput
                v-model.number="width"
                label="Original Width"
                :step="1"
                @input="updateDimensions"
              />

              <NumberInput
                v-model.number="height"
                label="Original Height"
                :step="1"
                @input="updateDimensions"
              />

              <NumberInput
                v-model.number="newWidth"
                label="New Width"
                :step="1"
                @input="updateDimensions"
              />

              <NumberInput
                v-model.number="newHeight"
                label="New Height"
                :step="1"
                @input="updateWidth"
              />
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

            <div class="flex items-center mx-auto mb-4">
              <button
                class="btn btn-primary"
                aria-label="Reset button"
                @click="reset"
              >
                Reset
              </button>
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
