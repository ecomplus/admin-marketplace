# E-Com Plus Admin Marketplace

[![Publish](https://github.com/ecomplus/admin-marketplace/workflows/Publish/badge.svg)](https://github.com/ecomplus/admin-marketplace/actions?workflow=Publish) [![CodeFactor](https://www.codefactor.io/repository/github/ecomplus/admin-marketplace/badge/master)](https://www.codefactor.io/repository/github/ecomplus/admin-marketplace/overview/master) [![npm version](https://img.shields.io/npm/v/@ecomplus/admin-marketplace.svg)](https://www.npmjs.org/@ecomplus/admin-marketplace) [![License AGPL](https://img.shields.io/badge/License-AGPL-orange.svg)](https://opensource.org/licenses/AGPL-3.0)

Apps marketplace for E-Com Plus admin with Vue.js SPA

[CHANGELOG](https://github.com/ecomplus/admin-marketplace/blob/master/CHANGELOG.md)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

To login on dev server you should set _username_ and _password_ on `localStorage` with your credential for our demo store (1011):
```js
localStorage.getItem('username', 'myuser')
localStorage.getItem('password', 'mypassword')
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
