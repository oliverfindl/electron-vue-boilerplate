"use strict";

const { resolve } = require("path");
const { readdirSync } = require("fs");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const nodeModules = {};
readdirSync("node_modules").filter(mods => ![".bin", ".cache"].includes(mods)).forEach(mod => nodeModules[mod] = `commonjs ${mod}`);

module.exports = {
	mode: process.env.NODE_ENV,
	target: "electron-main",
	entry: resolve(__dirname, "./src/electron-app/main.js"),
	output: {
		path: resolve(__dirname, "./dist/electron-app/")
	},
	externals: nodeModules,
	node: {
		__filename: false,
		__dirname: false
	},
	performance: {
		hints: false
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: "babel-loader",
			options: {
				comments: false,
				minified: true,
				presets: ["@babel/preset-env"]
			}
		}]
	},
	plugins: [
		new CleanWebpackPlugin()
	],
	resolve: {
		extensions: [".js", ".json"],
		alias: {
			"@": resolve(__dirname, "./src/electron-app/")
		}
	}
};
