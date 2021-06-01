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
      year: 0,
      fixValueTimer: null
    }
  },

  computed: {
    localValue: {
      get () {
        return this.value ? new Date(this.value) : new Date(0, 0, 0, 0, 0, 0)
      },
      set (date) {
        console.log(date)
        this.$emit('input', date && !isNaN(date.getTime()) && date.getFullYear() > 2000
          ? date.toISOString()
          : null)
      }
    }
  },

  methods: {
    scheduleFixValue () {
      if (!this.fixValueTimer) {
        this.fixValueTimer = setTimeout(() => {
          const { seconds, minutes, hours, day, month, year } = this
          this.localValue = new Date(year, month, day, hours, minutes, seconds)
          this.fixValueTimer = null
        }, 300)
      }
    },

    splitDate (isoDateStr) {
      const date = new Date(isoDateStr)
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      if (year !== this.year || month !== this.month || day !== this.day) {
        this.year = year
        this.month = month
        this.day = day
        this.scheduleFixValue()
      }
    },

    splitTime (isoTimeStr) {
      const date = new Date(isoTimeStr)
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()
      if (hours !== this.hours || minutes !== this.minutes || seconds !== this.seconds) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
        this.scheduleFixValue()
      }
    }
  },

  watch: {
    localDateValue (isoDateStr) {
      if (!isoDateStr) {
        this.localValue = isoDateStr
      } else {
        this.splitDate(isoDateStr)
      }
    },

    localTimeValue (isoTimeStr) {
      if (isoTimeStr) {
        this.splitTime(isoTimeStr)
      } else {
        this.hours = this.minutes = this.seconds = 0
      }
    }
  },

  created () {
    if (this.value) {
      this.splitDate(this.value)
      this.splitTime(this.value)
    }
  }
}
