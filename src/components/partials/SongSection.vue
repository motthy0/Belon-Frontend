<template>
  <div>
    <q-container class="q-py-4">
      <div class="q-flex q-justify-between q-items-center">
        <div class="text-h6 text-weight-bold text-grey-8">Songs</div>
      </div>
    </q-container>

    <q-separator class="q-mt-4 " color="green-5"  style="margin-bottom: 10px;"/>

    <q-container class="q-mt-md">
      <q-btn
        class="q-ml-auto q-mb-2"
        color="red"
        label="Delete Song"
        @click="$router.push('/delete')"
         style="
         margin-right: 5px;
         margin-bottom: 5px;
         "
      />
      <q-btn
        class="q-mb-2"
        label="Add Song"
        color="green"
        @click="$router.push('/add')"
        style="
        margin-left: 5px;
        margin-bottom: 5px;
        "
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
