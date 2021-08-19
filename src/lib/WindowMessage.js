import Vue from 'vue'

const WindowMessage = new Vue({
  data () {
    return {
      message: ''
    }
  },
  created () {
    window.addEventListener('message', e => {
      this.message = e
    })
  }
})

export default WindowMessage
