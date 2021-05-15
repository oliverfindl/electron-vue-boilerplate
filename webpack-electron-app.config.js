"use strict";

const { resolve } = require("path");
const { DefinePlugin } = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env = {}) => ({
	entry: resolve(__dirname, "./src/electron-app/main.js"),
	mode: env.prod ? "production" : "development",
	output: {
		filename: "[name].js",
		path: resolve(__dirname, "./dist/electron-app/")
	},
	module: {
		rules: [ {
			test: /\.m?js$/i,
			loader: "babel-loader",
			options: {
				comments: false,
				minified: true
			}
		} ]
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src/electron-app/")
		},
		extensions: [ ".js", ".mjs", ".json" ]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false
			})
		]
	},
	plugins: [
		new DefinePlugin({
			PRODUCTION_BUILD: JSON.stringify(env.prod)
		}),
		new ESLintPlugin({
			files: [ "src/**/*.{vue,js,mjs}" ],
			overrideConfigFile: resolve(__dirname, "./.eslintrc-electron-app.js")
		}),
		new CleanWebpackPlugin()
	],
	devtool: !env.prod ? "eval-cheap-module-source-map" : undefined,
	target: "electron-main",
	node: {
		__filename: false,
		__dirname: false
	}
});
