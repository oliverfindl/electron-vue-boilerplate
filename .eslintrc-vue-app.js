"use strict";

module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/vue3-essential"
	],
	"parserOptions": {
		"ecmaVersion": 12,
		"parser": "babel-eslint",
		"sourceType": "module"
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
