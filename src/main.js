import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ToastPlugin, VBTogglePlugin, ModalPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './lib/WindowMessage'

Vue.use(ToastPlugin)
Vue.use(VBTogglePlugin)
Vue.use(ModalPlugin)

Vue.config.productionTip = false

if (window.location.host.includes('confere.shop')) document.domain = 'confere.shop'

new Vue({
  router,
  render: h => h(App)
}).$mount('#admin-marketplace')
