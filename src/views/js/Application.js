import EcApplication from './../../components/EcApplication.vue'
import { genAppPath } from './../../router/'

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
        app_id: '',
        _id: '',
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
    },

    goToApp (app) {
      this.$router.push(genAppPath(app.id || app.app_id, app._id))
    }
  },

  watch: {
    '$route.params.appId': {
      handler (appId) {
        this.application = {
          app_id: Number(appId),
          _id: this.$route.params.objectId,
          title: ''
        }
      },
      immediate: true
    },

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
