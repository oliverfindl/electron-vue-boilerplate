# electron-vue-boilerplate

[![license](https://img.shields.io/github/license/oliverfindl/electron-vue-boilerplate.svg?style=flat)][mit]
[![paypal](https://img.shields.io/badge/donate-paypal-blue.svg?colorB=0070ba&style=flat)](https://paypal.me/oliverfindl)

Simple boilerplate for building [Vue](https://github.com/vuejs/vue) app with [Electron](https://github.com/electron/electron) and [Webpack](https://github.com/webpack/webpack).

---

## Whats under the hood?

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

# [optional] Check and update all dependencies
$ npm outdated
$ npm update
```

## Usage

``` bash
# [terminal 1] Launch Webpack development server with Vue app loaded
$ npm run dev

# [terminal 2] Launch Electron app connected to Webpack development server
$ npm run start

# [terminal 3] Build installers for your current platform
$ npm run dist
```

## Scripts

```bash
# Alias for watch:vue-app
$ npm run dev

# Alias for build:electron-app and start:electron-app
$ npm run start

# Launch Electron app connected to Webpack development server
$ npm run start:electron-app

# Build Electron app and Vue app
$ npm run build

# Build Electron app
$ npm run build:electron-app

# Build Vue app
$ npm run build:vue-app

# Launch Webpack development server with Vue app loaded
$ npm run watch:vue-app

# Pack Electron app (for development purposes only)
$ npm run pack

# Build installers for your current platform
$ npm run dist

# Build installers for all platforms
$ npm run dist:all

# Build installers for Windows
$ npm run dist:w

# Build installers for macOS
$ npm run dist:m

# Build installers for Linux
$ npm run dist:l

# [internal]
$ npm run postinstall
```

## App structure

```bash
.                                   # root
├── build                           # directory for built installers
├── dist                            # directory for distributables
│   ├── electron-app                # directory for Electron app distributables
│   └── vue-app                     # directory for Vue app distributables
├── src                             # directory for source code
│   ├── electron-app                # directory for Electron app source code
│   │   ├── assets                  # directory for Electron app assets
│   │   │   └── icon.png            # app icon for Electron app
│   │   └── main.js                 # main Electron app file
│   └── vue-app                     # directory for Vue app source code
│       ├── assets                  # directory for Vue app assets
│       ├── components              # directory for Vue app components
│       ├── styles                  # directory for Vue app styles
│       ├── App.vue                 # main Vue component file
│       ├── index.html              # index file for Vue app
│       ├── index.scss              # main style file for Vue app
│       └── main.js                 # main Vue app file
├── package.json                    # npm configuration file
├── postcss.config.js               # postcss configuration file
├── webpack-electron-app.config.js  # Webpack configuration file for Electron app
└── webpack-vue-app.config.js       # Webpack configuration file for Vue app
```

---

## License

[MIT][mit]

[mit]: https://opensource.org/licenses/MIT
