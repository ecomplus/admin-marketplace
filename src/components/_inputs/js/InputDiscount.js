import InputMoney from '../InputMoney.vue'

export default {
  name: 'InputDiscount',
  components: {
    InputMoney
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
    others () {
      const others = {}
      for (const prop of Object.keys(this.schema.properties)) {
        if (!['value', 'type'].includes(prop)) {
          others[prop] = this.schema.properties[prop]
        }
      }
      return others
    },
    localValue () {
      return this.value ? this.value : {}
    }
  },
  methods: {
    update (key, value) {
      this.$emit('input', { ...this.localValue, [key]: value })
    }
  }
}
