<template>
    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <AddSong />
  
        <q-suspense>
          <template v-slot:default>
            <DeleteSong />
          </template>
          <template v-slot:fallback>
            Loading...
          </template>
        </q-suspense>
      </q-page-container>
    </q-layout>
  </template>
  
  <script setup>
  import AddSong from './AddSong.vue';
  import DeleteSong from './DeleteSong.vue';
  </script>
  
  <style scoped>
  .layout {
    max-width: 640px;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  </style>
  