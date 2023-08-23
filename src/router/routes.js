import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    name:"Dashboard",
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
         path: "/home",
         component: () => import("pages/HomePage.vue")
      },
      {
         path: "/profile",
         component: () => import("pages/profileSection.vue")
      },
      {
         path: "/mapel",
         component: () => import("pages/mapelPage.vue")
      },
      {
         path: "/pengumuman",
         component: () => import("pages/pengumumanPage.vue")
      },

      //mapel
      {
         path: "/aqidah",
         component: () => import("pages/mapel/AqidahPage.vue")
      },
      {
         path: "/ibadah",
         component: () => import("pages/mapel/IbadahPage.vue")
      },
      {
         path: "/adab",
         component: () => import("pages/mapel/AdabPage.vue")
      },
      {
         path: "/siroh",
         component: () => import("pages/mapel/SirohPage.vue")
      },
      {
         path: "/surat",
         component: () => import("pages/mapel/SuratPage.vue")
      },
      {
         path: "/doa",
         component: () => import("pages/mapel/DoaPage.vue")
      },
      {
         path: "/hadist",
         component: () => import("pages/mapel/HadistPage.vue")
      },
      {
         path: "/arab",
         component: () => import("pages/mapel/ArabPage.vue")
      },
      //mapel

      {
         path: "/menu",
         component: () => import("pages/account/AccountMenu.vue")
      },
      {
         path: "/Alert",
         component: () => import("pages/pengumumanPage.vue")
      },
      {
         path: "/add",
         component: () => import("../views/AddSong.vue")
      },
      {
         path: "/delete",
         component: () => import("../views/DeleteSong.vue")
      },
      {
         path: "/song",
         component: () => import("../components/partials/SongSection.vue")
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

function createMyRouter() {
  return createRouter({
    history: createWebHistory(),
    routes,
  });
}

export const router = createMyRouter();
export default routes;
