export default {
  name: 'InputNumber',
  props: {
    name: {
      type: String,
      required: true
    },
    schema: {
      type: Object
    },
    value: {
      type: Number
    }
  },
  computed: {
    localValue: {
      get () {
        return this.value ? Number(this.value) : Number(this.schema.default)
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
