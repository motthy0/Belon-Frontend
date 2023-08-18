<template>
  <div>
    <q-container class="q-py-4">
      <div class="q-flex q-justify-between q-items-center">
        <div class="text-h6 text-weight-bold text-grey-8">Songs</div>
      </div>
    </q-container>

    <q-separator class="q-mt-4" color="green-5" />

    <q-container class="q-mt-md">
      <q-btn
        class="q-ml-auto q-mb-2"
        color="red"
        label="Delete Song"
        @click="$router.push('/delete')"
      />
      <q-btn
        class="q-mb-2"
        label="Add Song"
        color="green"
        @click="$router.push('/add')"
      />
    </q-container>

    <div class="q-pb-4">
      <SongPlayer />
    </div>
  </div>
</template>

<script setup>
import SongPlayer from "./SongPlayer.vue";
import "aplayer/dist/APlayer.min.css";
</script>
