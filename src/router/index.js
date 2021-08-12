import Vue from 'vue'
import VueRouter from 'vue-router'
import Marketplace from '../views/Marketplace.vue'
import Application from '../views/Application.vue'

Vue.use(VueRouter)

const path = (typeof window === 'object' && window.ADMIN_MARKETPLACE_PATH) || '/apps'

const genAppPath = (appId, objectId = '') => `${path}/edit/${appId}/${objectId}`

const genAppRoute = appId => {
  let beforeEnter
  if (appId) {
    beforeEnter = (to, from, next) => {
      to.params.appId = appId
      next()
    }
  } else {
    appId = ':appId'
  }
  return {
    path: genAppPath(appId, ':objectId?'),
    beforeEnter
  }
}

const routes = [
  {
    path: `${path}/:tab?`,
    name: 'marketplace',
    component: Marketplace,
    props: true
  },
  {
    ...genAppRoute(126944),
    name: 'app-mailchimp',
    component: () => import('../views/apps/AppMailchimp.vue')
  },
  {
    ...genAppRoute(126944),
    name: 'app-mercado-livre',
    component: () => import('../views/apps/AppMercadoLivre/AppMercadoLivre.vue')
  },
  {
    ...genAppRoute(1253),
    name: 'app-custom-shipping',
    component: () => import('../views/apps/AppCustomShipping.vue')
  },
  {
    ...genAppRoute(126945),
    name: 'app-confere-pay',
    component: () => import('../views/apps/AppConferePay.vue')
  },
  {
    ...genAppRoute(),
    name: 'application',
    component: Application
  }
]

const router = new VueRouter({
  routes
})

router.afterEach(() => {
  window.dispatchEvent(new window.HashChangeEvent('hashchange'))
})

export default router

export { routes, genAppPath }
