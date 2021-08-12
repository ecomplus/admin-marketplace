import { i18n } from '@ecomplus/utils'
import ecomApps from '@ecomplus/apps-manager'
import { BSkeleton } from 'bootstrap-vue'
import { FadeTransition } from 'vue2-transitions'
import EcAppCard from './../EcAppCard.vue'
import EcInstalledAppCard from './../EcInstalledAppCard.vue'
import { queueUpdateApps } from '../../lib/auto-update-apps'

import {
  i19applications,
  i19availableApps,
  i19loadDataErrorMsg,
  i19tryAgain,
  i19yourInstalledApps
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
      appsToUpdate: []
    }
  },

  computed: {
    i19applications () {
      return i18n(i19applications)
    },

    i19availableApps () {
      return i18n(i19availableApps)
    },

    i19loadDataErrorMsg () {
      return i18n(i19loadDataErrorMsg)
    },

    i19tryAgain () {
      return i18n(i19tryAgain)
    },

    i19yourInstalledApps () {
      return i18n(i19yourInstalledApps)
    },

    tabs () {
      return {
        market: this.i19availableApps,
        installed: this.i19yourInstalledApps,
        payment: 'Meios de Pagamento',
        shipping: 'Frete e Envio'
      }
    }
  },

  methods: {
    updateTabContent () {
      this.loading = true
      this.loadError = false
      const isMarketApps = this.activeTabKey === 'market'
      const isPaymentApps = this.activeTabKey === 'payment'
      const isShippingApps = this.activeTabKey === 'shipping'
      const promise = isMarketApps || isPaymentApps || isShippingApps
        ? this.ecomApps.listFromMarket()
        : this.ecomApps.list()
      promise
        .then(data => {
          this.apps = data.result || data

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
            'tiny-erp',
            'custom-payment',
            'infinitepay',
            'mercado-pago',
            'bling-erp',
            'pagarme',
            'mercado-livre',
            'vindi',
            'offers-notification',
            'app-ses'
          ].includes(app.slug))
          if (isPaymentApps) {
            this.apps = this.apps.filter((app) => [
              'confere-pay',
              'paghiper'
            ].includes(app.slug))
            const conferePayIndex = this.apps.findIndex(app => app.slug === 'confere-pay')
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
          if ((isMarketApps || isPaymentApps || isShippingApps) && this.apps.length) {
            queueUpdateApps(this.ecomApps, this.apps, this.requestManualUpdate)
          }
        })
    },

    requestManualUpdate (app) {
      this.appsToUpdate.push(app.app_id)
    }

  },

  watch: {
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
