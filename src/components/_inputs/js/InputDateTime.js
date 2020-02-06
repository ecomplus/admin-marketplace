import InputDate from './../InputDate'
import InputTime from './../InputTime'

export default {
  name: 'InputDateTime',

  components: {
    InputDate,
    InputTime
  },

  props: {
    value: {
      type: [String, Number]
    },
    schema: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      localDateValue: this.value,
      localTimeValue: this.value
    }
  },

  computed: {
    localValue: {
      get () {
        return this.value ? new Date(this.value) : new Date(0, 0, 0, 0, 0, 0)
      },
      set (date) {
        this.$emit('input', date && !isNaN(date.getTime()) ? date.toISOString() : null)
      }
    }
  },

  watch: {
    localDateValue (isoDateStr) {
      if (!isoDateStr) {
        this.localValue = isoDateStr
      } else {
        const date = new Date(isoDateStr)
        this.localValue.setFullYear(date.getFullYear())
        this.localValue.setMonth(date.getMonth())
        this.localValue.setDate(date.getDate())
        this.localValue = this.localValue
      }
    },

    localTimeValue (isoTimeStr) {
      let hours, minutes, seconds
      if (isoTimeStr) {
        const date = new Date(isoTimeStr)
        hours = date.getHours()
        minutes = date.getMinutes()
        seconds = date.getSeconds()
      }
      this.localValue.setHours(hours)
      this.localValue.setMinutes(minutes)
      this.localValue.setSeconds(seconds)
      this.localValue = this.localValue
    }
  }
}
