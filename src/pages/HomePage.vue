<template>
    <q-layout view="lHh Lpr lFf">
      <q-page-container class="items-center full-background">
        <q-header elevated class="bg-teal">
          <q-toolbar>
            <q-toolbar-title>Home</q-toolbar-title>
          </q-toolbar>
        </q-header>
  
        <p class="mb">Selamat Datang!!</p>
        <h6 class="mb">Selamat Belajar</h6>
  
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
  
  <script setup>
  </script>
  
  <style scoped>
  .mb {
    margin: 0;
  }
  .full-background {
    background-image: url('../../public/pic/home.jpg');
    background-size: cover;
    height: 540px;
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
  </style>
  