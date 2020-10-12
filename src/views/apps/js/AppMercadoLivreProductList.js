import * as ecomMLAppService from '../../../services/EcomMLAppService'
import * as mercadoLivreService from '../../../services/MercadoLivreService'

export default {
  name: 'AppMercadoLivreProducList',
  props: {
    mlKeys: {
      type: Array,
      default: () => ['id', 'title', 'status']
    }
  },
  data () {
    return {
      mlProducts: []
    }
  },
  created () {
    this.loadMLProducts()
  },
  methods: {
    loadMLProducts () {
      ecomMLAppService.getProducts()
        .then(({ data }) => {
          const productIDs = data.results
          const keys = [...this.mlKeys, 'permalink']
          mercadoLivreService.findProducts(productIDs, keys)
            .then(({ data }) => {
              this.mlProducts = data
            })
        })
        .catch(error => console.error(`[loadMLProducs]: ${error}`))
    }
  }
}
