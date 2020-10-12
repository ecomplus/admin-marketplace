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
    localValue: {
      get () {
        const num = parseFloat(this.value)
        return isNaN(num) ? undefined : num
      },
      set (val) {
        this.$emit('input', val)
      }
    },

    step () {
      return this.schema.type === 'integer' ? 1
        : (this.schema.multipleOf || 0.01)
    }
  },

  mounted () {
    if (typeof this.value !== 'number' && typeof this.schema.default === 'number') {
      this.localValue = this.schema.default
    }
  }
}
