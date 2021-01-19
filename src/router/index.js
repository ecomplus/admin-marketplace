import Vue from 'vue'
import VueRouter from 'vue-router'
import Marketplace from '../views/Marketplace.vue'
import Application from '../views/Application.vue'

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
    path: '/apps/edit/126944/:objectId?',
    name: 'app-mailchimp',
    component: () => import('../views/apps/AppMailchimp.vue')
  },
  {
    path: '/apps/edit/120079/:objectId?',
    name: 'app-mercado-livre',
    component: () => import('../views/apps/AppMercadoLivre/AppMercadoLivre.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'application') {
    switch (to.params.appId) {
      case 126944:
        router.push({ ...to, name: 'app-mailchimp' })
        break
      case 120079:
        router.push({ ...to, name: 'app-mercado-livre' })
        break
    }
  }
  next()
})

router.afterEach(() => {
  window.dispatchEvent(new window.HashChangeEvent('hashchange'))
})

export default router
