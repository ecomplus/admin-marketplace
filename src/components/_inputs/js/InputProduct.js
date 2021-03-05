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
    productSearch () {
      if (this.productSearch && this.productSearch.length > 2) {
        this.findProducts(`name:${this.productSearch}`)
      }
    }
  },

  mounted () {
    if (!this.value && this.schema.default) {
      this.localValue = this.schema.default
    }
    if (this.value) {
      this.loadProduct(this.value)
    }
  },

  methods: {
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
          this.$refs.typeahead.inputValue = this.productSearch
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
