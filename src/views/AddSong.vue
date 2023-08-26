<!-- <template>
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
   -->

   <template>
    <q-page class="q-pa-md">
      <div class="text-h6">Add Song</div>
      <q-separator color="green-500" />
      
      <text-input
        class="q-mb-md"
        label="Title"
        placeholder="Cool New Song"
        v-model="title"
        :error="errors.title ? errors.title[0] : ''"
      />
  
      <div class="q-mb-md">
        <label class="q-label">Select Image</label>
        <q-input
          outlined
          type="file"
          id="image"
          ref="file"
          @change="handleFileUpload"
        />
      </div>
  
      <submit-form-button
        btn-text="Add Song"
        @submit="addSong"
      />
  
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import TextInput from '../components/global/TextInput.vue'
  import SubmitFormButton from '../components/global/SubmitFormButton.vue'
  import Swal from '../sweetalert2.js'
  import { useUserStore } from '../../src/store/user-store'
  import { useSongStore } from '../../src/store/song-store'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  
  const { id: userId } = useUserStore()
  const songStore = useSongStore()
  const router = useRouter()
  
  let title = ref(null)
  let song = ref(null)
  let file = ref(null)
  let errors = ref([])
  
  const handleFileUpload = () => {
    song.value = file.value.files[0]
  }
  
  const addSong = async () => {
    if (!song.value) {
      Swal.fire(
        'Opps, something went wrong!',
        'You forgot to upload the mp3 file!',
        'warning'
      )
      return null
    }
  
    try {
      const form = new FormData()
      form.append('user_id', userId)
      form.append('title', title.value || '')
      form.append('file', song.value)
  
      await axios.post('api/songs', form)
  
      songStore.fetchSongsByUserId(userId)
  
      setTimeout(() => {
        router.push('/account/profile/' + userId)
      }, 200)
    } catch (err) {
      errors.value = err.response.data.errors
    }
  }
  </script>
  
  <style scoped>
  /* Gaya tampilan sesuai kebutuhan Anda */
  </style>
  