# electron-vue-boilerplate

![license](https://img.shields.io/github/license/oliverfindl/electron-vue-boilerplate.svg?style=flat)
[![paypal](https://img.shields.io/badge/donate-paypal-blue.svg?colorB=0070ba&style=flat)](https://paypal.me/oliverfindl)

Simple boilerplate for building [Vue](https://github.com/vuejs/vue) app with [Electron](https://github.com/electron/electron) and [Webpack](https://github.com/webpack/webpack).

---

## Whats under the hood?

[![vue](.assets/vue.png)](https://github.com/vuejs/vue)
[![electron](.assets/electron.png)](https://github.com/electron/electron)
[![webpack](.assets/webpack.png)](https://github.com/webpack/webpack)
[![node-sass](.assets/node-sass.png)](https://github.com/sass/node-sass)

- [Simple](https://github.com/vuejs-templates/webpack-simple) [Vue](https://github.com/vuejs/vue) app ([vue-router](https://github.com/vuejs/vue-router) and [vuex](https://github.com/vuejs/vuex) can be additionally installed).
- [Electron](https://github.com/electron/electron) with [electron-builder](https://github.com/electron-userland/electron-builder) package for building installers.
- [Webpack](https://github.com/webpack/webpack) server for [development](https://github.com/webpack/webpack-dev-server) with HMR enabled.
- Support for [Sass](https://github.com/sass/sass) out of box thanks to [node-sass](https://github.com/sass/node-sass) package.

## Install

```bash
# Clone repository from GitHub to <directory>
$ git clone https://github.com/oliverfindl/electron-vue-boilerplate <directory>

# Switch to <directory>
$ cd <directory>

# Install all dependencies
$ npm install

# [optional] Update all dependencies
$ npm update
```

## Usage

```bash
# Start Webpack development server with Hot Module Replacement enabled
$ npm run dev

# Build and minify Vue app
$ npm run build

# Alias for start:dev
$ npm run start

# Launch Electron app connected to Webpack development server with DevTools enabled
$ npm run start:dev

# Launch Electron app with built Vue app
$ npm run start:prod

# Pack Electron app (for development purposes only)
$ npm run pack

# Build installers for your current platform
$ npm run dist

# Build installers for Windows
$ npm run dist:w

# Build installers for macOS
$ npm run dist:m

# Build installers for Linux
$ npm run dist:l
```

## App structure

```
.                       # root
├── dist                # directory for distributables 
│   ├── app             # directory for built Vue app
│   └── releases        # directory for built installers
├── src                 # directory for source code
│   ├── app             # directory for Vue app source code
│   │   ├── assets      # directory for assets (images, video, audio, fonts, etc.)
│   │   ├── App.vue     # main Vue component file
│   │   ├── index.html  # index file for Vue app
│   │   └── main.js     # main Vue app file
│   ├── icon.png        # app icon for Electron
│   └── main.js         # main Electron app file
├── package.json        # configuration file for npm
└── webpack.config.js   # configuration file for Webpack
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
