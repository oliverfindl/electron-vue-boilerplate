"use strict";

const { resolve } = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { name: PACKAGE_NAME } = require(resolve(__dirname, "./package.json"));

module.exports = {
	entry: resolve(__dirname, "./src/vue-app/main.js"),
	mode: process.env.NODE_ENV,
	output: {
		filename: "javascript/[name].[hash:8].js",
		chunkFilename: "javascript/[id].[chunkhash:8].js",
		path: resolve(__dirname, "./dist/vue-app/")
	},
	module: {
		rules: [{
			enforce: "pre",
			test: /\.(vue|m?js)$/i,
			loader: "eslint-loader",
			exclude: /(node_modules|bower_components)/,
			options: {
				configFile: resolve(__dirname, "./.eslintrc-vue-app.js"),
				emitError: true,
				emitWarning: true,
				failOnError: true,
				failOnWarning: true
			}
		}, {
			test: /\.vue$/i,
			loader: "vue-loader"
		}, {
			test: /\.m?js$/i,
			loader: "babel-loader",
			exclude: /(node_modules|bower_components)/,
			options: {
				comments: false,
				minified: true
			}
		}, {
			test: /\.css$/i,
			use: [
				"vue-style-loader",
				{
					loader: "css-loader",
					options: {
						esModule: false,
						importLoaders: 1
						// 0 => no loaders (default);
						// 1 => postcss-loader;
					}
				},
				"postcss-loader"
			]
		}, {
			test: /\.scss$/i,
			use: [
				"vue-style-loader",
				{
					loader: "css-loader",
					options: {
						esModule: false,
						importLoaders: 2
						// 0 => no loaders (default);
						// 1 => postcss-loader;
						// 2 => postcss-loader, sass-loader
					}
				},
				"postcss-loader",
				{
					loader: "sass-loader",
					options: {
						sassOptions: {
							outputStyle: "compressed"
						}
					}
				}
			]
		}, {
			test: /\.sass$/i,
			use: [
				"vue-style-loader",
				{
					loader: "css-loader",
					options: {
						esModule: false,
						importLoaders: 2
						// 0 => no loaders (default);
						// 1 => postcss-loader;
						// 2 => postcss-loader, sass-loader
					}
				},
				"postcss-loader",
				{
					loader: "sass-loader",
					options: {
						sassOptions: {
							indentedSyntax: true,
							outputStyle: "compressed"
						}
					}
				}
			]
		}, {
			test: /\.svg(\?.*)?$/i,
			use: [{
				loader: "file-loader",
				options: {
					name: "images/[name].[hash:8].[ext]",
					esModule: false
				}
			}, {
				loader: "svgo-loader",
				options: {
					plugins: [{
						removeViewBox: false
					}]
				}
			}]
		}, {
			test: /\.(png|jpe?g|webp|gif|ico)(\?.*)?$/i,
			loader: "file-loader",
			options: {
				name: "images/[name].[hash:8].[ext]",
				esModule: false
			}
		}, {
			test: /\.(mp4|webm|ogg|mp3|aac|wav|flac)(\?.*)?$/i,
			loader: "file-loader",
			options: {
				name: "media/[name].[hash:8].[ext]",
				esModule: false
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
			loader: "file-loader",
			options: {
				name: "fonts/[name].[hash:8].[ext]",
				esModule: false
			}
		}]
	},
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.esm.js",
			"@": resolve(__dirname, "./src/vue-app/")
		},
		extensions: [ ".vue", ".js", ".mjs", ".json" ]
	},
	plugins: [
		new VueLoaderPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: PACKAGE_NAME,
			filename: "index.html",
			template: resolve(__dirname, "./src/vue-app/index.html"),
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
	devServer: {
		contentBase: __dirname,
		historyApiFallback: true,
		hot: true,
		inline: true,
		overlay: {
			errors: true,
			warnings: true
		},
		stats: "minimal"
	},
	target: "electron-renderer",
	node: {
		__filename: true,
		__dirname: true
	}
};
