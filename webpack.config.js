"use strict";

const { resolve } = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: process.env.NODE_ENV,
	target: "electron-renderer",
	entry: resolve(__dirname, "./src/app/main.js"),
	output: {
		path: resolve(__dirname, "./dist/app/"),
//		target: "/",
		filename: "./javascript/[name].[hash:8].js",
		chunkFilename: "./javascript/[id].[chunkhash:8].js"
	},
	node: {
		__filename: process.env.NODE_ENV === "development",
		__dirname: process.env.NODE_ENV === "development"
	},
	devServer: {
		historyApiFallback: true,
		overlay: {
			warnings: true,
			errors: true
		}
	},
	performance: {
		hints: false
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: "vue-loader"
		}, {
			test: /\.js$/,
			loader: "babel-loader",
			exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
			options: {
				presets: ["vue", "env", "minify", "stage-2"]
			}
		}, {
			test: /\.css$/,
			use: [
				"vue-style-loader",
				"css-loader"
			]
		}, {
			test: /\.scss$/,
			use: [
				"vue-style-loader",
				"css-loader",
				"sass-loader"
			]
		}, {
			test: /\.sass$/,
			use: [
				"vue-style-loader",
				"css-loader",
				"sass-loader?indentedSyntax"
			]
		}, {
			test: /\.(png|jpe?g|gif|ico|svg)(\?.*)?$/,
			loader: "file-loader",
			options: {
				name: "./images/[name].[hash:8].[ext]"
			}
		}, {
			test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
			loader: "file-loader",
			options: {
				name: "./media/[name].[hash:8].[ext]"
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: "file-loader",
			options: {
				name:"./fonts/[name].[hash:8].[ext]"
			}
		}]
	},
	plugins: [
		new VueLoaderPlugin(),
		new CleanWebpackPlugin(["./dist/app/"]),
		new HtmlWebpackPlugin({
			filename: "./index.html",
			template: "./src/app/index.html",
			inject: true,
			minify: {
				collapseInlineTagWhitespace: true,
				collapseWhitespace: true,
				html5: true,
				keepClosingSlash: true,
				removeComments: true
			},
			xhtml: true
		})
	],
	resolve: {
		extensions: [".js", ".vue", ".json"],
		alias: {
			"vue$": "vue/dist/vue.esm.js",
			"@": resolve(__dirname, "./src/app/")
		}
	}
};
