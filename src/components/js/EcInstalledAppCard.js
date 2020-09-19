import { i18n, formatDate } from '@ecomplus/utils'
import EcomApps from '@ecomplus/apps-manager'

import {
  i19active,
  i19activate,
  i19disable,
  i19edit,
  i19free,
  i19inactive,
  i19version,
  i19paid
} from '@ecomplus/i18n'

export default {
  name: 'EcInstalledAppCard',

  props: {
    ecomApps: {
      type: Object,
      default: () => new EcomApps()
    },

    app: {
      type: Object,
      default: {}
    }
  },

  data () {
    return {
      loading: false
    }
  },

  computed: {
    i19active () {
      return i18n(i19active)
    },

    i19activate () {
      return i18n(i19activate)
    },

    i19disable () {
      return i18n(i19disable)
    },

    i19edit () {
      return i18n(i19edit)
    },

    i19free () {
      return i18n(i19free)
    },

    i19inactive () {
      return i18n(i19inactive)
    },

    i19paid () {
      return i18n(i19paid)
    },

    i19version () {
      return i18n(i19version)
    },

    isActive () {
      return this.app.state === 'active'
    }
  },

  methods: {
    formatDate,

    toggleState () {
      const editAppBody = {
        state: this.isActive ? 'inactive' : 'active'
      }
      this.loading = true
      this.ecomApps.editApplication(this.app._id, editAppBody)
        .then(() => {
          this.$emit('update:app', {
            ...this.app,
            ...editAppBody
          })
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
