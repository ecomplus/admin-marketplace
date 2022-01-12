
import { BFormFile } from 'bootstrap-vue'
import Application from '../../Application.vue'
import axios from 'axios'
import { $ecomConfig, i18n } from '@ecomplus/utils'
import ecomApps from '@ecomplus/apps-manager'

import {
  i19save
} from '@ecomplus/i18n'

const appClient = axios.create({
  // baseURL: 'http://us-central1-ecom-feed-importer.cloudfunctions.net/app/ecom',
  baseURL: 'http://localhost:5001/ecom-feed-importer/us-central1/app/feed-importer',
  headers: {
    'X-Store-Id': $ecomConfig.get('store_id')
  }
})

export default {
  name: 'AppFeedImporter',
  data () {
    return {
      file: '',
      applicationBody: {}
    }
  },

  props: {
    ecomApps: {
      type: Object,
      default: () => ecomApps
    }
  },

  components: {
    BFormFile,
    Application
  },

  computed: {
    i19save: () => i18n(i19save)
  },
  created () {
    this.loadApplicationBody()
  },

  methods: {
    async loadApplicationBody () {
      const { ecomApps } = this
      this.loading = true
      let data = this.$route.params.objectId && await ecomApps.find(this.$route.params.objectId)
      if (!data) {
        const [app] = await ecomApps.list({
          params: { app_id: this.$route.params.appId }
        })
        if (app && app._id) {
          data = await ecomApps.find(app._id).data
        }
      }
      if (data) {
        Object.assign(this.applicationBody, data.data)
      }
    },

    async uploadFile () {
      const form = new FormData()
      form.append('file', this.file)
      const { hidden_data: hiddenData } = this.applicationBody
      if (!hiddenData || hiddenData.__token) {
        await this.loadApplicationBody()
      }
      await appClient.post(`/upload?token=${hiddenData.__token}&store_id=${$ecomConfig.get('store_id')}`, form)
    }
  }
}
