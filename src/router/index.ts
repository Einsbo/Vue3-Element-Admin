import { createRouter, createWebHistory } from "vue-router";

/* Layout */
import Layout from "@/layout/index.vue";

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
 *  roles: ["admin", "editor"]    control the page roles (you can set multiple roles)
 *  title: 'title'                the name show in sidebar and breadcrumb (recommend set)
 *  icon: 'svg-name'              the icon show in the sidebar
 *  noCache: true                 if set true, the page will no be cached(default is false)
 *  affix: true                   if set true, the tag will affix in the tags-view
 *  breadcrumb: false             if set false, the item will hidden in breadcrumb(default is true)
 *  activeMenu: '/example/list'   if set path, the sidebar will highlight the path you set
 * }
 *
 */

const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "Login",
  },
  { path: "/charts", component: () => import("@/views/charts/index.vue") },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
