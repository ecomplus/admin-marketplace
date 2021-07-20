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
    },

    inputType () {
      const { name } = this
      return /token/i.test(name) || /(api|private)_?key/i.test(name) || /password/i.test(name)
        ? 'password'
        : 'text'
    }
  },

  mounted () {
    if (!this.value && this.schema.default) {
      this.localValue = this.schema.default
    }
  }
}
