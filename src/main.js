import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ToastPlugin, VBTogglePlugin, ModalPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(ToastPlugin)
Vue.use(VBTogglePlugin)
Vue.use(ModalPlugin)

Vue.config.productionTip = false

const autoUpdateWorker = new Worker('./worker.js', { type: 'module' })

autoUpdateWorker.onmessage = event => {
  console.log('main.js receivid message: ', event)
}

autoUpdateWorker.postMessage('main.js i need you!')

new Vue({
  router,
  render: h => h(App)
}).$mount('#admin-marketplace')
