import VueMarkdown from 'vue-markdown'
import EcomApps from '@ecomplus/apps-manager'
import EcAppCard from './../EcAppCard.vue'
import EcAdminSettingsForm from './../EcAdminSettingsForm.vue'
import { i18n } from '@ecomplus/utils'

import {
  i19install,
  i19version,
  i19description,
  i19errorMsg,
  i19relatedApps,
  i19configuration,
  i19free,
  i19author,
  i19uninstall,
  i19yes,
  i19no,
  i19areYouWantToDeleteAppMsg,
  i19back,
  i19unavailable,
  i19paid,
  i19installed,
  i19unableToInstallApp,
  i19installingApp,
  i19tryAgain,
  i19loadDataErrorMsg,
  i19saved
} from '@ecomplus/i18n'

export default {
  name: 'EcApplication',

  components: {
    VueMarkdown,
    EcAppCard,
    EcAdminSettingsForm
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

  data () {
    return {
      isLoaded: false,
      loadError: false,
      applicationBody: this.application,
      appsRelated: [],
      tabListNoTitle: [
        {
          key: 'description'
        },
        {
          key: 'configuration'
        },
        {
          key: 'relatedApps'
        }
      ],
      activeTabKey: 'description'
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
      return this.applicationBody.author_name
    },

    shortDescription () {
      return this.applicationBody.short_description
    },

    description () {
      return this.applicationBody.description ||
        `# ${this.title}\nApp ID: \`${this.appId}\``
    },

    version () {
      return this.applicationBody.version
    },

    website () {
      return this.applicationBody.website
    },

    price () {
      if (this.applicationBody) {
        if (!this.applicationBody.paid) {
          return i18n(i19free)
        } else {
          return i18n(i19paid)
        }
      } else {
        return i18n(i19unavailable)
      }
    },

    i19description () {
      return i18n(i19description)
    },

    i19errorMsg () {
      return i18n(i19errorMsg)
    },

    i19tryAgain () {
      return i18n(i19tryAgain)
    },

    i19configuration () {
      return i18n(i19configuration)
    },

    i19relatedApps () {
      return i18n(i19relatedApps)
    },

    i19unableToInstallAppMsg () {
      return i18n(i19unableToInstallApp)
    },

    i19unableToUninstallAppMsg () {
      return 'Não foi possível desinstalar o aplicativo'
    },

    i19noAppsAvailable () {
      return 'Não há aplicativos disponíveis'
    },

    i19author () {
      return i18n(i19author)
    },

    i19version () {
      return i18n(i19version)
    },

    i19install () {
      return i18n(i19install)
    },

    i19uninstall () {
      return i18n(i19uninstall)
    },

    i19uninstallingApp () {
      return 'Desinstalando aplicativo'
    },

    i19uninstallingAppWithSuccessMsg () {
      return 'Desinstalando aplicativo com sucesso'
    },

    i19yes () {
      return i18n(i19yes)
    },

    i19no () {
      return i18n(i19no)
    },

    i19back () {
      return i18n(i19back)
    },

    i19areYouWantToDeleteAppMsg () {
      return i18n(i19areYouWantToDeleteAppMsg)
    },

    i19installingApp () {
      return i18n(i19installingApp)
    },

    i19loadDataErrorMsg () {
      return i18n(i19loadDataErrorMsg)
    },

    i19installed () {
      return i18n(i19installed)
    },

    i19appAlreadyInstalledMsg () {
      return 'Aplicativo já instalado, deseja continuar?'
    },

    i19saved () {
      return i18n(i19saved)
    },

    isInstalled () {
      return (this.applicationBody._id)
    },

    localApplication: {
      get () {
        return this.applicationBody
      },
      set (data) {
        this.applicationBody = Object.assign({}, this.applicationBody, data)
        this.isLoaded = true
        this.$emit('update:application', data)
      }
    }
  },

  methods: {
    editApp (obj) {
      this.ecomApps.editApplication(this.applicationBody._id, obj)
        .then(() => {
          this.$message.success(this.title + ' ' + this.i19saved, 2)
          this.localApplication = Object.assign({}, this.applicationBody, obj)
        })
        .catch(e => {
          this.$message.error(this.i19errorMsg, 3)
        })
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
      })
    },

    findRelateds () {
      this.ecomApps.fetchMarketApps({ params: { category: this.category } })
        .then(resp => {
          const { result } = resp
          const filter = result.filter(app => app.app_id !== this.appId)
          this.appsRelated = filter || []
        })
        .catch(e => {
          console.log(e)
          this.$message.error(this.i19loadDataErrorMsg, 3)
        })
    },

    requestInstall () {
      this.ecomApps.installApp(this.appId, true)
        .then(installed => {
          this.$message.success(this.title + ' ' + this.i19installed, 2)
          this.fetchStoreApplication(installed.result._id)
          this.$emit('click:install', installed.result, installed.app)
        })
        .catch(e => {
          console.log(e)
          this.$message.error(this.i19unableToInstallAppMsg, 3)
        })
    },

    installApp () {
      this.ecomApps.fetchStoreApplications({ params: { app_id: this.appId } })
        .then(resp => {
          if (Array.isArray(resp) && resp.length) {
            this.$confirm({
              title: this.i19appAlreadyInstalledMsg,
              onOk: this.requestInstall
            })
          } else {
            this.requestInstall()
          }
        })
    },

    uninstallApp () {
      this.ecomApps.removeApplication(this.localApplication._id)
      this.$message.loading(this.i19uninstallingApp + ' ' + this.title, 1)
        .then(result => {
          this.$message.success(this.i19uninstallingAppWithSuccessMsg, 2)
          this.$emit('click:uninstall')
          console.log(result)
        })
        .catch(e => {
          this.$message.error(this.i19unableToUninstallAppMsg, 3)
          console.log(e)
        })
    },

    handleTabChange (key, type) {
      this[type] = key
    },

    updateTabContent () {
      const { applicationBody } = this
      if (applicationBody.app_id && !applicationBody.author_id) {
        this.fetchMarketApplication()
      }
      if (applicationBody._id && !applicationBody.admin_settings) {
        this.fetchStoreApplication(applicationBody._id)
      }
    }
  },

  watch: {
    activeTabKey: {
      handler () {
        if (this.activeTabKey === 'relatedApps') {
          this.findRelateds()
        } else {
          this.updateTabContent()
        }
      },
      immediate: true
    }
  },

  created () {
    this.tabListNoTitle.forEach((tab, index) => {
      this.tabListNoTitle[index].tab = this[`i19${tab.key}`]
    })
  }
}
