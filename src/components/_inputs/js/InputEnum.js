export default {
  name: 'InputEnum',

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
    value: String,
    i18nValues: Object
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
