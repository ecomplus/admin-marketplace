import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

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

  mounted () {
    if (!this.value && this.schema.default) {
      this.localValue = this.schema.default
    }
  },

  async getProducts (query) {
    // Search products
  }

}
