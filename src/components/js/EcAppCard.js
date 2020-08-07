import { i18n } from '@ecomplus/utils'

import {
  i19free,
  i19paid
} from '@ecomplus/i18n'

export default {
  name: 'EcAppCard',

  props: {
    app: {
      type: Object,
      default: {}
    },

    descriptionMaxLength: {
      type: Number,
      default: 75
    }
  },

  computed: {
    i19free () {
      return i18n(i19free)
    },

    i19paid () {
      return i18n(i19paid)
    },

    downloadCount () {
      return this.app.downloads
    },

    iconUrl () {
      if (this.app.icon) {
        if (!this.app.icon.startsWith('https://')) {
          return `https://market.e-com.plus${this.app.icon}`
        }
        return this.app.icon
      }
      return ''
    },

    formattedDescription () {
      if (this.app.short_description) {
        const { descriptionMaxLength } = this
        if (this.app.short_description.length > descriptionMaxLength) {
          return `${this.app.short_description.slice(0, descriptionMaxLength)}...`
        }
        return this.app.short_description
      }
      return ''
    }
  }
}
