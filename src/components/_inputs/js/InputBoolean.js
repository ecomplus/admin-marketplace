export default {
  name: 'InputText',
  props: {
    schema: {
      type: Object,
      required: true
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
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
