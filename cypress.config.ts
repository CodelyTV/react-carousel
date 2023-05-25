import { defineConfig } from "cypress";

export default defineConfig({
	video: false,
	component: {
		specPattern: "tests/**/*.cy.{js,jsx,ts,tsx}",
		supportFile: "tests/tests-config/cypress/support/component.ts",
		indexHtmlFile: "tests/tests-config/cypress/support/component-index.html",
		devServer: {
			framework: "react",
			bundler: "vite",
		},
	},
});
