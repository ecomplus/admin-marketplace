import EcAppsMarket from './../../components/EcAppsMarket.vue'

export default {
  name: 'Marketplace',

  components: {
    EcAppsMarket
  },

  methods: {
    goToApp (app, appsToUpdate = []) {
      this.$router.push({
        name: 'application',
        params: {
          appId: app.id || app.app_id,
          objectId: app._id,
          newVersionAvailable: appsToUpdate.includes(app.id || app.app_id)
        }
      })
    }
  }
}
