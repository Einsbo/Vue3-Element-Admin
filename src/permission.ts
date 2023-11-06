import router from "@/router";
import { getToken } from "./utils/auth";

// no redirect whitelist
const whiteList = ["/login", "/auth-redirect"];

/**
 * @param {to} the target route location in a normalized format being navigate to
 * @param {from} the current route location in a normalized format being navigated away from
 * @param {next}
 *
 * @returns {false | a router location} return
 */
router.beforeEach((to, from, next) => {
	const hasToken = getToken();

	if (hasToken) {
		console.log("utils/permissions/hasToken");
		if (to.path === "/login") {
			next({ path: "/" });
		} else {
		}
	} else {
		console.log("utils/permissions/don't has Token");
		if (whiteList.includes(to.path)) {
			next();
		} else {
			next({ path: "/login" });
		}
	}
});
