import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: () => import("@/views/login/index.vue"),
		name: "Login",
	},
	{
		path: "/charts",
		component: () => import("@/views/charts/index.vue"),
		name: "Charts",
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
