<script setup>
// import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: Number,
  label: String,
  step: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['update:modelValue'])

const decrement = () => {
  emit('update:modelValue', props.modelValue - props.step)
}

const increment = () => {
  emit('update:modelValue', props.modelValue + props.step)
}
</script>

<template>
  <div class="input-group w-full" data-input-number>
    <span class="input-group-text border-base-content/25 border-e ps-0">
      <button
        type="button"
        class="flex size-12 items-center justify-center"
        aria-label="Decrement button"
        @click="decrement"
      >
        <span class="icon-[tabler--minus] size-3.5 flex-shrink-0"></span>
      </button>
    </span>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', Number($event.target.value))"
      class="input pb-0.5 text-center"
      type="text"
      aria-label="seat counter"
    />
    <div
      class="absolute bottom-1 start-1/2 flex -translate-x-1/2 items-center rtl:translate-x-1/2"
    >
      <!-- <span class="icon-[tabler--ticket] text-base-content/80 me-2"></span> -->
      <span class="text-xs text-base-content/80 text-nowrap">{{ label }}</span>
    </div>
    <span class="input-group-text border-base-content/25 border-s pe-0">
      <button
        type="button"
        class="flex size-12 items-center justify-center"
        aria-label="Increment button"
        @click="increment"
      >
        <span class="icon-[tabler--plus] size-3.5 flex-shrink-0"></span>
      </button>
    </span>
  </div>
</template>
