import { $ecomConfig } from '@ecomplus/utils'

export default {
  name: 'InputNumber',

  props: {
    name: {
      type: String,
      required: true
    },
    schema: {
      type: Object,
      default: () => ({})
    },
    value: Number
  },

  computed: {
    countryCode: () => $ecomConfig.get('country_code'),

    localValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
