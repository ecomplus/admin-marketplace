import { BCollapse, BButton, BCard } from 'bootstrap-vue'

export default {
  name: 'AppMercadoLivreLogsList',
  components: {
    BCollapse, BCard, BButton
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
