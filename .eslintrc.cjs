/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript",
		"@vue/eslint-config-prettier/skip-formatting"
	],
	parserOptions: {
		ecmaVersion: "latest"
	},
	rules: {
		"vue/multi-word-component-names": "off",
		"vue/no-reserved-component-names": "off"
	}
};
// module.exports = {
// 	root: true,
// 	extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
// 	parser: "vue-eslint-parser",
// 	parserOptions: {
// 		parser: "@typescript-eslint/parser"
// 	}
// };
