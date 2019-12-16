import { _config } from '@ecomplus/utils'

import CleaveInput from 'vue-cleave-component'
const countryCode = _config.get('country_code')

export default {
  name: 'InputMoney',
  components: {
    CleaveInput
  },
  props: {
    value: {
      type: Number
    },
    name: {
      type: String,
      required: true
    },
    schema: {
      type: Object
    }
  },
  computed: {
    localValue: {
      get () {
        return this.value ? Number(this.value) : Number(this.schema.default)
      },
      set (value) {
        this.$emit('input', Number(value))
      }
    },
    cleaveOptions () {
      return {
        prefix: countryCode === 'BR' ? 'R$' : '$',
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
        numeralDecimalMark: ',',
        numeralDecimalScale: 2,
        delimiter: '.',
        rawValueTrimPrefix: true
      }
    }
  }
}
