import globals from "globals";
import pluginJs from "@eslint/js";

export default [
	{ ignores: [ "*.config.js", "cypress/**" ] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	{
		files: [ "tests/**" ],
		languageOptions: {
			globals: globals.jest,
		},
		rules: {
			// Since the required() function and __dirname variables aren't explicitly defined
			"no-undef": "always",
		},
	},
	{
		files: [ "resources/scripts/**/*.js" ],
		rules: {
			"array-bracket-spacing": [2, "always"],
			"no-const-assign": 2,
			"no-var": "error",
			"indent": [2, 2],
			"quotes": [2, "backtick"],
			"eqeqeq": "error",
		},
	},
];