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
			loader: "eslint-loader",
			exclude: /node_modules/,
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
		alias: {
			"@": resolve(__dirname, "./src/electron-app/")
		},
		extensions: [ ".js", ".mjs", ".json" ]
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
