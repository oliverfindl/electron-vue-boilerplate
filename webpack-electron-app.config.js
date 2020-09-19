"use strict";

const { resolve } = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: resolve(__dirname, "./src/electron-app/main.js"),
	mode: process.env.NODE_ENV,
	output: {
		path: resolve(__dirname, "./dist/electron-app/")
	},
	module: {
		rules: [{
			enforce: "pre",
			test: /\.m?js$/i,
			exclude: /node_modules/,
			loader: "eslint-loader",
			options: {
				configFile: resolve(__dirname, "./.eslintrc-electron-app.js"),
				emitError: true,
				emitWarning: true,
				failOnError: true,
				failOnWarning: true
			}
		}, {
			test: /\.m?js$/i,
			loader: "babel-loader",
			options: {
				comments: false,
				minified: true
			}
		}]
	},
	resolve: {
		extensions: [ ".js", ".mjs", ".json" ],
		alias: {
			"@": resolve(__dirname, "./src/electron-app/")
		}
	},
	plugins: [
		new CleanWebpackPlugin()
	],
	target: "electron-main",
	externals: [ nodeExternals() ],
	node: {
		__filename: false,
		__dirname: false
	}
};
