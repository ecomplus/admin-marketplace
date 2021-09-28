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
  i19delivery,
  i19loadDataErrorMsg,
  i19payment,
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
    nextTab: String,
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
      default () {
        return ecomApps
      }
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
    i19applications: () => i18n(i19applications),
    i19availableApps: () => i18n(i19availableApps),
    i19delivery: () => i18n(i19delivery),
    i19loadDataErrorMsg: () => i18n(i19loadDataErrorMsg),
    i19payment: () => i18n(i19payment),
    i19tryAgain: () => i18n(i19tryAgain),
    i19yourInstalledApps: () => i18n(i19yourInstalledApps),

    tabs () {
      return {
        market: this.i19availableApps,
        installed: this.i19yourInstalledApps,
        sales: this.i19payment,
        shipping: this.i19delivery
      }
    }
  },

  methods: {
    updateTabContent () {
      this.loading = true
      this.loadError = false
      const isMarketApps = this.activeTabKey !== 'installed'
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
              this.apps = this.apps.filter(({ category }) => category === this.activeTabKey)
            }
          }
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
    }
  }
}
