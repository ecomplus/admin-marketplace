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
    onInstall ({ result, app }) {
      this.$router.push({
        name: this.$route.name,
        params: {
          appId: app.id,
          objectId: result._id
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
