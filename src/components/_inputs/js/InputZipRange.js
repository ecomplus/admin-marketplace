import InputZipCode from '../InputZipCode'

export default {
  name: 'InputZipRange',

  components: {
    InputZipCode
  },

  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    schema: Object
  },

  data () {
    return {
      childSchemas: {}
    }
  },

  methods: {
    update (key, value) {
      this.$emit('input', { ...this.value, [key]: value })
    }
  },

  created () {
    const getChildSchema = field => {
      return (this.schema && this.schema.properties && this.schema.properties[field]) || {}
    }
    this.childSchemas.min = getChildSchema('min')
    this.childSchemas.max = getChildSchema('max')
  }
}
