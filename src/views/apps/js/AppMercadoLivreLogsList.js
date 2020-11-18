import { BCollapse, BButton, BCard, BCardBody, BCardHeader, BCardText } from 'bootstrap-vue'

export default {
  name: 'AppMercadoLivreLogsList',
  components: {
    BCollapse, BCard, BButton, BCardBody, BCardHeader, BCardText
  },
  props: {
    logs: Array
  },
  data: {
    activeId: null
  },
  methods: {
    setActiveId (id) {
      console.log(id)
      this.activeId = id
    }
  }
}
