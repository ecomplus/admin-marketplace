import { _config } from '@ecomplus/utils'

import CleaveInput from 'vue-cleave-component'
const countryCode = _config.get('country_code')

export default {
  name: 'InputMoney',

  components: {
    CleaveInput
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
      type: Number
    }
  },

  computed: {
    localValue: {
      get () {
        return this.value
      },
      set (val) {
        const num = parseFloat(val)
        this.$emit('input', isNaN(num) ? null : num)
      }
    },

    cleaveOptions () {
      return {
        prefix: countryCode === 'BR' ? 'R$ ' : '$',
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
        numeralDecimalMark: ',',
        numeralDecimalScale: 2,
        delimiter: '.',
        rawValueTrimPrefix: true
      }
    }
  },

  mounted () {
    if (typeof this.schema.default === 'number') {
      this.localValue = this.schema.default
    }
  }
}
