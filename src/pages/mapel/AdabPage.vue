<template>
  <q-page>
    <q-header elevated class="bg-teal">
      <q-toolbar  class="flex">
        <q-toolbar-title>Adab dan Akhlak</q-toolbar-title>
        <q-btn 
        to="mapel"
        class="bg-grey"
        >
        back
      </q-btn>
      </q-toolbar>
    </q-header>
    <SongSection/>
  </q-page>
</template>

<script setup>
import SongSection from '../../components/partials/SongSection.vue';
</script>
