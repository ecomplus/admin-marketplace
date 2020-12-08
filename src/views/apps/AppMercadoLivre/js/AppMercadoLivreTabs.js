import AppMercadoLivreExportation from '../AppMercadoLivreExportation.vue'
import AppMercadoLivreLink from '../AppMercadoLivreLink.vue'
import AppMercadoLivreLogsList from '../AppMercadoLivreLogsList.vue'
import AppMercadoLivreAuth from '../AppMercadoLivreAuth.vue'
import AppMercadoLivreProductList from '../AppMercadoLivreProductList.vue'
import { BTabs, BTab, BCollapse, BCard, BButton, BCardBody, BCardHeader, BCardText } from 'bootstrap-vue'
import EcomApps from '@ecomplus/apps-manager'

const ecomApps = new EcomApps()

export default {
  name: 'AppMercadoLivreTabs',
  components: {
    BTabs,
    BTab,
    BCollapse,
    BCard,
    BButton,
    BCardBody,
    BCardHeader,
    BCardText,
    AppMercadoLivreExportation,
    AppMercadoLivreLink,
    AppMercadoLivreLogsList,
    AppMercadoLivreProductList,
    AppMercadoLivreAuth
  },
  data () {
    return {
      applicationBody: {
        hidden_data: {
          logs: []
        },
        data: {
          product_correlations: {},
          mlProfile: []
        }
      },
      exportationProducts: [],
      linkProducts: [],
      loading: false
    }
  },
  created () {
    this.loadApplicationBody()
  },
  methods: {
    loadApplicationBody () {
      const appId = this.$route.params.objectId
      this.loading = true
      ecomApps.findStoreApplication(appId)
        .then(({ data }) => {
          Object.assign(this.applicationBody, data)
        })
        .catch(error => console.error(error))
        .finally(() => (this.loading = false))
    },
    addToExportation (value) {
      this.exportationProducts.push(value)
    },
    addToLink (value) {
      this.linkProducts.push(value)
    },
    unlinkProduct (value) {
      const ecomApps = new EcomApps()
      const data = {}
      const productCorrelations = this.applicationBody.data.product_correlations
      productCorrelations[value.metadata.product_id] = productCorrelations[value.metadata.product_id]
        .filter(item => item.mlId !== value.mlId)
      data.product_correlations = productCorrelations
      ecomApps.editApplication(this.applicationBody._id, { data })
        .catch(error => console.log(error))
    },
    exportLinkProducts () {
      const ecomApps = new EcomApps()
      const data = {
        data: { link_products: this.linkProducts }
      }
      ecomApps.editApplication(this.applicationBody._id, data)
        .then(() => {
          this.linkProducts = []
        })
        .catch(error => console.error(error))
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
    },
    getCheckedClass (value) {
      return value ? 'fa fa-check' : 'fa fa-close'
    }
  }
}
