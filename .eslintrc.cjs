module.exports = {
	extends: ["react-app", "eslint-config-codely/typescript", "plugin:storybook/recommended"],
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: ["./tsconfig.json"],
				tsconfigRootDir: __dirname,
			},
		},
		{
			files: [
				"tests/**/*.cy.tsx",
				"tests/tests-config/cypress/**/*.ts",
				"tests/tests-helpers/**/*.ts",
			],
			parserOptions: {
				project: ["./tests/tsconfig.json"],
				tsconfigRootDir: __dirname,
			},
			rules: {
				"@typescript-eslint/no-unused-expressions": "off",
			},
		},
	],
};
