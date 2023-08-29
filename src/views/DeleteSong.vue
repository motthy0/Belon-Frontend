<template>
  <div>
    <div class="refresh">
      <span class="title">Delete Song</span>
      <button @click="getSongs" class="btn-refresh">Refresh</button>
    </div>

    <div class="songs-layout">
      <template v-for="fileName in fileNames" :key="fileName">
        <div class="song-field">
          <div class="">
            <p class="song-name">{{ fileName }}</p>
            <audio class="audio" :src="`http://localhost:8080/${fileName}`" controls />
          </div>
          <button @click="deleteSong(fileName)" class="btn">X</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
const errorMessage = ref(null);
const fileNames = ref([]);

await getSongs();

async function getSongs() {
  try {
    const resp = await axios.get('http://localhost:8080/api/songs');
    console.log(resp.data.data);
    fileNames.value = resp.data.data;
  } catch (error) {
    console.log(error.response.data.error);
  }
}

async function deleteSong(name) {
  // backend return upadated songs data
  // so you dont need to fetch songs again after deleted a song
  try {
    const resp = await axios.delete(`http://localhost:8080/api/songs/${name}`);
    console.log(resp.data.data);
    fileNames.value = resp.data.data;
  } catch (error) {
    console.log(error.response.data.error);
  }
}
</script>

<style scoped>
.title {
  display: block;
  font-size: 24px;
  color: rgb(82, 82, 82);
  font-weight: bold;
  margin-bottom: 10px;
}

.songs-layout {
  max-width: 640px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.refresh {
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 0px 10px;
  margin-bottom: 20px;
}

.song-field {
  display: flex;
  align-items: center;
  gap: 5px;
}

.song-name {
  font-weight: bold;
  color: rgb(58, 58, 58);
  margin-bottom: -5px;
}

.btn-refresh {
  display: block;
  border: none;
  background-color: rgb(8, 170, 0);
  color: white;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
}

.btn {
  display: block;
  border: none;
  background-color: rgb(187, 0, 0);
  color: white;
  font-size: 12px;
  padding: 10px;
  border-radius: 5px;
}

.preview {
  display: flex;
  align-items: center;
  gap: 10px;
}

.audio {
  margin-top: 10px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
}
</style>
