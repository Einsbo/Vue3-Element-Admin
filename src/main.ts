import { createApp } from "vue";
import App from "./App.vue";

import "./style/index.scss";

import router from "./router";

createApp(App).use(router).mount("#app");
