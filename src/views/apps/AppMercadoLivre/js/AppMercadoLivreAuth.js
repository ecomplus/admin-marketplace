import { getAuthUrl } from '../../../../services/EcomMLAppService'
import EcomApps from '@ecomplus/apps-manager'

const ecomApps = new EcomApps()

export default {
  name: 'AppMercadoLivreAuth',
  data () {
    return {
      profile: {},
      authInterval: null
    }
  },
  props: {
    mlProfile: {}
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
        const appId = this.$route.params.objectId
        if (!running) {
          running = true
          ecomApps.findStoreApplication(appId)
            .then(({ data }) => {
              if (data.data.mlProfile.id) {
                console.log(data)
                this.profile = data.data.mlProfile
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
