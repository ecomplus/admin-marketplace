import { getAuthUrl } from '../../../../services/EcomMLAppService'
import EcomApps from '@ecomplus/apps-manager'

const ecomApps = new EcomApps()

export default {
  name: 'AppMercadoLivreAuth',
  data () {
    return {
      profile: {}
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
      const timeout = 500
      const maxAttempts = timeout * 100
      const interval = setInterval(() => {
        const appId = this.$route.params.objectId
        if (!running) {
          running = true
          ecomApps.findStoreApplication(appId)
            .then(({ data }) => {
              if (data.data.mlProfile.id) {
                console.log(data)
                this.profile = data.data.mlProfile
                authWindow.close()
                clearInterval(interval)
              }
            })
            .catch(error => console.error(error))
            .finally(() => {
              running = false
              if (count >= maxAttempts) {
                clearInterval(interval)
                return authWindow.close()
              }
              count++
            })
        }
      }, 500)
    }
  }
}
