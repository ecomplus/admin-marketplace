import Application from '../../Application.vue'
import AppMercadoLivreTabs from '../AppMercadoLivreTabs.vue'
import EcomApps from '@ecomplus/apps-manager'

export default {
  name: 'AppMercadoLivre',
  data () {
    return {
      applicationBody: {}
    }
  },
  created () {
    const ecomApps = new EcomApps()
    const appId = this.$route.params.objectId
    console.log(appId)
    ecomApps.findStoreApplication(appId)
      .then(({ data }) => (this.applicationBody = data))
      .catch(error => console.error(error))
  },
  components: {
    Application,
    AppMercadoLivreTabs
  }
}
