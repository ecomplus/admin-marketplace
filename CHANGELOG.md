# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
