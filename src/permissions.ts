import router from "./router";
import { getToken } from "./utils/authToken";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const whiteList = ["/login"];

/**
 * @description: permissions router
 * @param {any} to: jump to the target route
 * @param {any} from: jump from the current route
 * @param {any} next: next function
 * @return {*}
 * @Date: 2023-08-26 00:33:13
 * @LastEditors: Mengbaoxin
 * @LastEditTime: 2023-08-26 00:33:13
 * @FilePath: /vue3-project/src/permissions.ts
 *
 * 1. Determine whether to log in according to the token
 * 2. before each route enters, determine whether there is a token
 * 3. If there is a token, jump to the target route
 * 4. If there is no token, jump to the login page
 * 5. If it is the login page, jump directly
 */
router.beforeEach((to, from, next) => {
  NProgress.start();

  // determine whether the user has logged in
  const hasToken = getToken();

  /* HX-90 MAC */
  if (hasToken) {
    // has token
    if (to.path === "/login") {
      next();
    } else {
      next();
    }
  } else {
    // has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      next({ path: "/login" });
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
