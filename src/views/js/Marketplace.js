import EcAppsMarket from './../../components/EcAppsMarket.vue'

export default {
  name: 'Marketplace',

  components: {
    EcAppsMarket
  },

  methods: {
    goToApp (app) {
      this.$router.push({
        name: 'application',
        params: {
          appId: app.id || app.app_id,
          objectId: app._id
        }
      })
    }
  }
}
