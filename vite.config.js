import path from "path";

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver()],

      dts: path.resolve(pathSrc, "auto-imports.d.js"),
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, "components.d.js"),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
