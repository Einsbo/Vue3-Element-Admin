import { fileURLToPath, URL } from "node:url";

import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";

// Import Element-Plus components on-demand
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// Import Icon on-demand
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		VueDevTools(),
		AutoImport({
			// Auto import functions from Vue, e.g. ref, reactive, toRef...
			// Auto import functions from vue-router, e.g. useRoute, RouterLink...
			imports: ["vue", "vue-router"],

			resolvers: [
				// Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
				ElementPlusResolver(),

				// Auto import icon components
				IconsResolver({
					prefix: "Icon",
				}),
			],

			// generate auto-import.d.ts in the pathSrc directory
			dts: path.resolve(pathSrc, "auto-imports.d.ts"),
		}),
		// Auto register components
		Components({
			// custom components's parser
			resolvers: [
				// Auto register icon components
				IconsResolver({
					enabledCollections: ["ep"],
					/**
					 * Change the Icon component prefix
					 * It is set to "i" by default, set to false by disabled
					 */
					// prefix: "icon",
				}),

				// Auto register Element Plus components
				ElementPlusResolver(),
			],

			// generate components.d.ts in the pathSrc directory
			dts: path.resolve(pathSrc, "components.d.ts"),
		}),

		Icons({
			// Auto Install Icons
			autoInstall: true,
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
