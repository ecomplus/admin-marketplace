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

  data () {
    return {
      inputType: ''
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

    isPassword () {
      const { name } = this
      return /token/i.test(name) ||
        /(api|private)_?key/i.test(name) ||
        /password/i.test(name) ||
        /encryption/i.test(name)
    }
  },

  created () {
    this.inputType = this.isPassword ? 'password' : 'text'
  },

  mounted () {
    if (!this.value && this.schema.default) {
      this.localValue = this.schema.default
    }
  }
}
