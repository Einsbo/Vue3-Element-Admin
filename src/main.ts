import "./assets/main.css";

import "normalize.css/normalize.css";
import "@/styles/index.scss";
import "font-awesome/css/font-awesome.min.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
