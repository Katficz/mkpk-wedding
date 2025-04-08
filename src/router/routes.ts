import type { RouteRecordRaw } from "vue-router";
import IndexPage from "src/pages/IndexPage.vue";
import PlacesAndDrive from "pages/PlacesAndDrive.vue";
import ErrorNotFound from "src/pages/ErrorNotFound.vue";
import WhatGifts from "src/pages/WhatGifts.vue";
import JakSpimy from "src/pages/JakSpimy.vue";
import HarmonogramWesels from "src/pages/HarmonogramWesels.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: IndexPage },
      {
        path: "dojazd",
        component: PlacesAndDrive,
      },
      {
        path: "harmonogram",
        component: HarmonogramWesels,
      },
      {
        path: "prezenty",
        component: WhatGifts,
      },
      {
        path: "nocleg",
        component: JakSpimy,
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: ErrorNotFound,
  },
];

export default routes;
