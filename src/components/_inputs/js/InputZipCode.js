import { i18n, $ecomConfig } from '@ecomplus/utils'
import { i19zipCode } from '@ecomplus/i18n'
import CleaveInput from 'vue-cleave-component'

const countryCode = $ecomConfig.get('country_code')

export default {
  name: 'InputZipCode',

  components: {
    CleaveInput
  },

  props: {
    value: {
      type: [String, Number]
    },
    schema: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  computed: {
    placeholder () {
      return i18n(i19zipCode)
    },

    pattern () {
      if (countryCode === 'BR') {
        return '[\\d]{5}-[\\d]{3}'
      }
      return null
    },

    localValue: {
      get () {
        return this.value ? this.value : this.schema.default
      },
      set (value) {
        this.$emit('input', value)
      }
    },

    cleaveOptions () {
      return countryCode === 'BR' ? { blocks: [5, 3], delimiter: '-' } : { blocks: [30] }
    }
  }
}
