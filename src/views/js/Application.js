import EcApplication from './../../components/EcApplication.vue'

export default {
  name: 'Application',

  components: {
    EcApplication
  },

  computed: {
    application () {
      return {
        app_id: this.$route.params.appId,
        _id: this.$route.params.objectId
      }
    }
  },

  methods: {
    goToApp (app, object) {
      this.$router.push({
        name: this.$route.name,
        params: {
          appId: object.app_id,
          objectId: app._id
        }
      })
    },

    goToMarket () {
      this.$router.push({
        name: 'marketplace'
      })
    }
  }
}
