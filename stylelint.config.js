"use strict";

module.exports = {
	extends: "stylelint-config-recommended-scss",
	plugins: [
		"stylelint-scss"
	],
	rules: {
		"indentation": "tab",
		"linebreaks": "unix",
		"string-quotes": "double",
		"declaration-block-trailing-semicolon": "always"
	}
};
