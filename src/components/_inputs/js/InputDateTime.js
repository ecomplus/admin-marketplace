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
      localTimeValue: this.value,
      seconds: 0,
      minutes: 0,
      hours: 0,
      day: 0,
      month: 0,
      year: 0
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

  methods: {
    fixLocalValue () {
      const { seconds, minutes, hours, day, month, year } = this
      this.localValue = new Date(year, month, day, hours, minutes, seconds)
    }
  },

  watch: {
    localDateValue (isoDateStr) {
      if (!isoDateStr) {
        this.localValue = isoDateStr
      } else {
        const date = new Date(isoDateStr)
        this.year = date.getFullYear()
        this.month = date.getMonth()
        this.day = date.getDate()
        this.fixLocalValue()
      }
    },

    localTimeValue (isoTimeStr) {
      if (isoTimeStr) {
        const date = new Date(isoTimeStr)
        this.hours = date.getHours()
        this.minutes = date.getMinutes()
        this.seconds = date.getSeconds()
      } else {
        this.hours = this.minutes = this.seconds = 0
      }
      this.fixLocalValue()
    }
  }
}
