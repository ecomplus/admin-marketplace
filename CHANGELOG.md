# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/ecomplus/admin-marketplace/compare/v1.5.0...v2.0.0) (2022-01-12)


### ⚠ BREAKING CHANGES

* **app-feed-importer:** 🧨 you will need to reinstall the feed importer app

### Features

* **app-feed-importer:** custom view for feed importer app ([#205](https://github.com/ecomplus/admin-marketplace/issues/205)) ([22eb82c](https://github.com/ecomplus/admin-marketplace/commit/22eb82c54b9a49829f51485ca58eb6b62944adfd)), closes [#13](https://github.com/ecomplus/admin-marketplace/issues/13) [#13](https://github.com/ecomplus/admin-marketplace/issues/13)


### Bug Fixes

* **deps:** update all non-major dependencies ([#203](https://github.com/ecomplus/admin-marketplace/issues/203)) ([ecba7d2](https://github.com/ecomplus/admin-marketplace/commit/ecba7d254dcc190563a15c3dbc77cfffa911dfa4))

## [1.5.0](https://github.com/ecomplus/admin-marketplace/compare/v1.4.0...v1.5.0) (2021-12-07)


### Features

* **mocked-apps:** add new paid "ERP Sig 2000" app ([da481b7](https://github.com/ecomplus/admin-marketplace/commit/da481b7f5f1556311022a471558290fbf3ef087f))


### Bug Fixes

* **deps:** update all non-major dependencies ([#194](https://github.com/ecomplus/admin-marketplace/issues/194)) ([8816c67](https://github.com/ecomplus/admin-marketplace/commit/8816c67e45b2da0df6e5e7e2e300bcadc1b6fabe))
* **deps:** update all non-major dependencies ([#196](https://github.com/ecomplus/admin-marketplace/issues/196)) ([552f82f](https://github.com/ecomplus/admin-marketplace/commit/552f82fd55f04145e20e3652de9df4931f774e20))

## [1.4.0](https://github.com/ecomplus/admin-marketplace/compare/v1.3.1...v1.4.0) (2021-10-22)


### Features

* **ec-admin-settings-form:** add button to delete all rules ([#193](https://github.com/ecomplus/admin-marketplace/issues/193)) ([1e58431](https://github.com/ecomplus/admin-marketplace/commit/1e584311886b7adb8adcf25877e5beb9d14725c3))

### [1.3.1](https://github.com/ecomplus/admin-marketplace/compare/v1.3.0...v1.3.1) (2021-09-29)


### Bug Fixes

* **imports:** prevent invalid @ecomplus/auth named import ([c38cb96](https://github.com/ecomplus/admin-marketplace/commit/c38cb96c0300bb6558aec2185c092f7e9407ba88))

## [1.3.0](https://github.com/ecomplus/admin-marketplace/compare/v1.2.0...v1.3.0) (2021-09-28)


### Features

* **ec-app-card:** support for custom mocked apps ([2f6ae66](https://github.com/ecomplus/admin-marketplace/commit/2f6ae6643ad637e177538da5d23e0d0e7c29473d))
* **ec-apps-market:** add new `additionalApps` prop for mocked apps [[#178](https://github.com/ecomplus/admin-marketplace/issues/178)] ([da3bed3](https://github.com/ecomplus/admin-marketplace/commit/da3bed3bae66013569f36907c099f8cfb22f78f1))
* **ec-apps-market:** optional new `skippedApps` and `canDeleteSkippedApps` (default from window) ([4962246](https://github.com/ecomplus/admin-marketplace/commit/49622467dbb61b7df4f72ecaae87dc7189b088fe))
* **input-text:** toggle input type password/text [[#190](https://github.com/ecomplus/admin-marketplace/issues/190)] ([e992963](https://github.com/ecomplus/admin-marketplace/commit/e99296315a140ed6500fdcaa8ed4885868df158d))
* **marketplace:** new sales/shipping tabs and optional route param ([d1e8d95](https://github.com/ecomplus/admin-marketplace/commit/d1e8d959521ded2bbd8317aa78eca2ac6193cbc6))
* **mocked-apps:** first mocked apps for storefront and partner integrations on marketplace [[#178](https://github.com/ecomplus/admin-marketplace/issues/178)] ([df35dbb](https://github.com/ecomplus/admin-marketplace/commit/df35dbbefc95800c97d5d0e42b30f87de4d017f4))


### Bug Fixes

* **application:** properly push new route and render application again on new app click ([0f4c4e0](https://github.com/ecomplus/admin-marketplace/commit/0f4c4e0fdda5df0aac2b40a8474a02af10d99e9a))
* **auto-update-apps:** better checking major version [[#182](https://github.com/ecomplus/admin-marketplace/issues/182)] ([71ad0c3](https://github.com/ecomplus/admin-marketplace/commit/71ad0c356b15caa59819a1bc4f181393149f78a3))
* **deps:** update all non-major dependencies ([#189](https://github.com/ecomplus/admin-marketplace/issues/189)) ([7a45f29](https://github.com/ecomplus/admin-marketplace/commit/7a45f29ff4d4d91a96fcc789e52fe62a6ec54544))
* **ec-application:** fix filtering related apps (different id) ([957df1a](https://github.com/ecomplus/admin-marketplace/commit/957df1aa251a534c7eacda8bb79b238414c4c814))
* **input-text:** prevent anoying browser save password option [[#186](https://github.com/ecomplus/admin-marketplace/issues/186)] ([0a33c3a](https://github.com/ecomplus/admin-marketplace/commit/0a33c3a1d9db1452d4ba01a72cdb51e987342a6f))
* **input-zip-range:** accept value 0 [[#191](https://github.com/ecomplus/admin-marketplace/issues/191)] ([039f0fa](https://github.com/ecomplus/admin-marketplace/commit/039f0fa989038f311f754a09b1d6135910f31e52))

## [1.2.0](https://github.com/ecomplus/admin-marketplace/compare/v1.1.0...v1.2.0) (2021-07-20)


### Features

* **input-text:** check field name to handle input type password when appropriate [[#177](https://github.com/ecomplus/admin-marketplace/issues/177)] ([b400d76](https://github.com/ecomplus/admin-marketplace/commit/b400d76c965896bcba8d207537d4c6d65a8fdcb6))


### Bug Fixes

* **deps:** update all non-major dependencies ([#179](https://github.com/ecomplus/admin-marketplace/issues/179)) ([045ebde](https://github.com/ecomplus/admin-marketplace/commit/045ebdefe68fb8d8ab645f6627a37403b19291a8))

## [1.1.0](https://github.com/ecomplus/admin-marketplace/compare/v1.0.1...v1.1.0) (2021-06-14)


### Features

* **admin-settings-form:** add new `openCollapse` prop and  slot ([ef3b804](https://github.com/ecomplus/admin-marketplace/commit/ef3b804daa6b3b65bb506d277a4f605a20d089c1))
* **app-custom-shipping:** additional specific view for custom shipping app ([#173](https://github.com/ecomplus/admin-marketplace/issues/173)) ([d054a57](https://github.com/ecomplus/admin-marketplace/commit/d054a575f86c72642e8587acb7071681c1acad83))
* **application:** make settings form collapsable and customizable by props ([7134683](https://github.com/ecomplus/admin-marketplace/commit/7134683a052bb16ae85c061af760e0a176f7ac30))
* **application:** new `settings-prepend` slot for custom apps views ([8dc4669](https://github.com/ecomplus/admin-marketplace/commit/8dc46694c7b3b1e141ece3c390096f80bcf377a4))
* **application-view:** props for settings form, emit `load` event with application payload ([26944e0](https://github.com/ecomplus/admin-marketplace/commit/26944e05fb1048d6c3d7aac6c0a5d6b9013d8c52))
* **input-text:** render textarea for big string fields ([7319644](https://github.com/ecomplus/admin-marketplace/commit/7319644d2811dd883bd6ff4563f0ea13db085be4))


### Bug Fixes

* **app-custom-shipping:** unset posting deadline on mocked shipping methods ([41d8ee6](https://github.com/ecomplus/admin-marketplace/commit/41d8ee6d6cbe8c725ce979c03a47fe48d2da278b))
* **ec-admin-settings:** must sanitize data and hidden data objects separately ([1f35afc](https://github.com/ecomplus/admin-marketplace/commit/1f35afce19c56da772bd76fe768f9ea03e021896))
* **router:** prevent need to cancel routes for app specific views (and dry) ([db42f88](https://github.com/ecomplus/admin-marketplace/commit/db42f88c9e04420e5c570f113f965637f40ae944))
* **sanitize:** do not delete props on root data object ([60358cd](https://github.com/ecomplus/admin-marketplace/commit/60358cddda15fe771eb0046f5fd682e6bb87d39f))

### [1.0.1](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0...v1.0.1) (2021-06-01)


### Bug Fixes

* **deps:** update all non-major dependencies ([#171](https://github.com/ecomplus/admin-marketplace/issues/171)) ([9e3b5c5](https://github.com/ecomplus/admin-marketplace/commit/9e3b5c55a329afb286ade9da2f02bb1043dba5bc))
* **input-date-time:** prevent simultaneos input (set value) events ([#179](https://github.com/ecomplus/admin-marketplace/issues/179)) ([2f5bab7](https://github.com/ecomplus/admin-marketplace/commit/2f5bab716196d63f321ea86d8c49753e50045bef))

## [1.0.0](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-rc.7...v1.0.0) (2021-04-22)


### Bug Fixes

* **input-date-time:** fix storing date and time unit values and create new date ([#163](https://github.com/ecomplus/admin-marketplace/issues/163)) ([103f459](https://github.com/ecomplus/admin-marketplace/commit/103f45901584b78d32904509d29bb31ed334ac54))
* **input-money:** no decimal scale for integer schema types ([#162](https://github.com/ecomplus/admin-marketplace/issues/162)) ([1b05c3b](https://github.com/ecomplus/admin-marketplace/commit/1b05c3b88436278a4cbb1f520bbcf087f0cece9d))

## [1.0.0-rc.7](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-rc.6...v1.0.0-rc.7) (2021-04-01)


### Features

* **application:** update document title with app title ([7c9b88e](https://github.com/ecomplus/admin-marketplace/commit/7c9b88ef9d5b5bf4afe715126e5e2942e84cb1ef))


### Bug Fixes

* **deps:** update @ecomplus/apps-manager to v1.0.1 ([b1b7564](https://github.com/ecomplus/admin-marketplace/commit/b1b7564454e5306a57f529d0c1df5d80cafbc35e))
* **input-product:** also handle id directly insert, fix handling search with unique result (sku) ([24a8020](https://github.com/ecomplus/admin-marketplace/commit/24a80209a2ca08e2f8a4db820be1c8768ecf5fe6))
* **input-product:** fix handling search with unique result (sku) ([0fb7acd](https://github.com/ecomplus/admin-marketplace/commit/0fb7acdbfb3f90506b44feb0e36a8ccc909fffe0))

## [1.0.0-rc.6](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-rc.5...v1.0.0-rc.6) (2021-03-26)


### Features

* **input-product:** render `product_ids` with typeasearch to find product ([#158](https://github.com/ecomplus/admin-marketplace/issues/158)) ([eb68e74](https://github.com/ecomplus/admin-marketplace/commit/eb68e74f6b62eaacce002cfd05f9d66a2d8bcaf1))


### Bug Fixes

* **input-product:** general fixes with scheduled fetches and results handling ([2f0de8e](https://github.com/ecomplus/admin-marketplace/commit/2f0de8ea1b8ef57878f4e8b65795e8e88d6e0891))

## [1.0.0-rc.5](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-rc.4...v1.0.0-rc.5) (2021-03-17)


### Bug Fixes

* **deps:** update @ecomplus/apps-manager to v1.0.0-rc.4 ([#157](https://github.com/ecomplus/admin-marketplace/issues/157)) ([caa4438](https://github.com/ecomplus/admin-marketplace/commit/caa4438428757bb16543f84912b16c961536a915))
* **deps:** update all non-major dependencies ([#155](https://github.com/ecomplus/admin-marketplace/issues/155)) ([3e58680](https://github.com/ecomplus/admin-marketplace/commit/3e58680d365e7c487c8e216f7508c4c29278f919))

## [1.0.0-rc.4](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2021-02-25)


### Bug Fixes

* **deps:** update @ecomplus/apps-manager to v1.0.0-rc.3 ([90554a2](https://github.com/ecomplus/admin-marketplace/commit/90554a2914ca9b6a7b0e5bc956d99ea818736a5d))

## [1.0.0-rc.3](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2021-02-21)


### Bug Fixes

* **ec-application:** adjusted new version alert btn position ([#153](https://github.com/ecomplus/admin-marketplace/issues/153)) ([d2b8573](https://github.com/ecomplus/admin-marketplace/commit/d2b8573139fcea2cc08b30ac9c25f31a32952100))

## [1.0.0-rc.2](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2021-02-19)


### Bug Fixes

* **application:** fix handling on install event payload ([#152](https://github.com/ecomplus/admin-marketplace/issues/152)) ([f8fcedb](https://github.com/ecomplus/admin-marketplace/commit/f8fcedbef2635435e358d86948ce0b7604be609d))
* **auto-update-apps:** ignore inactive apps ([#150](https://github.com/ecomplus/admin-marketplace/issues/150)) ([49330ad](https://github.com/ecomplus/admin-marketplace/commit/49330ad329e71b48f1399965c36d8db086e5b864))
* **ec-application:** force col-9 to fix responsive layout ([10cafdc](https://github.com/ecomplus/admin-marketplace/commit/10cafdcb6aa3eb3bd50eb98adbe3c05fe4f68766))

## [1.0.0-rc.1](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-rc.0...v1.0.0-rc.1) (2021-02-12)


### Bug Fixes

* **auto-update-apps:** select only specific fields to update with patch request ([7640181](https://github.com/ecomplus/admin-marketplace/commit/764018167db255181439cfa995d82a4f1d232976))
* **deps:** update @ecomplus/apps-manager to v1.0.0-rc.2 ([61d5abe](https://github.com/ecomplus/admin-marketplace/commit/61d5abef911fcf775b6f792ccc6f7b7db7c0e69a))

## [1.0.0-rc.0](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-beta.2...v1.0.0-rc.0) (2021-02-12)


### Features

* **auto-update-apps:** update all non-major apps patching new admin settings ([#148](https://github.com/ecomplus/admin-marketplace/issues/148)) ([382f394](https://github.com/ecomplus/admin-marketplace/commit/382f394d52df250c81c3d35dc64078db2b009280)), closes [#138](https://github.com/ecomplus/admin-marketplace/issues/138) [#138](https://github.com/ecomplus/admin-marketplace/issues/138) [#138](https://github.com/ecomplus/admin-marketplace/issues/138) [#138](https://github.com/ecomplus/admin-marketplace/issues/138)


### Bug Fixes

* **deps:** update all non-major dependencies ([ecda7b1](https://github.com/ecomplus/admin-marketplace/commit/ecda7b11aa86e512827dfd1408e2910b73717c9e))
* **deps:** update to @ecomplus/apps-manager and @ecomplus/auth v1 ([#147](https://github.com/ecomplus/admin-marketplace/issues/147)) ([b45aaae](https://github.com/ecomplus/admin-marketplace/commit/b45aaae04b05420bf13f63ba7bb20d08c2980d5f))

## [1.0.0-beta.2](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2021-01-23)


### Bug Fixes

* **app-ml:** fix problem to load config in Mercado Livre app ([#146](https://github.com/ecomplus/admin-marketplace/issues/146)) ([028720b](https://github.com/ecomplus/admin-marketplace/commit/028720be21c8bd537b70c53aca8dae603116509c))
* **router:** manually dispatch hashchange for @ecomplus/admin listeners ([9daa537](https://github.com/ecomplus/admin-marketplace/commit/9daa537b20448d765b6e53db68bc142ceae11fbb)), closes [/github.com/vuejs/vue-router/issues/1807#issuecomment-360184146](https://github.com/ecomplus//github.com/vuejs/vue-router/issues/1807/issues/issuecomment-360184146)

## [1.0.0-beta.1](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2021-01-12)


### Features

* **admin-settings-form:** support closing all collapses ([#144](https://github.com/ecomplus/admin-marketplace/issues/144)) ([4e94fae](https://github.com/ecomplus/admin-marketplace/commit/4e94faecac9590482cd0ac4ece2527e83d3f687f))


### Bug Fixes

* **input-discount:** supporting decimal numbers on percentage discount value ([#145](https://github.com/ecomplus/admin-marketplace/issues/145)) ([8118ec2](https://github.com/ecomplus/admin-marketplace/commit/8118ec2a97d1ef9d4b5e25bf6de5aba552d9dd15))

## [1.0.0-beta.0](https://github.com/ecomplus/admin-marketplace/compare/v1.0.0-alpha.1...v1.0.0-beta.0) (2021-01-04)


### Bug Fixes

* **app-ml:** solved to clearinterval on close oauth window ([#143](https://github.com/ecomplus/admin-marketplace/issues/143)) ([1465ae4](https://github.com/ecomplus/admin-marketplace/commit/1465ae45d365d76b00c32a7a2868d768cc8cd58f))
* **deps:** update all non-major dependencies ([#139](https://github.com/ecomplus/admin-marketplace/issues/139)) ([5bd604f](https://github.com/ecomplus/admin-marketplace/commit/5bd604fdb25fa91df3ae09dc65b90ab0f54d199b))
* **input-boolean:** use `name` (unique) for input id ([dd3a828](https://github.com/ecomplus/admin-marketplace/commit/dd3a828710d8ec29238284deda5d51fa38b57b82))

## [1.0.0-alpha.1](https://github.com/ecomplus/admin-marketplace/compare/v0.2.25-rc.0...v1.0.0-alpha.1) (2020-12-09)

### [0.2.25-rc.0](https://github.com/ecomplus/admin-marketplace/compare/v0.2.24-rc.0...v0.2.25-rc.0) (2020-12-09)


### Features

* **app-mercado-livre:** custom view for Mercado Livre app ([#134](https://github.com/ecomplus/admin-marketplace/issues/134)) ([cde7388](https://github.com/ecomplus/admin-marketplace/commit/cde7388d1f1294a9fbe3a6aac3d1174077b082db))


### Bug Fixes

* **admin-settings:** fix some loops keys ([e65b40a](https://github.com/ecomplus/admin-marketplace/commit/e65b40aca6ccaa52bf4d1dcf5503204c49954767))
* **apps-market:** properlly reseting and rendering load error ([2cf9be7](https://github.com/ecomplus/admin-marketplace/commit/2cf9be79b815f4c508c65337e391835ad7bb2d26))
* **deps:** update all non-major dependencies ([d787602](https://github.com/ecomplus/admin-marketplace/commit/d78760221dd465ddb7dcf2bc7ad7cb61f358cf8e))
* **deps:** update all non-major dependencies ([#131](https://github.com/ecomplus/admin-marketplace/issues/131)) ([b1de1a2](https://github.com/ecomplus/admin-marketplace/commit/b1de1a29f564c751daafb4fe057fd0a52c6bdfc8))
* **deps:** update/merge non-major dependencies ([3a24913](https://github.com/ecomplus/admin-marketplace/commit/3a249136c525cc906a074bb9fca2dd526feab3b9))
* **input-zip-code:** format number to string on create only (not on input) ([341e044](https://github.com/ecomplus/admin-marketplace/commit/341e044345c4b92fa79d0b309f85f0eb1a603f9f))
* **input-zip-code:** properly accepting and parsing number value ([ce83e55](https://github.com/ecomplus/admin-marketplace/commit/ce83e5591d6811976723fb44438b9c8435c654a4))
* **input-zip-range:** delete min/max if zero ([105f0fd](https://github.com/ecomplus/admin-marketplace/commit/105f0fd911a548f2ba9ecdb6b736955859b99ffc))

### [0.2.24](https://github.com/ecomplus/admin-marketplace/compare/v0.2.24-rc.0...v0.2.24) (2020-12-09)


### Features

* **app-mercado-livre:** custom view for Mercado Livre app ([#134](https://github.com/ecomplus/admin-marketplace/issues/134)) ([cde7388](https://github.com/ecomplus/admin-marketplace/commit/cde7388d1f1294a9fbe3a6aac3d1174077b082db))


### Bug Fixes

* **admin-settings:** fix some loops keys ([e65b40a](https://github.com/ecomplus/admin-marketplace/commit/e65b40aca6ccaa52bf4d1dcf5503204c49954767))
* **apps-market:** properlly reseting and rendering load error ([2cf9be7](https://github.com/ecomplus/admin-marketplace/commit/2cf9be79b815f4c508c65337e391835ad7bb2d26))
* **deps:** update all non-major dependencies ([d787602](https://github.com/ecomplus/admin-marketplace/commit/d78760221dd465ddb7dcf2bc7ad7cb61f358cf8e))
* **deps:** update all non-major dependencies ([#131](https://github.com/ecomplus/admin-marketplace/issues/131)) ([b1de1a2](https://github.com/ecomplus/admin-marketplace/commit/b1de1a29f564c751daafb4fe057fd0a52c6bdfc8))
* **deps:** update/merge non-major dependencies ([3a24913](https://github.com/ecomplus/admin-marketplace/commit/3a249136c525cc906a074bb9fca2dd526feab3b9))
* **input-zip-code:** format number to string on create only (not on input) ([341e044](https://github.com/ecomplus/admin-marketplace/commit/341e044345c4b92fa79d0b309f85f0eb1a603f9f))
* **input-zip-code:** properly accepting and parsing number value ([ce83e55](https://github.com/ecomplus/admin-marketplace/commit/ce83e5591d6811976723fb44438b9c8435c654a4))
* **input-zip-range:** delete min/max if zero ([105f0fd](https://github.com/ecomplus/admin-marketplace/commit/105f0fd911a548f2ba9ecdb6b736955859b99ffc))

### [0.2.24-rc.0](https://github.com/ecomplus/admin-marketplace/compare/v0.2.23...v0.2.24-rc.0) (2020-10-10)


### Features

* **input-zip-range:** new zip range object input for shipping rules ([#100](https://github.com/ecomplus/admin-marketplace/issues/100)) ([5d7e257](https://github.com/ecomplus/admin-marketplace/commit/5d7e2579d0c934c5bc68f9dd4697f65a985804ca))


### Bug Fixes

* **app-card:** back with component main class, minor style fixes ([ca38f3d](https://github.com/ecomplus/admin-marketplace/commit/ca38f3da699cd8aa61f5312c9644017ec1fcec31))
* **deps:** add 'babel-runtime' required for vue-markdown ([a67867f](https://github.com/ecomplus/admin-marketplace/commit/a67867f352799f681661fd62cdb649570a0dbc34))
* **deps:** update all non-major dependencies ([#105](https://github.com/ecomplus/admin-marketplace/issues/105)) ([f498a48](https://github.com/ecomplus/admin-marketplace/commit/f498a48650e97c66283bc1da767e8dcb6000f8b1))
* **inputs:** minor fixes for number/discount inputs ([9c6207f](https://github.com/ecomplus/admin-marketplace/commit/9c6207fc8979e3193e8f12099deacd73e59efeb8))
* **installed-app-card:** minor code and appearence fixes for EcInstalledAppCard ([88a429b](https://github.com/ecomplus/admin-marketplace/commit/88a429b4e37dd2f54944de11442807a4318071b3))

### [0.2.23](https://github.com/ecomplus/admin-marketplace/compare/v0.2.22...v0.2.23) (2020-06-12)


### Bug Fixes

* **admin-settings-form:** use reset key when data list is reseted ([b7fec47](https://github.com/ecomplus/admin-marketplace/commit/b7fec47c1d6552ea9f842a4ff8182705a6578c9a))

### [0.2.22](https://github.com/ecomplus/admin-marketplace/compare/v0.2.21...v0.2.22) (2020-05-24)

### [0.2.21](https://github.com/ecomplus/admin-marketplace/compare/v0.2.20...v0.2.21) (2020-05-20)

### [0.2.20](https://github.com/ecomplus/admin-marketplace/compare/v0.2.19...v0.2.20) (2020-05-15)


### Bug Fixes

* **input-money:** fix formatting number value from prop ([9571240](https://github.com/ecomplus/admin-marketplace/commit/95712401c6aafb66c4177b42e225cd6f0bbea2ca))

### [0.2.19](https://github.com/ecomplus/admin-marketplace/compare/v0.2.18...v0.2.19) (2020-05-15)


### Bug Fixes

* **app-card:** show downloads count only if gt zero ([91899d6](https://github.com/ecomplus/admin-marketplace/commit/91899d68c0071a72a8d79bd3631436cf21d34ded))
* **money-input-matcher:** check exact field name or schema 'maximum' ([bb6d2f4](https://github.com/ecomplus/admin-marketplace/commit/bb6d2f43d02988a3b29d06de9c89c1e8695118fe))

### [0.2.18](https://github.com/ecomplus/admin-marketplace/compare/v0.2.17...v0.2.18) (2020-05-09)


### Bug Fixes

* **inputs:** prevent overwriting data values with defaults ([6b54f3f](https://github.com/ecomplus/admin-marketplace/commit/6b54f3ff57dc54ded0ecf382cbd66061bc9c2af1))

### [0.2.17](https://github.com/ecomplus/admin-marketplace/compare/v0.2.16...v0.2.17) (2020-05-09)


### Bug Fixes

* **number-inputs:** prevent emitting 0 when empty ([e54d6c0](https://github.com/ecomplus/admin-marketplace/commit/e54d6c01a062dd7677fed589ac8d1ad07303aa5a))
* **sanitize:** delete empty string and null props ([0ca7a9b](https://github.com/ecomplus/admin-marketplace/commit/0ca7a9bee0a4b1bb2b9835406a09fa8b79826239))

### [0.2.16](https://github.com/ecomplus/admin-marketplace/compare/v0.2.15...v0.2.16) (2020-05-08)


### Features

* **input-componens:** emit default value on mounted ([8d91b15](https://github.com/ecomplus/admin-marketplace/commit/8d91b159a08ffe5b331874db032d2d9754fee7b0))


### Bug Fixes

* **admin-marketplace:** revert hard setting default values ([8b849e1](https://github.com/ecomplus/admin-marketplace/commit/8b849e1f95ab40d1c58d615d0def502f321b9363))

### [0.2.15](https://github.com/ecomplus/admin-marketplace/compare/v0.2.14...v0.2.15) (2020-05-08)


### Bug Fixes

* **admin-settings-form:** fix setting default values on data ([3efc28a](https://github.com/ecomplus/admin-marketplace/commit/3efc28a4f139defe493a375f861a65d80abafc40))

### [0.2.14](https://github.com/ecomplus/admin-marketplace/compare/v0.2.13...v0.2.14) (2020-05-07)


### Features

* **trustvox:** handling specific view for trustvox app ([#97](https://github.com/ecomplus/admin-marketplace/issues/97)) ([9902c9f](https://github.com/ecomplus/admin-marketplace/commit/9902c9f177cc0e3651137dfd5ac1f9f3fb31075f))


### Bug Fixes

* **admin-settings-form:** preset data field value with default ([ab2f389](https://github.com/ecomplus/admin-marketplace/commit/ab2f389d8ad9fc26e88221aff903b64df275350e))

### [0.2.13](https://github.com/ecomplus/admin-marketplace/compare/v0.2.12...v0.2.13) (2020-05-05)


### Features

* **bling:** handling specific view for bling app ([#96](https://github.com/ecomplus/admin-marketplace/issues/96)) ([f45088b](https://github.com/ecomplus/admin-marketplace/commit/f45088b39abbb2a330807be704a5f66018796ee3))


### Bug Fixes

* **router:** using only normal imports yet ([62391a4](https://github.com/ecomplus/admin-marketplace/commit/62391a406c1eb5e9278358dea84c7b5aa8b447cc)), closes [/github.com/ecomplus/admin-marketplace/pull/96#issuecomment-624361785](https://github.com/ecomplus//github.com/ecomplus/admin-marketplace/pull/96/issues/issuecomment-624361785)

### [0.2.12](https://github.com/ecomplus/admin-marketplace/compare/v0.2.11...v0.2.12) (2020-05-04)


### Features

* **csv-table:** support csv upload for array of objects ([88f2fa4](https://github.com/ecomplus/admin-marketplace/commit/88f2fa48f1238583de4ea4c6648f3c4924b92d6b))

### [0.2.11](https://github.com/ecomplus/admin-marketplace/compare/v0.2.10...v0.2.11) (2020-04-24)


### Features

* **input-list:** handling generic array schema [#89](https://github.com/ecomplus/admin-marketplace/issues/89) ([2dd8183](https://github.com/ecomplus/admin-marketplace/commit/2dd8183963735faf6d7d890fbbff569014210042))


### Bug Fixes

* **input-boolean:** fix localValue, set schema required ([e29be89](https://github.com/ecomplus/admin-marketplace/commit/e29be89b91a2a50cc8e368685f428ffe29ef812b))
* **input-boolean:** warning color to disable bool, set :defaultChecked ([6ef2bb8](https://github.com/ecomplus/admin-marketplace/commit/6ef2bb8ffc209d7a048a57132098eca061e791e2))
* **inputs:** general style and attr fixes for common inputs ([7ea032e](https://github.com/ecomplus/admin-marketplace/commit/7ea032e9c9acb2d993968032965609a92c713869))

### [0.2.10](https://github.com/ecomclub/admin-marketplace/compare/v0.2.9...v0.2.10) (2020-02-06)


### Features

* **input-date-time:** add inputs for date/time handling with format ([8f16559](https://github.com/ecomclub/admin-marketplace/commit/8f16559d3f35ea87a6e1eda3827d0d5ec2a13a8b))
* **schema-parse:** treat date-time string format (InputDateTime) ([03fc275](https://github.com/ecomclub/admin-marketplace/commit/03fc275770a2ecb056fa920b356dc6ae47d80aeb))


### Bug Fixes

* **input-zip-code:** add schema to component props ([fe7c771](https://github.com/ecomclub/admin-marketplace/commit/fe7c771a798afc7709887cbcbc7f9245685cc833))

### [0.2.9](https://github.com/ecomclub/admin-marketplace/compare/v0.2.8...v0.2.9) (2020-01-10)


### Bug Fixes

* fixed bug when does not have hide property ([fb19643](https://github.com/ecomclub/admin-marketplace/commit/fb196436de68019e821d7db58a91e09213b31bb7))
* hide configuration tab if not installed application ([#69](https://github.com/ecomclub/admin-marketplace/issues/69)) ([1de228e](https://github.com/ecomclub/admin-marketplace/commit/1de228e4ca9077aff84b83400ab57ee8a0c124b5))

### [0.2.8](https://github.com/ecomclub/admin-marketplace/compare/v0.2.7...v0.2.8) (2020-01-02)


### Bug Fixes

* **admin-settings-form:** fix reactivity in deep object ([#61](https://github.com/ecomclub/admin-marketplace/issues/61)) ([22022ca](https://github.com/ecomclub/admin-marketplace/commit/22022ca3a21b3ca85cc940aeb7150fbd66831d92)), closes [#57](https://github.com/ecomclub/admin-marketplace/issues/57)

### [0.2.7](https://github.com/ecomclub/admin-marketplace/compare/v0.2.6...v0.2.7) (2019-12-24)


### Bug Fixes

* **input-number:** acepting string value and parse to number ([38493ab](https://github.com/ecomclub/admin-marketplace/commit/38493abf544f747d7190866bb955ada613618145))
* **sanitize:** fix checking object (escape null) ([4cd1dfc](https://github.com/ecomclub/admin-marketplace/commit/4cd1dfc49373a58c22ce33844773a591bf63f934))

### [0.2.6](https://github.com/ecomclub/admin-marketplace/compare/v0.2.5...v0.2.6) (2019-12-23)


### Features

* implemented sanitize formData ([59e8889](https://github.com/ecomclub/admin-marketplace/commit/59e8889739d3e386d54d3ad7717dd5e0a0f88385))

### [0.2.5](https://github.com/ecomclub/admin-marketplace/compare/v0.2.4...v0.2.5) (2019-12-19)


### Features

* **admin-settings-form:** allowing data list remove element ([a19a765](https://github.com/ecomclub/admin-marketplace/commit/a19a765478f76fbb24bde52d296eac28f4d4ed7b))


### Bug Fixes

* **admin-settings-form:** show base (general) field group if not empty ([e4db1f0](https://github.com/ecomclub/admin-marketplace/commit/e4db1f01f15ab40d20046fa6507f197f34d0050b))
* **application:** remove not yet ready i19 word ([5b72a41](https://github.com/ecomclub/admin-marketplace/commit/5b72a413b3d3fe65d49ce54a8b209500bb325b65))

### [0.2.4](https://github.com/ecomclub/admin-marketplace/compare/v0.2.3...v0.2.4) (2019-12-18)


### Bug Fixes

* **i18n:** update some i19 words ([#48](https://github.com/ecomclub/admin-marketplace/issues/48)) ([5d61011](https://github.com/ecomclub/admin-marketplace/commit/5d61011b6c81b80be19b0e8730a1145322923b63))
* **zip-code:** removed pattner verification ([fc38340](https://github.com/ecomclub/admin-marketplace/commit/fc38340e4fe863752030e1c92612514a20a9114a))

### [0.2.3](https://github.com/ecomclub/admin-marketplace/compare/v0.2.2...v0.2.3) (2019-12-17)


### Bug Fixes

* **polyfill:** manually add promise.all-settled not recognized by babel ([6f40347](https://github.com/ecomclub/admin-marketplace/commit/6f403471f86505e2ec4d11d9db83d179bbdac578))

### [0.2.2](https://github.com/ecomclub/admin-marketplace/compare/v0.2.1...v0.2.2) (2019-12-17)


### Bug Fixes

* **application:** avatar changes ([#46](https://github.com/ecomclub/admin-marketplace/issues/46)) ([8db2c63](https://github.com/ecomclub/admin-marketplace/commit/8db2c630076c4ca526b70a7d5d490d6835f44658))
* **application:** changes into avatar and author's info ([#45](https://github.com/ecomclub/admin-marketplace/issues/45)) ([6a9cf78](https://github.com/ecomclub/admin-marketplace/commit/6a9cf78f6c708e6dca389d806c10b54353d87db2))
* **application:** fetch app data correctly, is loaded on allSettled ([3354cbe](https://github.com/ecomclub/admin-marketplace/commit/3354cbe506748c2b809c52d9c407d1269f0d11a5))

### [0.2.1](https://github.com/ecomclub/admin-marketplace/compare/v0.2.0...v0.2.1) (2019-12-17)

## [0.2.0](https://github.com/ecomclub/admin-marketplace/compare/v0.1.1-0...v0.2.0) (2019-12-17)

### 0.1.1-0 (2019-12-17)


### Features

* **admin-settings:** handling array of nested objects on form ([671e1d5](https://github.com/ecomclub/admin-marketplace/commit/671e1d5aabe5bfbb9023bcd1fb8bae716a2ad566))
* **admin-settings:** improve form layout, show help text with links ([7df8cb5](https://github.com/ecomclub/admin-marketplace/commit/7df8cb5897e52c020468bc00b3057e50a47cfce7))
* **admin-settings:** improve form organization with accordion ([3092b02](https://github.com/ecomclub/admin-marketplace/commit/3092b0210a3fd21f94e7d8eb8ef713bd4a697a96))
* **application:** saving app data/hidden from config form ([#32](https://github.com/ecomclub/admin-marketplace/issues/32)) ([d1c73bb](https://github.com/ecomclub/admin-marketplace/commit/d1c73bb81bdeee2b85a6d1f1579d740d02c4474f))
* **discover:** add discober discount object ([f2855af](https://github.com/ecomclub/admin-marketplace/commit/f2855aff73b451da6af8b8f36e969f3911be7fd0))
* **discover:** add object field to discover ([c7410b1](https://github.com/ecomclub/admin-marketplace/commit/c7410b1343b46e4ededa099f7fdee0d6f2820e8c))
* **discover:** created discover function to discover field component ([c86e59c](https://github.com/ecomclub/admin-marketplace/commit/c86e59c851c802112b5188e2eb2197aaed6d5a40))
* **discover:** include discover money input ([608f2bb](https://github.com/ecomclub/admin-marketplace/commit/608f2bb740f35fe7d6cde5529c3c8e83484a8feb))
* **dynamic-field:** initial implementation by dynamic-field ([b14189b](https://github.com/ecomclub/admin-marketplace/commit/b14189bd51f8bdc67281eadc350e41cc29569c37))
* **dynamic-form:** also emit submit with form data only ([132474b](https://github.com/ecomclub/admin-marketplace/commit/132474bf67e452c84cfb6eb98804d69527bb6316))
* **ec-apps-market:** new EcAppsMarket reusable component with list/tabs ([dd839f9](https://github.com/ecomclub/admin-marketplace/commit/dd839f99fdce824c1d129110d17d01ffdeff38e6))
* **ec-installed-app-card:** comp with styles/funcs for installed app ([0078abd](https://github.com/ecomclub/admin-marketplace/commit/0078abd604a7e7c2fa1d21e01c7091e4b8f8057f))
* **input-boolean:** implemented input-boolean ([a0f717f](https://github.com/ecomclub/admin-marketplace/commit/a0f717f55e8b2087069975bb038cabb5b14e54e0))
* filter by app_id before install ([5777dbf](https://github.com/ecomclub/admin-marketplace/commit/5777dbf08bd844f29696c302593e76db3c596965))
* filter by app_id before install ([9938f11](https://github.com/ecomclub/admin-marketplace/commit/9938f1192710067594918d735d30def4718f992a))
* implemented input object ([6d8fb2d](https://github.com/ecomclub/admin-marketplace/commit/6d8fb2d3b08f55555a395179213bfb412d9b4127))
* **application:** check if the app has already been installed ([13cb25a](https://github.com/ecomclub/admin-marketplace/commit/13cb25a405ab238962992e9bee885178b1740420))
* **application:** create layout of component ([0b30178](https://github.com/ecomclub/admin-marketplace/commit/0b30178fcb321ef50cf69b0f6c6e2db99587bfd5))
* **application:** delete app and tongle settings visible ([e59f372](https://github.com/ecomclub/admin-marketplace/commit/e59f372ef9d7d8e43d772529c2e8960913a25498))
* **application:** delete application ([8221184](https://github.com/ecomclub/admin-marketplace/commit/8221184af73f7eab810be7f63bd8bc3723f05280))
* **applications:** implemented consume in market api ([b6ae2da](https://github.com/ecomclub/admin-marketplace/commit/b6ae2da666a5d0851aa77b465d1db287b037d5ac))
* **applications:** implemented filter applications ([b91becc](https://github.com/ecomclub/admin-marketplace/commit/b91beccf2b46c45bb08840799af56520daf8e930))
* **ec-application-card:** created ec-application-card component ([665978b](https://github.com/ecomclub/admin-marketplace/commit/665978b0ebfa9ef02337d99592a3c2052d13a364))
* **ec-installed-application-card:** created new component ([18a8857](https://github.com/ecomclub/admin-marketplace/commit/18a8857799c243c883edc2b3992b9df2a82f989e))
* **ecapplication:** generic component for rendering app settings ([e3ab08f](https://github.com/ecomclub/admin-marketplace/commit/e3ab08fa6237fd94db9e173fa2acdfc18baf6387))
* **input-discount:** add new features to input-discount ([750ef83](https://github.com/ecomclub/admin-marketplace/commit/750ef836d9c09bc9e988770a7452dd70e64ee42f))
* **input-enum:** created input-enum ([31e6c76](https://github.com/ecomclub/admin-marketplace/commit/31e6c760ce22f75973ef6c56b51b9124e565dcce))
* **input-money:** created input-money ([8760fb3](https://github.com/ecomclub/admin-marketplace/commit/8760fb368a5cd83d1f0a1bab7bf0129e767e01a0))
* **input-number:** created input-number compoenent ([7ec85fe](https://github.com/ecomclub/admin-marketplace/commit/7ec85feb97bd1fdf19432e561a7b4b5a64e9370c))
* **input-password:** created input-password ([5e336f3](https://github.com/ecomclub/admin-marketplace/commit/5e336f303ede08cc419b558cb3f499c6a69c292c))
* **input-phone:** created input phone ([9ff8278](https://github.com/ecomclub/admin-marketplace/commit/9ff8278983cdbe107f32415759f509d3449a5c1f))
* **input-zip-code:** created input zip code ([089ea76](https://github.com/ecomclub/admin-marketplace/commit/089ea76490aed61d4d40c36ecec933b0e4defb9b))
* **inputtext:** created custom input-text component ([f31c695](https://github.com/ecomclub/admin-marketplace/commit/f31c69503a223718185754a5f4f4bd281d4bd160))
* **pkg:** install vue-markdown ([a061b81](https://github.com/ecomclub/admin-marketplace/commit/a061b81ca1b7d3f4649e0096e82d5d25043833cf))
* **transitions:** minor update, add transition to router views ([cdf2dc2](https://github.com/ecomclub/admin-marketplace/commit/cdf2dc2b3a06ff727b791c98adc4a487eaed9b4d))
* **upload:** created Upload component ([ee3cd4e](https://github.com/ecomclub/admin-marketplace/commit/ee3cd4e50e622f6b9e16fa9890c0f3cf3a6a480b))
* adjusted route to accept Application component and fix style code ([42fa974](https://github.com/ecomclub/admin-marketplace/commit/42fa9742edd4d48795639c79633e088b5d8c3d25))


### Bug Fixes

* **admin-settings:** grouping compex fields in collapses ([34f8e0f](https://github.com/ecomclub/admin-marketplace/commit/34f8e0fec2e3512161fa79d39467590a02fea168))
* **admin-settings:** update parse admin settings method ([dd6b880](https://github.com/ecomclub/admin-marketplace/commit/dd6b8802f6d16b7f686c1e9ec6884e02e096dddd))
* **app-card:** update app card component to new porposed view/styles ([6d48e44](https://github.com/ecomclub/admin-marketplace/commit/6d48e44601edcad7c2e665735588322ad89e26f1))
* **application:** importing and declaring form correctly ([dc88af2](https://github.com/ecomclub/admin-marketplace/commit/dc88af245917c2f7d639a574080b8cf66eb604d0))
* **application:** minor fix for i18n imported word ([78203e9](https://github.com/ecomclub/admin-marketplace/commit/78203e932b171a9a0fb64921d714bc412132b806))
* **application:** minor fixes for application component ([8e5b661](https://github.com/ecomclub/admin-marketplace/commit/8e5b661181e98aae51b87902e175a451016fb3eb))
* **application:** set applicationBody with assign to for deep reactivity ([1622d1b](https://github.com/ecomclub/admin-marketplace/commit/1622d1b4bf4b14518c7ec9e6c399048ff77e0f05))
* **dynamic-field:** add keys to component v-for ([69e9e5a](https://github.com/ecomclub/admin-marketplace/commit/69e9e5a889a56eeeab332285a5179f345f0f6b48))
* **dynamic-field:** using v-model, fix component api ([6b78718](https://github.com/ecomclub/admin-marketplace/commit/6b7871830ad6c13b774f93f996e18cb28ad6ca84))
* **dynamic-form:** ensure vue deep, fix handling data, hiddenData ([a2f33fc](https://github.com/ecomclub/admin-marketplace/commit/a2f33fca11567f76b71735939acb671b1e3a7a61))
* **ec-application:** confirm before install application again ([60dad64](https://github.com/ecomclub/admin-marketplace/commit/60dad649ff4487b3520ee9e7815fa6750772fca8))
* **ec-application:** filter related apps ([9aacbbb](https://github.com/ecomclub/admin-marketplace/commit/9aacbbb933ace85d9d1ebd175a0ce798bdec53d3))
* **get-schema-input:** ensure field is a string (can receive number ([40d72d7](https://github.com/ecomclub/admin-marketplace/commit/40d72d789939ce3d797ce111d226559dc7884765))
* **imports:** never import framework CSS inside JS here ([57bc6ce](https://github.com/ecomclub/admin-marketplace/commit/57bc6ce1835ad243c5a84fd75edc167fc670f7d3))
* **imports:** removing dynamic field imports ([b7fb6a7](https://github.com/ecomclub/admin-marketplace/commit/b7fb6a79a0aba09be993660d0ccebbb3fd27e947))
* **input-boolean:** fix style code ([5957145](https://github.com/ecomclub/admin-marketplace/commit/59571452c7ca763057488c5f4b2dfa435c39b5e8))
* **input-discount:** add keys to select options ([c82f6aa](https://github.com/ecomclub/admin-marketplace/commit/c82f6aafff2417faeb5606240e6fa108141e9017))
* **input-number:** fix component props and <a-input> options ([473e4fe](https://github.com/ecomclub/admin-marketplace/commit/473e4febe3f5ae92cfb07f48bee7652fd1c48009))
* **inputs:** remove form item from single input components ([042bc40](https://github.com/ecomclub/admin-marketplace/commit/042bc40422ff130440c4b513dbe9559ea73e3fa1))
* **router:** fix routes, remove mock view ([f2062e3](https://github.com/ecomclub/admin-marketplace/commit/f2062e3d9a5ebfc7a1ee50d4783f64d102a315da))
* **router:** update spa routes ([dec639a](https://github.com/ecomclub/admin-marketplace/commit/dec639a45c322c05a72029a0c4d1843716cf4e43))
* adjusted -vmodel ([5d3baf6](https://github.com/ecomclub/admin-marketplace/commit/5d3baf6914a5c52129a580362f193231dabf118a))
* conflicts ([5c03f2c](https://github.com/ecomclub/admin-marketplace/commit/5c03f2c0dcd9647778ff2cd4e22990ce970990e8))
* conflicts ([ec2cb70](https://github.com/ecomclub/admin-marketplace/commit/ec2cb70c523f51c919dcd841a3fc6157281b91a2))
* erros and put another things ([2c073ef](https://github.com/ecomclub/admin-marketplace/commit/2c073ef9490fe6745f06d73fb8807dff8ebfadb3))
* fix component name ([b0aa555](https://github.com/ecomclub/admin-marketplace/commit/b0aa555beaeea84ed1f3b5bc00de9d15027bed7e))
* fix errors and put some messages and routes ([d6a3f7b](https://github.com/ecomclub/admin-marketplace/commit/d6a3f7bdc86f1a5b02e95dc078c6580301119285))
* fixerrors ([38c0869](https://github.com/ecomclub/admin-marketplace/commit/38c0869fc35c60d2568eac99ef72d83e86fc7541))
* orders of computed words ([4004b3e](https://github.com/ecomclub/admin-marketplace/commit/4004b3ea6a44e36f15c844bb2839a419833dc973))
* **input-text:** fix input-text props ([6966ec5](https://github.com/ecomclub/admin-marketplace/commit/6966ec5d0dc5aaf90ac2818e19a222537e5f124e))
