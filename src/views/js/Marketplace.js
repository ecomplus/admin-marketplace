import EcAppsMarket from './../../components/EcAppsMarket.vue'
import { genAppPath } from './../../router/'

export default {
  name: 'Marketplace',

  computed: {
    nextTab () {
      return this.$route.params.tab
    }
  },

  components: {
    EcAppsMarket
  },

  methods: {
    goToApp (app) {
      this.$router.push(genAppPath(app.id || app.app_id, app._id))
    }
  }
}
