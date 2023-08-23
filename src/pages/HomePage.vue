<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="items-center full-background">
      <q-header elevated class="bg-teal">
        <q-toolbar>
          <q-toolbar-title>Home</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <div class="profile-section">
        <p class="mb">Selamat Datang!!</p>
        <h6 class="mb">Selamat Belajar</h6>
      </div>

      <div class="mt-3">
        <div class="q-pa-md q-gutter-sm flex justify-center">
          <q-btn
            to="/profile"
            round
            color="red"
            icon="person"
            class="button-item center-button"
          />
          <q-btn
            to="/mapel"
            round
            color="secondary"
            icon="book"
            class="button-item center-button"
          />
        </div>

        <div class="q-pa-md q-gutter-sm flex justify-center">
          <q-btn
            to="/pengumuman"
            round
            color="amber"
            glossy
            text-color="black"
            icon="announcement"
            class="button-item center-button"
          />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style scoped>
.mb {
  margin: 0;
}
.full-background {
  background-image: url("../../public/pic/home.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 600px;
  overflow: hidden;
}
.button-item {
  margin: 10px;
  width: 50px;
  height: 50px;
}
.center-button {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-section {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
