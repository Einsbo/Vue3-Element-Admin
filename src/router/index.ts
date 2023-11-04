import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true     if set true, item will not show in the side bar(default is false)
 */
interface RouteType {
	readonly path: string;
	component: Function;
	hidden?: boolean;
	children?: RouteType[];
	alwaysShow?: boolean;
	redirect?: string;
	name?: string;
	meta?: Meta;
}

interface Meta {
	roles?: string[];
	title?: string;
	icon?: string;
	noCache?: boolean;
	affix?: boolean;
	breadcrumb?: boolean;
	activeMenu?: string;
}

export const constantRoutes: Array<RouteType> = [
	{
		path: "/login",
		component: () => import("@/views/login/index.vue"),
		hidden: true,
	},
];

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
		redirect: { name: "Children1" },
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
