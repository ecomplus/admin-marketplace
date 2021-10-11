import { i18n } from '@ecomplus/utils'
import ecomApps from '@ecomplus/apps-manager'
import { BSkeleton } from 'bootstrap-vue'
import { FadeTransition } from 'vue2-transitions'
import EcAppCard from './../EcAppCard.vue'
import EcInstalledAppCard from './../EcInstalledAppCard.vue'
import { queueUpdateApps } from '../../lib/auto-update-apps'

import {
  i19loadDataErrorMsg,
  i19tryAgain
} from '@ecomplus/i18n'

export default {
  name: 'EcAppsMarket',

  components: {
    BSkeleton,
    FadeTransition,
    EcAppCard,
    EcInstalledAppCard
  },

  props: {
    nextTab: String,
    additionalApps: Array,
    skippedApps: {
      type: Array,
      default () {
        return window.ecomMarketSkippedApps
      }
    },
    canDeleteSkippedApps: {
      type: Boolean,
      default () {
        return Boolean(window.ecomMarketDeleteSkippedApps)
      }
    },
    ecomApps: {
      type: Object,
      default: () => ecomApps
    },
    tab: {
      type: String,
      default: 'market'
    }
  },

  data () {
    return {
      loading: false,
      loadError: false,
      errorMessage: '',
      activeTabKey: 'market',
      apps: [],
      marketApps: null,
      appsToUpdate: []
    }
  },

  computed: {
    i19applications () {
      return 'Módulos'
    },

    i19availableApps () {
      return 'Módulos disponíveis'
    },

    i19loadDataErrorMsg () {
      return i18n(i19loadDataErrorMsg)
    },

    i19tryAgain () {
      return i18n(i19tryAgain)
    },

    i19yourInstalledApps () {
      return 'Seus módulos instalados'
    },

    tabs () {
      return {
        market: this.i19availableApps,
        installed: this.i19yourInstalledApps,
        sales: 'Meios de Pagamento',
        shipping: 'Frete e Envio'
      }
    }
  },

  methods: {
    updateTabContent () {
      this.loading = true
      this.loadError = false
      const isMarketApps = this.activeTabKey !== 'installed'
      const isPaymentApps = this.activeTabKey === 'sales'
      const isShippingApps = this.activeTabKey === 'shipping'
      const promise = isMarketApps
        ? !this.marketApps
            ? this.ecomApps.listFromMarket()
            : Promise.resolve(this.marketApps)
        : this.ecomApps.list()
      promise
        .then(data => {
          this.apps = data.result || data

          if (isMarketApps) {
            if (!this.marketApps) {
              this.marketApps = this.apps.concat()
              if (this.marketApps.length) {
                queueUpdateApps(this.ecomApps, this.marketApps, this.requestManualUpdate)
              }
            }
            if (this.activeTabKey !== 'market') {
              const activeCategory = this.activeTabKey === 'payment' ? 'sales' : this.activeTabKey
              this.apps = this.apps.filter(({ category }) => category === activeCategory)
            }
          }
          console.log('skippedApps', this.skippedApps)
          if (Array.isArray(this.skippedApps)) {
            this.apps = this.apps.filter(app => {
              const isSkipped = this.skippedApps.includes(app.id || app.app_id)
              if (isSkipped && !isMarketApps) {
                if (this.canDeleteSkippedApps) {
                  this.ecomApps.remove(this.app._id).catch(console.error)
                } else {
                  window.alert(`${app.title} should not be installed`)
                }
              }
              return !isSkipped
            })
          }

          const pagHiperApp = this.apps.find(app => app.slug === 'paghiper')
          // eslint-disable-next-line camelcase
          if (pagHiperApp && pagHiperApp.short_description) pagHiperApp.short_description = 'Aceite pagamentos com PIX e Boletos na sua loja através da PagHiper. Crie sua conta grátis agora mesmo.'

          const conferePayApp = this.apps.find(app => app.slug === 'confere-pay')
          // eslint-disable-next-line camelcase
          if (conferePayApp && conferePayApp.short_description) conferePayApp.short_description = 'Aceite pagamentos com cartão de crédito na sua loja através da InfinitePay. Parcele em até 12X sem juros com as melhores taxas do mercado. Crie sua conta grátis agora mesmo.'

          this.apps = this.apps.filter((app) => ![
            'wirecard',
            'pagseguro',
            'paypal',
            'github-cd',
            'pix',
            'custom-payment',
            'infinitepay',
            'mercado-pago',
            'pagarme',
            'mercado-livre',
            'vindi',
            'offers-notification',
            'app-ses'
          ].includes(app.slug))
          if (isPaymentApps) {
            this.apps = this.apps.filter((app) => [
              126945,
              1251
            ].includes(app.id))
            const conferePayIndex = this.apps.findIndex(app => app.id === 126945)
            const conferePay = this.apps[conferePayIndex]
            this.apps.splice(conferePayIndex, 1)
            this.apps = [conferePay, ...this.apps]
          }
          if (isShippingApps) {
            this.apps = this.apps.filter((app) => [
              'correios',
              'customshipping',
              'melhor-envio',
              'jadlog',
              'manda-bem',
              'datafrete',
              'mandae'
            ].includes(app.slug))
          }
        })
        .catch(err => {
          console.error(err)
          this.loadError = true
          if (err.response) {
            const { data } = err.response
            if (data) {
              if (data.user_message) {
                this.errorMessage = i18n(data.user_message)
                return
              } else if (data.message) {
                this.errorMessage = data.message
                return
              }
            }
          }
          this.errorMessage = this.i19loadDataErrorMsg
        })
        .finally(() => {
          this.loading = false
        })
    },

    requestManualUpdate (app) {
      this.appsToUpdate.push(app.app_id)
    }
  },

  watch: {
    nextTab: {
      handler (tabKey) {
        this.activeTabKey = tabKey && this.tabs[tabKey]
          ? tabKey
          : 'market'
      },
      immediate: true
    },

    activeTabKey: {
      handler () {
        this.updateTabContent()
      },
      immediate: true
    },

    tab: {
      handler () {
        this.activeTabKey = this.tab
        this.updateTabContent()
      },
      immediate: true
    }
  }
}
