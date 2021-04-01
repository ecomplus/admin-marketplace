import EcApplication from './../../components/EcApplication.vue'

export default {
  name: 'Application',

  components: {
    EcApplication
  },

  data () {
    return {
      application: {
        app_id: this.$route.params.appId,
        _id: this.$route.params.objectId,
        title: ''
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
  },

  watch: {
    'application.title' (appTitle) {
      const pageTitle = document.title.replace(/\[[^]+\]\s·\s/, '')
      document.title = `[${appTitle.replace(/[[\]]/, '-')}] · ${pageTitle}`
    }
  }
}
