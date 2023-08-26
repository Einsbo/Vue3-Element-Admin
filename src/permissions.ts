import router from "./router";
import { getToken } from "./utils/auth";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

/**
 * @description: 权限控制
 * @param {any} to 跳转的路由，匹配 router.js 中的路由占位符
 * @param {any} from 来自哪个路由，匹配 router.js 中的路由占位符
 * @param {any} next 继续向下执行: 根据路由占位符匹配组件
 * @return {*}
 * @Date: 2023-08-26 00:33:13
 * @LastEditors: Mengbaoxin
 * @LastEditTime: 2023-08-26 00:33:13
 * @FilePath: /vue3-project/src/permissions.ts
 *
 * 1. 在路由跳转之前，判断是否有 token
 * 2. 如果有 token，就跳转到目标路由
 * 3. 如果没有 token，就跳转到登录页
 * 4. 如果是登录页，就直接跳转
 * 5. 根据 token 判断是否登陆
 */
router.beforeEach((to, from, next) => {
  NProgress.start();
  const hasToken = getToken();

  if (hasToken) {
    console.log("有token");
    if (to.path === "/login") {
      next();
    } else {
      next();
    }
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next({ path: "/login" });
    }
    console.log("没有token");
  }
});

router.afterEach(() => {
  NProgress.done();
});
