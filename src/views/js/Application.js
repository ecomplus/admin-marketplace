import EcApplication from './../../components/EcApplication.vue'

export default {
  name: 'Application',

  components: {
    EcApplication
  },

  props: {
    isSettingsVisible: {
      type: Boolean,
      default: true
    },
    settingsOpenCollapse: Number
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
    },

    application: {
      handler () {
        this.$emit('load', this.application)
      },
      deep: true
    }
  }
}
