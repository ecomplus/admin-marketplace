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
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    schema: Object
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

    typeOptions () {
      return i18n(i19DiscountType)
    },

    applyAtOptions () {
      return i18n(i19DiscountApplyAt)
    }
  },

  methods: {
    update (key, value) {
      this.$emit('input', { ...this.value, [key]: value })
    }
  }
}
