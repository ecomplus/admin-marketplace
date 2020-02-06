import { i18n } from '@ecomplus/utils'
import { i19DiscountType, i19DiscountApplyAt } from '@ecomplus/i18n'
import InputMoney from '../InputMoney.vue'
import InputEnum from '../InputEnum.vue'

export default {
  name: 'InputDiscount',

  components: {
    InputMoney,
    InputEnum
  },

  props: {
    name: {
      type: String,
      required: true
    },
    schema: {
      type: Object
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    type () {
      return this.schema.properties.type
    },

    discountValue () {
      return this.schema.properties.value
    },

    applyAt () {
      return this.schema.properties.apply_at
    },

    localValue () {
      return this.value ? this.value : {}
    },

    typeOptions () {
      return i18n(i19DiscountType)
    },

    applyAtOptions () {
      return i18n(i19DiscountApplyAt)
    }
  },

  methods: {
    update (key, value) {
      this.$emit('input', { ...this.localValue, [key]: value })
    }
  }
}
