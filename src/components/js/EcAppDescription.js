import { i18n } from '@ecomplus/utils'
import { i19install, i19edit } from '@ecomplus/i18n'
import VueMarkdown from 'vue-markdown'
import EcomApps from '@ecomplus/apps-manager'

export default {
  name: 'EcAppDescription',
  components: {
    VueMarkdown
  },
  data () {
    return {
      parentInfo: this.$parent.$parent.$parent.$parent
    }
  },
  props: {
    applicationBody: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    description () {
      return this.description
    }
  }
}
