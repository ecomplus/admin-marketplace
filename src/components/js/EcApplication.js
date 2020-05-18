import 'core-js/modules/es.promise.all-settled'
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
  // i19doYouWantToDeleteAppQn,
  // i19appAlreadyInstalledMsg,
  i19back,
  i19unavailable,
  i19paid,
  i19installed,
  i19unableToInstallApp,
  i19installingApp,
  i19unableToUninstallApp,
  i19tryAgain,
  i19loadDataErrorMsg,
  i19saved,
  i19noAppsAvailable,
  i19uninstallingApp,
  i19uninstallingAppWithSuccess
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

    randomColors () {
      return '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
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

    i19unableToUninstallApp () {
      return i18n(i19unableToUninstallApp)
    },

    i19noAppsAvailable () {
      return i18n(i19noAppsAvailable)
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
      return i18n(i19uninstallingApp)
    },

    i19uninstallingAppWithSuccess () {
      return i18n(i19uninstallingAppWithSuccess)
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

    i19doYouWantToDeleteAppQn () {
      return 'Tem certeza que deseja deletar o aplicativo?'
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
        this.$emit('update:application', data)
      }
    }
  },

  methods: {
    editApp (data) {
      this.ecomApps.editApplication(this.applicationBody._id, data)
        .then(() => {
          this.$message.success(this.title + ' ' + this.i19saved, 2)
          this.localApplication = {
            ...this.applicationBody,
            ...data
          }
        })
        .catch(e => {
          this.$message.error(this.i19errorMsg, 3)
        })
    },

    fetchMarketApplication () {
      return this.ecomApps.findApp(this.appId).then(app => {
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

    fetchStoreApplication () {
      const { ecomApps, applicationBody } = this
      const loadPromise = applicationBody._id
        ? ecomApps.findStoreApplication(applicationBody._id)
        : ecomApps.fetchStoreApplications({
          params: { app_id: this.appId }
        }).then(([app]) => {
          return app ? ecomApps.findStoreApplication(app._id) : {}
        })
      return loadPromise.then(({ data }) => {
        if (data) {
          this.localApplication = {
            ...this.applicationBody,
            ...data
          }
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
      this.ecomApps.removeApplication(this.applicationBody._id)
      this.$message.loading(this.i19uninstallingApp + ' ' + this.title, 1)
        .then(result => {
          this.$message.success(this.i19uninstallingAppWithSuccess, 2)
          this.$emit('click:uninstall')
        })
        .catch(e => {
          this.$message.error(this.i19unableToUninstallApp, 3)
          console.log(e)
        })
    },

    handleTabChange (key, type) {
      this[type] = key
    },

    hasConfigurationTab () {
      return this.tabListNoTitle[1].key === 'configuration'
    },

    addConfigurationTab () {
      if (!this.hasConfigurationTab()) {
        this.tabListNoTitle.splice(1, 0, { key: 'configuration', tab: this.i19configuration })
      }
    },

    removeConfigurationTab () {
      if (this.hasConfigurationTab()) {
        this.tabListNoTitle.splice(1, 1)
      }
    }
  },

  watch: {
    activeTabKey: {
      handler () {
        if (this.activeTabKey === 'relatedApps') {
          this.findRelateds()
        }
      },
      immediate: true
    },
    'applicationBody._id' (val) {
      if (val && this.applicationBody.admin_settings) {
        this.addConfigurationTab()
      } else {
        this.removeConfigurationTab()
      }
    }
  },

  created () {
    this.tabListNoTitle.forEach((tab, index) => {
      this.tabListNoTitle[index].tab = this[`i19${tab.key}`]
    })
    if (this.isInstalled) {
      this.addConfigurationTab()
    }
    const loadPromises = []
    const { applicationBody } = this
    if (applicationBody.app_id && !applicationBody.author_id) {
      loadPromises.push(this.fetchMarketApplication())
    }
    if (!applicationBody.admin_settings) {
      loadPromises.push(this.fetchStoreApplication())
    }
    Promise.allSettled(loadPromises).then(() => {
      this.isLoaded = true
    })
  }
}
