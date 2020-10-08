export default {
  name: 'InputBoolean',

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
    },

    isDisable () {
      return this.name.indexOf('disable') > -1
    }
  },

  mounted () {
    if (this.value === undefined && typeof this.schema.default === 'boolean') {
      this.localValue = this.schema.default
    }
  }
}
