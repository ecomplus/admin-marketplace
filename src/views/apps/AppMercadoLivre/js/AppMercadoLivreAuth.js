import { getAuthUrl } from '../../../../services/EcomMLAppService'
import ecomApps from '@ecomplus/apps-manager'

export default {
  name: 'AppMercadoLivreAuth',
  data () {
    return {
      profile: {},
      authInterval: null
    }
  },
  props: {
    mlProfile: {},
    ecomApps: {
      type: Object,
      default: () => ecomApps
    }
  },
  created () {
    this.profile = this.mlProfile
  },
  watch: {
    mlProfile () {
      this.profile = this.mlProfile
    }
  },
  methods: {
    openSignInWindow () {
      const strWindowFeatures = 'toolbar=no, menubar=no, width=600, height=700, top=100, left=100'
      const authWindow = window.open(getAuthUrl(), '', strWindowFeatures)
      this.loadProfile(authWindow)
    },
    loadProfile (authWindow) {
      let running = false
      let count = 0
      const timeout = 1000
      const maxAttempts = timeout * 100
      this.authInterval = setInterval(() => {
        const promise = this.$route.params.objectId
          ? this.ecomApps.find(this.$route.params.objectId)
          : this.ecomApps.list({ params: { app_id: this.$route.params.appId }})
            .then(([app]) => { return app ? this.ecomApps.find(app._id) : {}
          })

        if (!running) {
          running = true
          promise
            .then(({ data }) => {
              const appData = data.data
              if (appData && (appData.mlProfile || {}).id) {
                this.profile = appData.mlProfile
                authWindow.close()
                clearInterval(this.authInterval)
              }
            })
            .catch(error => console.error(error))
            .finally(() => {
              running = false
              if (count >= maxAttempts) {
                clearInterval(this.authInterval)
                return authWindow.close()
              }
              count++
            })
        }
      }, 500)
    }
  },
  beforeDestroy () {
    if (this.authInterval) {
      clearInterval(this.authInterval)
    }
  }
}
