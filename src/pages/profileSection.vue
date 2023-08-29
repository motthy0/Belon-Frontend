<template>
  <q-header elevated class="bg-teal">
    <q-toolbar>
      <q-toolbar-title>Profile</q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page class="q-pa-md full-background">
    <div class="profile-section">
      <div class="q-gutter-md q-flex">
        <div class="profile-picture-container">
          <img class="q-mb-md rounded-lg profile-picture" :src="profilePicture" alt="Profile Picture" />

          <input type="file" accept="image/*" @change="updateProfilePicture" v-if="isEditMode" class="file-input"
            id="profilePictureInput" />
          <label for="profilePictureInput" v-if="isEditMode" class="file-input-label">
            Change Photo
          </label>
        </div>
      </div>
      <div class="q-col-6 q-flex q-flex-column q-justify-between">
        <div class="q-mb-md">
          <div class="q-row q-items-end">
            <div class="q-col text-right">
              <q-btn flat dense color="green" @click="toggleEditMode"
                :label="isEditMode ? 'Save Profile' : 'Edit Profile'" />
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
            <q-input outlined dense v-model="fullName" label="Full Name" />
            <q-input outlined dense v-model="location" label="Location" />
          </div>
        </div>

        <q-list class="q-mx-md">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar rounded color="primary" text-color="white" icon="account_box" />
            </q-item-section>

            <q-item-section class="text-size">My Details</q-item-section>

            <q-item-section side>
              <q-icon name="arrow_right" size="35px" />
            </q-item-section>
          </q-item>
        </q-list>

        <q-list class="q-mx-md">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar rounded color="red" text-color="white" icon="logout" />
            </q-item-section>

            <q-item-section class="text-size">Logout</q-item-section>

            <q-item-section side>
              <q-icon name="arrow_right" size="35px" />
            </q-item-section>
          </q-item>
        </q-list>

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
    const imageUrl = URL.createObjectURL(file);
    profilePicture.value = imageUrl;
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


<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}

.full-background {
  background-image: url(../../public/pic/home.jpg);
  background-size: cover;
  background-position: center;
}

.profile-picture-container {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.profile-picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.file-input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
}

.file-input-label {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
}

.profile-section {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}
</style>