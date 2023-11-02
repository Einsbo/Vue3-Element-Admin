import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/login/index.vue"),
    name: "Login",
  },
  {
    path: "/charts/:id",
    component: () => import("@/views/charts/index.vue"),
    name: "Charts",
    props: true,
    children: [
      {
        path: "",
        name: "Children1",
        component: () => import("@/views/charts/children1.vue"),
      },
      {
        path: "children2",
        name: "Children2",
        component: () => import("@/views/charts/children2.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
