import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import { search } from '@ecomplus/client'

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
      products: [{ name: 'arroz' }, { name: 'feijão' }],
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
        search({ url: `/items.json?size=30&q=name:${this.productSearch}` })
          .then(({ data: { hits } }) => {
            console.log(hits)
            this.products = hits.hits.map(({ _id, _source }) => {
              return { _id, name: _source.name }
            })
            console.log(this.products)
          })
      }
    }
  },

  mounted () {
    if (!this.value && this.schema.default) {
      this.localValue = this.schema.default
    }
  },

  methods: {
    getProducts: async (query) => {
      // Search products
    }
  }

}
