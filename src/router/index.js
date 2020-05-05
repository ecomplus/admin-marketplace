import Vue from 'vue'
import VueRouter from 'vue-router'
import Marketplace from '../views/Marketplace.vue'
import Application from '../views/Application.vue'
import AppBling from '../views/apps/AppBling.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/apps',
    name: 'marketplace',
    component: Marketplace
  },
  {
    path: '/apps/edit/:appId/:objectId?',
    name: 'application',
    component: Application
  },
  {
    path: '/apps/edit/1247/:objectId?',
    name: 'app-bling',
    component: AppBling
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'application') {
    switch (to.params.appId) {
      case 1247:
        router.push({ ...to, name: 'app-bling' })
        break
    }
  }
  next()
})

export default router
