import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [react(), dts(), cssInjectedByJsPlugin()],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "MyComponent",
			fileName: "my-component",
		},
		rollupOptions: {
			external: ["react"],
			output: {
				globals: {
					react: "React",
				},
			},
		},
	},
});
