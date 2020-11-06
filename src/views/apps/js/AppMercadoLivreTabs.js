import AppMercadoLivreExportation from '../AppMercadoLivreExportation.vue'
import { BTabs, BTab } from 'bootstrap-vue'
import EcomApps from '@ecomplus/apps-manager'

export default {
  name: 'AppMercadoLivreTabs',
  components: {
    BTabs,
    BTab,
    AppMercadoLivreExportation
  },
  props: {
    applicationBody: () => {}
  },
  data () {
    return {
      exportationProducts: []
    }
  },
  methods: {
    addToExportation (value) {
      this.exportationProducts.push(value)
    },
    exportProducts () {
      const ecomApps = new EcomApps()
      const data = {
        data: { exportation_products: this.exportationProducts }
      }
      ecomApps.editApplication(this.applicationBody._id, data)
        .then(() => {
          this.exportationProducts = []
        })
        .catch(error => console.error(error))
    }
  }
}
