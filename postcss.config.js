"use strict";

const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
	syntax: "postcss-scss",
	plugins: [
		purgecss({
			content: ["src/vue-app/index.html", "src/vue-app/**/*.js", "src/vue-app/**/*.vue"],
			defaultExtractor(content) {
				const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
				return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
			},
			whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/],
			keyframes: true,
			fontFace: true,
			variables: true
		})
	]
};
