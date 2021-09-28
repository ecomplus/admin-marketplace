import mockedApps from './../../lib/mocked-apps'
import { genAppPath } from './../../router/'
import EcAppsMarket from './../../components/EcAppsMarket.vue'

export default {
  name: 'Marketplace',

  components: {
    EcAppsMarket
  },

  computed: {
    mockedApps: () => mockedApps,

    nextTab () {
      return this.$route.params.tab
    }
  },

  methods: {
    goToApp (app) {
      this.$router.push(genAppPath(app.id || app.app_id, app._id))
    }
  }
}
