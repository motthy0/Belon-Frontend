<template>
    <q-btn
      class="
        q-float-right
        q-mt-md
        q-ml-auto
        bg-green-5
        text-white
        q-py-md
        q-px-xl
      "
      @click="$emit('submit', true)"
    >
      {{ btnText }}
    </q-btn>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({ btnText: String })
  </script>
  