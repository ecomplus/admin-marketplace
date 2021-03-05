import InputText from '../InputText.vue'
import InputProduct from '../InputProduct.vue'

export default {
  name: 'InputList',

  components: {
    InputText,
    InputProduct
  },

  props: {
    schema: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: Array
  },

  data () {
    return {
      localValue: this.value || []
    }
  },

  methods: {
    getItemValue (item) {
      switch (this.schema.items.type) {
        case 'string':
          return item
        case 'integer':
        case 'number':
        case 'boolean':
          return item.toString()
        default:
          return JSON.stringify(item)
      }
    },

    setItemValue (str, i) {
      console.log('chegou no setItemValue', str, i)
      let item = str
      if (str !== '') {
        console.log(this.schema.items.type, '==========')
        switch (this.schema.items.type) {
          case 'integer':
            item = parseInt(str, 10)
            break
          case 'number':
            item = Number(str)
            break
          case 'boolean':
            item = str.toLowerCase() !== 'false'
            break
          case 'object':
          case 'array':
            item = JSON.parse(str)
        }
      }
      console.log(this.localValue)
      if (this.localValue.length > i) {
        this.$set(this.localValue, i, item)
      } else {
        this.localValue.push(item)
      }
    },

    addItem () {
      this.setItemValue('', this.localValue.length)
    },

    checkItem (i) {
      if (this.localValue[i] === '') {
        this.localValue.splice(i, 1)
      }
    }
  },

  watch: {
    localValue (value) {
      this.$emit('input', this.localValue.filter(item => item !== ''))
    }
  }
}
