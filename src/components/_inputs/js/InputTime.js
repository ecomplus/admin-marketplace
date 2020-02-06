import CleaveInput from 'vue-cleave-component'

export default {
  name: 'InputTime',

  components: {
    CleaveInput
  },

  props: {
    value: {
      type: [String, Number]
    },
    isoValue: String,
    schema: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    localValue: {
      get () {
        if (this.value) {
          return this.value
        } else {
          const date = new Date(this.isoValue || this.schema.default)
          if (!isNaN(date.getTime())) {
            const formatTime = dateMethod => date[dateMethod]().toString().padStart(2, '0')
            return `${formatTime('getHours')}:${formatTime('getMinutes')}:${formatTime('getSeconds')}`
          }
        }
        return this.schema.default || null
      },
      set (value) {
        this.$emit('input', value)
        if (value.length === 8) {
          const splitTime = value.split(':')
          const timeParts = {}
          this.cleaveOptions.timePattern.forEach((part, index) => {
            timeParts[part] = splitTime[index]
          })
          const date = new Date()
          date.setHours(parseInt(timeParts.h))
          date.setMinutes(parseInt(timeParts.m))
          date.setSeconds(parseInt(timeParts.s))
          this.$emit('update:iso-value', date.toISOString())
        } else if (!value) {
          this.$emit('update:iso-value', value)
        }
      }
    },

    cleaveOptions () {
      return {
        time: true,
        timePattern: ['h', 'm', 's']
      }
    }
  }
}
