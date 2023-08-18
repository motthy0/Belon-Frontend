<template>
    <div>
      <q-label
        :class="[labelColor ? 'text-grey-9' : 'text-grey-1']"
      >
        {{ label }}
      </q-label>
      <q-input
        :placeholder="placeholder"
        :type="inputType"
        v-model="inputComputed"
      />
      <q-banner v-if="error" color="red">
        {{ error }}
      </q-banner>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, toRefs, computed } from 'vue'
  
  const emit = defineEmits(['update:input'])
  
  const props = defineProps({
    label: String,
    labelColor: { type: Boolean, default: true },
    input: String,
    placeholder: { type: String, default: '' },
    inputType: String,
    error: String
  })
  
  const { label, labelColor, input, placeholder, error } = toRefs(props)
  
  const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val)
  })
  </script>
  