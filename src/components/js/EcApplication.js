import VueMarkdown from 'vue-markdown'
import EcomApps from '@ecomplus/apps-manager'
import EcAppDescription from './EcAppDescription'
import EcAppConfiguration from './EcAppConfiguration'
import EcAppRelated from './EcAppRelated'
import { i18n } from '@ecomplus/utils'
import { i19version, i19install } from '@ecomplus/i18n'

export default {
  name: 'EcApplication',
  components: {
    VueMarkdown,
    EcAppDescription,
    EcAppConfiguration,
    EcAppRelated
  },
  data () {
    return {
      showSettings: false,
      isInstalled: false,
      applicationBody: this.application,
      tabListNoTitle: [
        {
          key: 'description',
          tab: 'Descrição'
        },
        {
          key: 'config',
          tab: 'Configuração'
        },
        {
          key: 'appr',
          tab: 'Aplicativos relacionados'
        }
      ],
      noTitleKey: 'config'
    }
  },
  props: {
    ecomApps: {
      type: Object,
      default: () => new EcomApps()
    },
    application: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    handleTabChange (key, type) {
      this[type] = key
    },
    fetchMarketApplication () {
      this.ecomApps.findApp(this.appId).then(app => {
        // remove null
        for (const key in app) {
          if (app[key] === null || app[key] === '') {
            delete app[key]
          }
        }
        this.localApplication = {
          ...this.applicationBody,
          ...app
        }
      })
    },
    fetchStoreApplication (applicationId) {
      this.ecomApps.findStoreApplication(applicationId).then(({ data }) => {
        this.localApplication = {
          ...this.applicationBody,
          ...data
        }
        this.isInstalled = true
      })
    },
    installApp () {
      this.$message.loading('Instalando aplicativo ' + this.title, 1)
      this.ecomApps.installApp(this.appId, true)
        .then(installed => {
          this.$message.success(this.title + ' instalado', 2)
          this.fetchStoreApplication(installed._id)
        })
        .catch(e => {
          this.$message.error('Não foi possível instalar o aplicativo', 3)
        })
    },
    deleteApp () {
      this.ecomApps.removeApplication(this.localApplication._id).then(() => {
        this.isInstalled = false
      })
    },
    toggleSettings () {
      this.showSettings = (!this.showSettings)
    }
  },
  computed: {
    appId () {
      return this.applicationBody.app_id
    },
    icon () {
      return this.applicationBody.icon
    },
    title () {
      return this.applicationBody.title
    },
    category () {
      return this.applicationBody.category
    },
    author () {
      if (this.applicationBody.partner) {
        return this.applicationBody.partner.name
      } else {
        return 'Sem autor'
      }
    },
    shortDescription () {
      return this.applicationBody.short_description
    },
    description () {
      return this.applicationBody.description
    },
    i19version () {
      return i18n(i19version)
    },
    i19install () {
      return i18n(i19install)
    },
    version () {
      return this.applicationBody.version
    },
    price () {
      if (!this.applicationBody.paid) {
        return 'Grátis'
      } else {
        return 'Pago'
      }
    },
    localApplication: {
      get () {
        return this.applicationBody
      },
      set (data) {
        this.applicationBody = data
        this.$emit('update:application', data)
      }
    },
    website () {
      return this.localApplication.github_repository
    }
  },
  created () {
    const { applicationBody } = this
    if (applicationBody.app_id && !applicationBody.partner) {
      this.fetchMarketApplication()
    }
    if (applicationBody._id && !applicationBody.admin_settings) {
      this.fetchStoreApplication(applicationBody._id)
    }
  }
}
