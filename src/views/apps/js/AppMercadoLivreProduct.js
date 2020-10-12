import * as mlService from '../../../services/MercadoLivreService'
import * as ecomMLAppService from '../../../services/EcomMLAppService'
import AppMercadoLivreProducList from '../AppMercadoLivreProductList.vue'
import { BTabs, BTab } from 'bootstrap-vue'

import { search } from '@ecomplus/client'

export default {
  name: 'AppMercadoLivreProduct',
  components: {
    AppMercadoLivreProducList,
    BTabs,
    BTab
  },
  data () {
    return {
      result: {},
      error: {},
      suggestedCategory: {},
      productTerm: '',
      listingTypes: [],
      productsFound: [],
      productSelectedId: '',
      mlProducts: [],
      product: {
        category_id: '',
        listing_type_id: '',
        product: {}
      }
    }
  },
  created () {
    this.loadMLProducts()
  },
  watch: {
    productTerm (newValue) {
      if (newValue.length > 2) {
        const data = {
          _source: ['*'],
          query: {
            bool: {
              must: {
                multi_match: {
                  query: newValue,
                  fields: ['name', 'keywords']
                }
              }
            }
          }
        }
        search({ url: '/items.json', method: 'POST', data })
          .then(({ data, status }) => {
            if (status === 200) {
              this.productsFound = data.hits.hits
            }
          })
          .catch(error => console.error(error))
      }
    },
    'product.category_id' (newValue) {
      if (newValue.length > 3) {
        mlService.getListingTypes(newValue)
          .then(({ data }) => {
            this.listingTypes = data
          })
          .catch(() => (this.listingTypes = []))
      }
    },
    'product.product' (newValue) {
      ecomMLAppService.findCategory(newValue._source.name)
        .then(({ data }) => {
          console.log('categoria sugerida', data)
        })
        .catch(error => console.log(error))
    }
  },
  methods: {
    selectProduct (product) {
      this.product.product = product._source
    },
    send () {
      this.error = {}
      this.result = {}
      const data = {
        category_id: this.product.category_id,
        listing_type_id: this.product.listing_type_id,
        product: {
          _id: this.product.product._id,
          ...this.product.product._source
        }
      }

      ecomMLAppService.createProduct(data)
        .then(({ data }) => (this.result = data))
        .catch(error => (this.error = error))
    }
  }
}
