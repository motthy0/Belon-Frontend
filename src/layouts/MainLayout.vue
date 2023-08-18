<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>
        <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-list padding>
        <q-item-label header> Dashboard </q-item-label>
        <q-item
          to="/home"
          exact
          clickable 
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section @click="toggleProfileSubMenu">
            <q-item-label>Profile</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          exact
          clickable 
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="book" />
          </q-item-section>
          <q-item-section @click="toggleMapelSubMenu">
            <q-item-label>Mapel</q-item-label>
          </q-item-section>
        </q-item>

        <q-item-dropdown v-if="showMapelSubMenu" icon="book">
          <q-item
            to="/aqidah"
            exact
            clickable 
            v-ripple
          >
            <q-item-section>
              <q-item-label>Aqidah</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            to="/ibadah"
            exact
            clickable 
            v-ripple
          >
            <q-item-section>
              <q-item-label>Ibadah</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            to="/adab"
            exact
            clickable 
            v-ripple
          >
            <q-item-section>
              <q-item-label>Adab dan Akhlak</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            to="/siroh"
            exact
            clickable 
            v-ripple
          >
            <q-item-section>
              <q-item-label>Siroh</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            to="/surat"
            exact
            clickable 
            v-ripple
          >
            <q-item-section>
              <q-item-label>Surat</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            to="/doa"
            exact
            clickable 
            v-ripple
          >
            <q-item-section>
              <q-item-label>Doa</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            to="/hadist"
            exact
            clickable 
            v-ripple
          >
            <q-item-section>
              <q-item-label>Hadist</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            to="/arab"
            exact
            clickable 
            v-ripple
          >
            <q-item-section>
              <q-item-label>Arab</q-item-label>
            </q-item-section>
          </q-item>

        </q-item-dropdown>
      </q-list>
      <q-item
          to="/Alert" 
          exact
          clickable 
        >
          <q-item-section avatar>
            <q-icon name="warning" />
          </q-item-section>
          <q-item-section @click="toggleProfileSubMenu">
            <q-item-label>pengumuman</q-item-label>
          </q-item-section>
        </q-item>
    </q-drawer>
    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
      </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const showMapelSubMenu = ref(false);
    const showProfileSubMenu = ref(false);

    const toggleMapelSubMenu = () => {
      showMapelSubMenu.value = !showMapelSubMenu.value;
      showProfileSubMenu.value = false;
    };

    const toggleProfileSubMenu = () => {
      showProfileSubMenu.value = !showProfileSubMenu.value;
      showMapelSubMenu.value = false;
    };

    return {
      leftDrawerOpen,
      showMapelSubMenu,
      showProfileSubMenu,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleMapelSubMenu,
      toggleProfileSubMenu,
    };
  },
});
</script>

