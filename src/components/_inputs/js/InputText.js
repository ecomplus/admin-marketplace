export default {
  name: 'InputText',
  props: {
    schema: {
      type: Object
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String
    }
  },
  computed: {
    localValue: {
      get () {
        return typeof this.value === 'string' ? this.value : this.schema.default
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
