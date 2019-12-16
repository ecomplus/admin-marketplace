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
      type: Boolean
    }
  },
  computed: {
    localValue: {
      get () {
        return typeof this.value === 'boolean' ? this.value : Boolean(this.schema.default)
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
