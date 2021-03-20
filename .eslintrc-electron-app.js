"use strict";

module.exports = {
	"env": {
		"commonjs": true,
		"es2021": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"PRODUCTION_BUILD": "readonly"
	},
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"ecmaVersion": 12,
		"requireConfigFile": false
	},
	"rules": {
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
