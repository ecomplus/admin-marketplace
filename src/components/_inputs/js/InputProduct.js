import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import { search, store } from '@ecomplus/client'

export default {
  name: 'InputProduct',

  components: {
    VueBootstrapTypeahead
  },

  props: {
    schema: {
      type: Object,
      default () {
        return {}
      }
    },
    name: {
      type: String,
      required: true
    },
    value: String
  },

  data () {
    return {
      products: [],
      term: '',
      isSearchScheduled: false,
      selectedProductName: ''
    }
  },

  methods: {
    handleHit ({ _id, name }) {
      this.selectedProductName = name
      this.$emit('input', _id)
      this.$emit('blur')
    },

    searchProducts (term) {
      search({
        url: '/items.json',
        method: 'POST',
        data: {
          query: {
            bool: {
              must: {
                multi_match: {
                  query: term,
                  fields: [
                    'name',
                    'sku',
                    'keywords'
                  ]
                }
              }
            }
          }
        }
      })
        .then(({ data: { hits } }) => {
          if (
            this.term === term ||
            (!this.products.length && this.term.startsWith(term))
          ) {
            this.products = hits.hits.map(({ _id, _source }) => {
              return { _id, name: _source.name }
            })
            if (this.products === 1) {
              this.$refs.typeahead.inputValue = this.products[0].name
              this.handleHit(this.products[0])
            }
          }
        })
        .catch(console.error)
    },

    findById (productId) {
      store({ url: `/products/${productId}.json` })
        .then(({ data: { _id, name } }) => {
          this.selectedProductName = this.term = name
          this.$refs.typeahead.inputValue = name
          this.products = [{ _id, name }]
          this.$emit('input', _id)
        })
        .catch(console.error)
    }
  },

  watch: {
    term () {
      if (this.term && this.term.length > 2 && this.term !== this.selectedProductName) {
        if (!this.isSearchScheduled) {
          this.isSearchScheduled = true
          this.$nextTick(() => {
            setTimeout(() => {
              this.searchProducts(this.term)
              this.isSearchScheduled = false
            }, 40)
          })
        }
      }
    }
  },

  mounted () {
    if (this.value) {
      this.findById(this.value)
    }
    this.$refs.typeahead.$refs.input.addEventListener('blur', () => {
      if (!this.term) {
        this.$emit('input', '')
        this.$emit('blur')
      } else if (/^[a-f0-9]{24}$/.test(this.term)) {
        this.findById(this.term)
      }
    })
  }
}
