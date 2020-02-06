import { $ecomConfig } from '@ecomplus/utils'
import CleaveInput from 'vue-cleave-component'

const countryCode = $ecomConfig.get('country_code')

export default {
  name: 'InputDate',

  components: {
    CleaveInput
  },

  props: {
    value: {
      type: [String, Number]
    },
    isoValue: String,
    schema: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    placeholder () {
      return countryCode === 'BR'
        ? 'dd/mm/aaaa'
        : 'yyyy-mm-dd'
    },

    localValue: {
      get () {
        const dateStr = this.value || this.isoValue || this.schema.default
        if (dateStr) {
          return countryCode === 'BR'
            ? new Date(dateStr).toLocaleDateString('pt-BR')
            : dateStr.substr(0, 10)
        }
        return null
      },
      set (value) {
        this.$emit('input', value)
        if (value.length === 10) {
          const splitDate = value.split(this.cleaveOptions.delimiter)
          const dateParts = {}
          this.cleaveOptions.datePattern.forEach((part, index) => {
            dateParts[part] = splitDate[index]
          })
          const date = new Date(dateParts.Y, parseInt(dateParts.m, 10) - 1, parseInt(dateParts.d))
          if (!isNaN(date.getTime())) {
            this.$emit('update:iso-value', date.toISOString())
          }
        } else if (!value) {
          this.$emit('update:iso-value', value)
        }
      }
    },

    cleaveOptions () {
      return countryCode === 'BR'
        ? {
          date: true,
          delimiter: '/',
          datePattern: ['d', 'm', 'Y']
        }
        : {
          date: true,
          delimiter: '-',
          datePattern: ['Y', 'm', 'd']
        }
    }
  }
}
