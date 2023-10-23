import { fileURLToPath, URL } from "node:url";

import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";

import AutoImport from "unplugin-auto-import/vite";

const pathSrc = path.resolve(__dirname, "src");
console.log(pathSrc);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: path.resolve(pathSrc, "auto-imports.d.ts"),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
