import type { RouteRecordRaw } from "vue-router";
import IndexPage from "src/pages/IndexPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: IndexPage },
    ],
  },
];

export default routes;
