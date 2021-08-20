import { $ecomConfig } from '@ecomplus/utils'
import ecomApps from '@ecomplus/apps-manager'
import EcAdminSettingsForm from './../../../components/EcAdminSettingsForm.vue'
import WindowMessage from '../../../lib/WindowMessage'
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
      currentUrl: location.toString() || 'homolog-admin.confere.shop',
      showModalError: false,
      ipModal: false,
      isSaving: false,
      application: {
        admin_settings: {}
      }
    }
  },

  computed: {
    message () {
      return WindowMessage.message
    }
  },

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
  },

  mounted () {
    this.$root.$on('openIPModal', () => {
      this.ipModal = true
    })
  },

  watch: {
    message: {
      handler (newMessage) {
        if (
          newMessage.origin !== 'http://localhost:3000' &&
          newMessage.origin !== 'https://checkout.confere.shop' &&
          newMessage.origin !== 'https://checkout.confere.com.br'
        ) return
        this.ipModal = false
      },
      deep: true
    }
  }
}
