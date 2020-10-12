import 'core-js/modules/es.promise.all-settled'
import { BSkeleton, BPopover } from 'bootstrap-vue'
import { FadeTransition, SlideYUpTransition } from 'vue2-transitions'
import VueMarkdown from 'vue-markdown'
import EcomApps from '@ecomplus/apps-manager'
import EcAppCard from './../EcAppCard.vue'
import EcAdminSettingsForm from './../EcAdminSettingsForm.vue'
import { i18n } from '@ecomplus/utils'

import {
  i19app,
  // i19appAlreadyInstalledMsg,
  i19author,
  i19back,
  i19configuration,
  i19description,
  i19free,
  // i19doYouWantToDeleteAppQn,
  i19errorMsg,
  i19install,
  i19loadDataErrorMsg,
  i19no,
  i19noAppsAvailable,
  i19paid,
  i19relatedApps,
  i19savedWithSuccess,
  // i19successfullyInstalled,
  // i19successfullyUninstalled,
  i19tryAgain,
  i19unableToInstallApp,
  i19unableToUninstallApp,
  i19unavailable,
  i19uninstall,
  i19version,
  i19yes
} from '@ecomplus/i18n'

export default {
  name: 'EcApplication',

  components: {
    BSkeleton,
    BPopover,
    FadeTransition,
    SlideYUpTransition,
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
      isSaving: false,
      isSwitching: false,
      applicationBody: this.application,
      isfetchingRelated: false,
      appsRelated: [],
      tabListNoTitle: [{
        key: 'description'
      }, {
        key: 'relatedApps'
      }],
      activeTabKey: 'description',
      hasInstallPopover: false,
      hasUninstallPopover: false
    }
  },

  computed: {
    i19app: () => i18n(i19app),
    i19appAlreadyInstalledMsg: () => 'O aplicativo já está instalado, deseja duplicar?',
    i19author: () => i18n(i19author),
    i19back: () => i18n(i19back),
    i19configuration: () => i18n(i19configuration),
    i19description: () => i18n(i19description),
    i19doYouWantToDeleteAppQn: () => 'Tem certeza que deseja deletar o aplicativo?',
    i19errorMsg: () => i18n(i19errorMsg),
    i19install: () => i18n(i19install),
    i19loadDataErrorMsg: () => i18n(i19loadDataErrorMsg),
    i19no: () => i18n(i19no),
    i19noAppsAvailable: () => i18n(i19noAppsAvailable),
    i19relatedApps: () => i18n(i19relatedApps),
    i19savedWithSuccess: () => i18n(i19savedWithSuccess),
    i19successfullyInstalled: () => 'Instalado com sucesso',
    i19successfullyUninstalled: () => 'Desinstalado com sucesso',
    i19tryAgain: () => i18n(i19tryAgain),
    i19unableToInstallApp: () => i18n(i19unableToInstallApp),
    i19unableToUninstallApp: () => i18n(i19unableToUninstallApp),
    i19uninstall: () => i18n(i19uninstall),
    i19version: () => i18n(i19version),
    i19yes: () => i18n(i19yes),

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
    toast (variant, body) {
      const { title } = this
      this.$bvToast.toast(body, {
        variant,
        title
      })
    },

    successToast (msg) {
      this.toast('success', `${this.i19app} ${msg.toLowerCase()}!`)
    },

    editApp (data) {
      this.isSaving = true
      this.ecomApps.editApplication(this.applicationBody._id, data)
        .then(() => {
          this.successToast(this.i19savedWithSuccess)
          this.localApplication = {
            ...this.applicationBody,
            ...data
          }
        })
        .catch(e => {
          this.toast('danger', this.i19errorMsg)
        })
        .finally(() => {
          this.isSaving = false
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
      this.isfetchingRelated = true
      this.ecomApps.fetchMarketApps({ params: { category: this.category } })
        .then(resp => {
          const { result } = resp
          const filter = result.filter(app => app.app_id !== this.appId)
          this.appsRelated = filter || []
        })
        .catch(e => {
          console.log(e)
          this.toast('danger', this.i19loadDataErrorMsg)
        })
        .finally(() => {
          this.isfetchingRelated = false
        })
    },

    requestInstall () {
      this.isSwitching = true
      this.hasInstallPopover = false
      this.ecomApps.installApp(this.appId, true)
        .then(installed => {
          this.successToast(this.i19successfullyInstalled)
          this.fetchStoreApplication(installed.result._id)
          this.$emit('install', installed.result, installed.app)
        })
        .catch(e => {
          console.log(e)
          this.toast('danger', this.i19unableToInstallApp)
        })
        .finally(() => {
          this.isSwitching = false
        })
    },

    installApp () {
      this.isSwitching = true
      this.ecomApps.fetchStoreApplications({ params: { app_id: this.appId } })
        .then(resp => {
          if (Array.isArray(resp) && resp.length) {
            this.isSwitching = false
            this.hasInstallPopover = true
          } else {
            this.requestInstall()
          }
        })
        .catch(e => {
          console.log(e)
          this.isSwitching = false
        })
    },

    uninstallApp () {
      this.isSwitching = true
      this.ecomApps.removeApplication(this.applicationBody._id)
        .then(() => {
          this.successToast(this.i19successfullyUninstalled)
          this.$emit('uninstall')
        })
        .catch(e => {
          console.log(e)
          this.toast('danger', this.i19unableToUninstallApp)
        })
        .finally(() => {
          this.isSwitching = false
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
