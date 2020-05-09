export default {
  name: 'InputText',

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
    value: {
      type: String
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
  },

  mounted () {
    if (!this.value && this.schema.default) {
      this.localValue = this.schema.default
    }
  }
}
