<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md q-flex">
      <div class="q-col-6 q-flex q-justify-end">
        <img
          class="q-mb-md rounded-lg"
          :src="profilePicture"
          alt="Profile Picture"
        />
        <input
          type="file"
          accept="image/*"
          @change="updateProfilePicture"
          v-if="isEditMode"
        />
      </div>
      <div class="q-col-6 q-flex q-flex-column q-justify-between">
        <div class="q-mb-md">
          <div class="q-row q-items-end">
            <div class="q-col text-right">
              <q-btn
                flat
                dense
                color="green"
                @click="toggleEditMode"
                :label="isEditMode ? 'Save Profile' : 'Edit Profile'"
              />
            </div>
            <div class="q-col">
              <h1 class="text-h6 text-weight-bold text-primary q-mb-xs">
                {{ isEditMode ? 'Edit Profile' : fullName }}
              </h1>
              <span class="text-caption text-grey">
                <i><b>{{ location }}</b></i>
              </span>
            </div>
          </div>
          <div v-if="isEditMode">
            <q-input
              outlined
              dense
              v-model="fullName"
              label="Full Name"
            />
            <q-input
              outlined
              dense
              v-model="location"
              label="Location"
            />
            <!-- Tambahkan data diri lainnya di sini -->
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const profilePicture = ref('https://via.placeholder.com/300');
const fullName = ref('John Doe'); 
const location = ref('London, UK'); 

const isEditMode = ref(false);

const updateProfilePicture = (event) => {
  const file = event.target.files[0];
  if (file) {
    profilePicture.value = URL.createObjectURL(file);
  }
};

onMounted(() => {
  const FullNameStored = localStorage.getItem('fullName');
  if (FullNameStored) {
    fullName.value = FullNameStored;
  }

  const LocationStored = localStorage.getItem('location');
  if (LocationStored) {
    location.value = LocationStored;
  }

  const profilePictureStored = localStorage.getItem('profilePicture');
  if (profilePictureStored) {
    profilePicture.value = profilePictureStored;
  }
});

const toggleEditMode = () => {
  if (isEditMode.value) {
    localStorage.setItem('fullName', fullName.value);
    localStorage.setItem('location', location.value);
    localStorage.setItem('profilePicture', profilePicture.value);

    isEditMode.value = false;
  } else {
    isEditMode.value = true;
  }
};
</script>
