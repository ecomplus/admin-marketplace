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
        installed: this.i19yourInstalledApps
      }
    }
  },

  methods: {
    updateTabContent () {
      this.loading = true
      this.loadError = false
      const isMarketApps = this.activeTabKey === 'market'
      const promise = isMarketApps
        ? this.ecomApps.listFromMarket()
        : this.ecomApps.list()
      promise
        .then(data => {
          this.apps = data.result || data
          this.apps = this.apps.filter((app) => ![
            'wirecard',
            'pagseguro',
            'paypal',
            'paghiper',
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
            'ideris'
          ].includes(app.slug))
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
          if (this.activeTabKey === 'market' && this.apps.length) {
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
    }
  }
}
