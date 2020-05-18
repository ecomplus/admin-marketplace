import Vue from 'vue'
import VueRouter from 'vue-router'
import Marketplace from '../views/Marketplace.vue'
import Application from '../views/Application.vue'
import AppBling from '../views/apps/AppBling.vue'
import AppTrustvox from '../views/apps/AppTrustvox.vue'
import AppMailchimp from '../views/apps/AppMailchimp.vue'

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
  },
  {
    path: '/apps/edit/1255/:objectId?',
    name: 'app-trustvox',
    component: AppTrustvox
  },
  {
    path: '/apps/edit/126944/:objectId?',
    name: 'app-mailchimp',
    component: AppMailchimp
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
      case 1255:
        router.push({ ...to, name: 'app-trustvox' })
        break
      case 126944:
        router.push({ ...to, name: 'app-mailchimp' })
        break
    }
  }
  next()
})

export default router
