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
    value: {
      type: String
    }
  },

  data () {
    return {
      products: [],
      productSearch: ''
    }
  },

  computed: {
    localValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },

  watch: {
    value () {
      this.loadProduct(this.value)
    },
    productSearch () {
      if (this.productSearch && this.productSearch.length > 2) {
        this.findProducts(`name:${this.productSearch}`)
      }
    }
  },

  mounted () {
    if (this.value) {
      this.loadProduct(this.value)
    }
    this.onBlur()
  },

  methods: {
    onBlur () {
      this.$refs.productTypeahead.$refs.input
        .addEventListener('blur', () => {
          if (!this.productSearch) {
            this.$emit('input', '')
            this.$emit('blur')
          }
        })
    },

    handleHit (event) {
      this.$emit('input', event._id)
      this.$emit('blur')
    },

    findProducts (query, size = 30) {
      search({ url: `/items.json?size=${size}&q=${query}` })
        .then(({ data: { hits } }) => {
          this.products = hits.hits.map(({ _id, _source }) => {
            return { _id, name: _source.name }
          })
        }).catch(error => {
          console.error(error)
          if (error.response) {
            console.log(error.response)
          }
        })
    },

    loadProduct (id) {
      store({ url: `/products/${id}.json` })
        .then(({ data }) => {
          this.productSearch = data.name
          this.$refs.productTypeahead.inputValue = this.productSearch
          this.$emit('input', data._id)
        })
        .catch(error => {
          console.error(error)
          if (error.response) {
            console.log(error.response)
          }
        })
    }
  }

}