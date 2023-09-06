<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-tabs class="text-light bg-teal">
        <q-route-tab to="/home" icon="home"/>
        <q-route-tab to="/mapel" icon="book"/>
        <q-route-tab to="/pengumuman" icon="announcement" />
        <q-route-tab to="/profile" icon="person"/>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup></script>

<style></style>

