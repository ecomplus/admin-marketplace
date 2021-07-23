import { $ecomConfig } from '@ecomplus/utils'
import ecomApps from '@ecomplus/apps-manager'
import EcAdminSettingsForm from './../../../components/EcAdminSettingsForm.vue'
import Application from './../../Application.vue'
import axios from 'axios'

const appClient = axios.create({
  baseURL: 'https://api.confere.com.br/',
  headers: {
    'x-store-id': $ecomConfig.get('store_id'),
    'x-my-id': localStorage.getItem('my_id'),
    'x-access-token': localStorage.getItem('access_token')
  }
})

export default {
  name: 'AppConferePay',

  components: {
    EcAdminSettingsForm,
    Application
  },

  data () {
    return {
      showModalError: false,
      isSaving: false,
      application: {
        admin_settings: {}
      }
    }
  },

  computed: {},

  methods: {
    handleAppLoad (application) {
      this.application = application
    },

    integrateIp () {
      this.isSaving = true
      const editingData = this.application.data
      appClient({
        url: '/store/integrateIP',
        method: 'post',
        data: {
          id: this.application._id
        }
      })
        .then(({ data }) => {
          ecomApps.edit(this.application._id, { data: data })
            .then(() => {
              Object.assign(editingData, data)
              window.location.reload()
            })
        })
        .catch(() => {
          this.showModalError = true
        })
        .finally(() => {
          this.isSaving = false
        })
    }
  }
}
