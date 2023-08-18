<template>
    <q-page>
      <q-container class="q-pa-md">
        <div class="text-h6 text-weight-bold text-grey-8">Add Song</div>
        <q-separator class="q-mb-4" color="green-5" />
  
        <TextInput
          class="q-mb-6"
          label="Title"
          v-model="title"
          input-type="text"
          error="This is a test error"
        />
  
        <q-input
          class="q-mb-6"
          v-model="selectedSound"
          type="file"
          @change="handleSoundUpload"
        />
  
        <SubmitFormButton btn-text="Add Song" @submit="addSong" />
      </q-container>
    </q-page>
  </template>
  
  <script setup>
  import TextInput from "../components/global/TextInput.vue";
  import SubmitFormButton from "../components/global/SubmitFormButton.vue";
  import { ref } from 'vue';
  import { useRouter } from "vue-router";
  
  const title = ref("");
  const router = useRouter();
  
  const selectedSound = ref(null);
  
  const handleSoundUpload = (event) => {
    selectedSound.value = event.target.files[0];
  };
  
  const addSong = async () => {
    if (!selectedSound.value) {
      console.error("No sound selected");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("sound", selectedSound.value);
  
    try {
      const response = await fetch("/api/add-song", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        router.push("/");
      } else {
        console.error("Failed to add song:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };
  </script>
  