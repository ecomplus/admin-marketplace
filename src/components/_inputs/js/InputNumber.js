import { $ecomConfig } from '@ecomplus/utils'

export default {
  name: 'InputNumber',

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
    value: [Number, String]
  },

  computed: {
    countryCode: () => $ecomConfig.get('country_code'),

    localValue: {
      get () {
        const num = parseFloat(this.value)
        return isNaN(num) ? undefined : num
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },

  mounted () {
    if (this.schema.default) {
      this.localValue = this.schema.default
    }
  }
}
