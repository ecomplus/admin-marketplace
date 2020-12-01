import { BCollapse, BButton, BCard, BCardBody, BCardHeader, BCardText } from 'bootstrap-vue'

export default {
  name: 'AppMercadoLivreLogsList',
  components: {
    BCollapse, BCard, BButton, BCardBody, BCardHeader, BCardText
  },
  props: {
    logs: Array,
    loading: Boolean
  },
  data: {
    activeId: null
  },
  methods: {
    setActiveId (id) {
      this.activeId = id
    }
  }
}
