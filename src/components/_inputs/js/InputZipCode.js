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
        const value = this.value ? this.value : this.schema.default
        if (countryCode === 'BR' && typeof value === 'number') {
          return String(value).padStart(8, '0')
        }
        return value
      },
      set (value) {
        switch (this.schema.type) {
          case 'integer':
          case 'number':
            return this.$emit('input', Number(value.replace(/\D/g, '')))
        }
        this.$emit('input', value)
      }
    },

    cleaveOptions () {
      return countryCode === 'BR' ? { blocks: [5, 3], delimiter: '-' } : { blocks: [30] }
    }
  }
}
