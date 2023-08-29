<template>
  <div>
    <span class="title">Upload Song</span>

    <form @submit.prevent="handleSubmit" enctype="multipart/form-data" class="form">
      <fieldset :disabled="loading" class="field">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
      </fieldset>

      <fieldset :disabled="loading" class="field">
        <label for="song">Choose a Song</label>
        <input v-on:change="handlePreviewSong" multiple="false" type="file" accept="audio/mpeg" name="song" id="song" />
      </fieldset>

      <span class="error" v-if="errorMessage">{{ errorMessage }}</span>

      <button :disabled="loading" type="submit" class="btn">Save</button>
      <button
        :disabled="loading"
        @click="
          {
            urlSongPreview = null;
            errorMessage = null;
          }
        "
        type="reset"
        class="btn cancel"
      >
        Cancel
      </button>
    </form>

    <audio class="audio" v-if="urlSongPreview" :src="urlSongPreview" controls></audio>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const loading = ref(false);
const errorMessage = ref(null);
const urlSongPreview = ref(null);

async function handleSubmit(e) {
  loading.value = true;

  const title = e.currentTarget['title'].value;
  const song = e.currentTarget['song'].files[0];
  if (!title || !song) {
    alert('title and song is required');
    loading.value = false;
    return;
  }

  const data = new FormData();
  data.append('title', title);
  data.append('song', song);

  try {
    const resp = await axios.post('http://localhost:8080/api/songs', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(resp.data);

    loading.value = false;

    // router.push('/profile');
    return;
  } catch (error) {
    console.log(error.response.data);

    errorMessage.value = error.response.data.error;
    loading.value = false;

    return;
  }
}

function handlePreviewSong(e) {
  const songTemp = e.currentTarget.files[0];

  const url = URL.createObjectURL(songTemp);
  urlSongPreview.value = url;
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

.error {
  display: block;
  margin-top: 10px;
  margin-left: 5px;
  color: rgb(216, 0, 0);
  font-size: small;
}

.field {
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid rgb(200, 200, 200);
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: 4px 4px 5px rgb(178, 178, 178);
}

.btn {
  margin-top: 10px;
  margin-right: 5px;
  border: none;
  background-color: teal;
  color: white;
  font-size: 12px;
  padding: 5px 20px;
  border-radius: 5px;
}

.cancel {
  background-color: rgb(193, 0, 0);
  color: white;
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
