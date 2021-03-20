"use strict";

const { resolve } = require("path");
const { DefinePlugin, HotModuleReplacementPlugin } = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PACKAGE_PATH = resolve(__dirname, "./package.json");
const { name: PACKAGE_NAME } = require(PACKAGE_PATH);

module.exports = (env = {}) => ({
	entry: resolve(__dirname, "./src/vue-app/main.js"),
	mode: env.prod ? "production" : "development",
	output: {
		filename: "scripts/[name].[contenthash:8].js",
		chunkFilename: "scripts/[id].[contenthash:8].js",
		path: resolve(__dirname, "./dist/vue-app/")
	},
	module: {
		rules: [ {
			test: /\.vue$/i,
			loader: "vue-loader"
		}, {
			test: /\.m?js$/i,
			loader: "babel-loader",
			exclude: /node_modules/,
			options: {
				comments: false,
				minified: true
			}
		}, {
			test: /\.css$/i,
			use: [
				"style-loader",
				{
					loader: "css-loader",
					options: {
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
				"style-loader",
				{
					loader: "css-loader",
					options: {
						importLoaders: 2
						// 0 => no loaders (default);
						// 1 => postcss-loader;
						// 2 => postcss-loader, sass-loader;
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
				"style-loader",
				{
					loader: "css-loader",
					options: {
						importLoaders: 2
						// 0 => no loaders (default);
						// 1 => postcss-loader;
						// 2 => postcss-loader, sass-loader;
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
			use: [
				{
					loader: "file-loader",
					options: {
						name: "images/[name].[contenthash:8].[ext]",
						esModule: false
					}
				},
				"svgo-loader"
			]
		}, {
			test: /\.(png|jpe?g|webp|gif|ico)(\?.*)?$/i,
			loader: "file-loader",
			options: {
				name: "images/[name].[contenthash:8].[ext]",
				esModule: false
			}
		}, {
			test: /\.(mp4|webm|ogg|mp3|aac|wav|flac)(\?.*)?$/i,
			loader: "file-loader",
			options: {
				name: "media/[name].[contenthash:8].[ext]",
				esModule: false
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
			loader: "file-loader",
			options: {
				name: "fonts/[name].[contenthash:8].[ext]",
				esModule: false
			}
		} ]
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src/vue-app/")
		},
		extensions: [ ".vue", ".js", ".mjs", ".json" ]
	},
	plugins: [
		...(!env.prod ? [ new HotModuleReplacementPlugin() ] : []),
		new DefinePlugin({
			__VUE_OPTIONS_API__: JSON.stringify(false),
			__VUE_PROD_DEVTOOLS__: JSON.stringify(false)
		}),
		new VueLoaderPlugin(),
		new ESLintPlugin({
			files: [ "src/**/*.{vue,js,mjs}" ],
			overrideConfigFile: resolve(__dirname, "./.eslintrc-vue-app.js")
		}),
		new StylelintPlugin({
			files: [ "src/**/*.{vue,scss}" ]
		}),
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
	devtool: !env.prod ? "eval-cheap-module-source-map" : undefined,
	target: "electron-renderer",
	node: {
		__filename: true,
		__dirname: true
	}
});
