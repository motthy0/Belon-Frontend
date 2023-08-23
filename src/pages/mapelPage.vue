<template>
    <q-layout view="lHh Lpr lFf" class="full-background">
    <q-page-container class="items-center">
      <q-header elevated class="bg-teal">
      <q-toolbar>
        <q-toolbar-title>Mapel</q-toolbar-title>
      </q-toolbar>
    </q-header>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      to="/aqidah"
      text-color="black" 
      label="Aqidah"
      :style="{ backgroundImage: 'url(../../public/pic/taman4.jpg)' }"
      class="full-width"
    />
    <q-btn
      to="/ibadah"
      :style="{ backgroundImage: 'url(../../public/pic/kelas2.jpg)' }"
      text-color="black" 
      label="Ibadah"
      class="full-width"
    />
    <q-btn
      to="/adab"
      :style="{ backgroundImage: 'url(../../public/pic/kelas.jpg)' }"
      text-color="black" 
      label="Adab dan Akhlak"
      class="full-width"
    />
    <q-btn
      to="/siroh"
      :style="{ backgroundImage: 'url(../../public/pic/taman3.jpg)' }"
      text-color="black" 
      label="Siroh"
      class="full-width"
    />
    <q-btn
      to="/surat"
      :style="{ backgroundImage: 'url(../../public/pic/taman2.jpg)' }"
      text-color="black" 
      label="Hafalan Surat"
      class="full-width"
    />
    <q-btn
      to="/doa"
      :style="{ backgroundImage: 'url(../../public/pic/taman.jpg)' }"
      text-color="black" 
      label="Hafalan Doa"
      class="full-width"
    />
    <q-btn
      to="/hadist"
      :style="{ backgroundImage: 'url(../../public/pic/1.jpg)' }"
      text-color="black" 
      label="Hafalan Hadist"
      class="full-width"
    />
    <q-btn
      to="/arab"
      :style="{ backgroundImage: 'url(../../public/pic/cek.jpg)' }"
      text-color="black" 
      label="Bahasa Arab"
      class="full-width"
    />
  </div>
</q-page-container>
  </q-layout>
</template>

<style scoped>
.full-background {
  background-image: url(../../public/pic/home.jpg);
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
}

.full-width {
  width: 100%;
  height: 150px;
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
}
</style>
