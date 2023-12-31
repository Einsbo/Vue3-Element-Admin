import { createApp } from "vue";
import App from "./App.vue";

import "./style/index.scss";

import router from "./router";
import "./permissions";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);

const mountedApp = app.mount("#app");
// HX-90 WIN 21:22 2023/9/4