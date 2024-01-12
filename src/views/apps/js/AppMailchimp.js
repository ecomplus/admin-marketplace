import axios from 'axios'
import { $ecomConfig, i18n } from '@ecomplus/utils'
import { BTable } from 'bootstrap-vue'
import Application from '../../Application.vue'

const appClient = axios.create({
  baseURL: 'https://us-central1-ecom-mailchimp.cloudfunctions.net/app',
  headers: {
    'X-Store-Id': $ecomConfig.get('store_id')
  }
})

export default {
  name: 'AppMailchimp',

  components: {
    BTable,
    Application
  },

  data () {
    return {
      lists: [],
      campaigns: [],
      showModalError: false,
      showModalCampaigns: false,
      showModalLists: false,
      showModalStores: false,
      stores: []
    }
  },

  computed: {
    localStores: {
      get () {
        return this.stores
      },
      set (stores) {
        this.stores = stores
      }
    },

    localLists: {
      get () {
        return this.lists
      },
      set (lists) {
        this.lists = lists
      }
    },

    localCampaigns: {
      get () {
        return this.campaigns
      },
      set (campaigns) {
        this.campaigns = campaigns
      }
    },

    i19ApiKeyAlert () {
      return i18n({
        en_us: 'API Key must be setted',
        pt_br: 'API Key precisa estar configurada'
      })
    },

    i19SearchCampaigns () {
      return i18n({
        en_us: 'Search my campaigns',
        pt_br: 'Buscar minhas campanhas'
      })
    },

    i19Campaigns () {
      return i18n({
        en_us: 'Campaigns',
        pt_br: 'Campanhas'
      })
    },

    i19SearchingCampaigns () {
      return i18n({
        en_us: 'Searching campaigns, wait a minute..',
        pt_br: 'Buscando campanhas, aguarde..'
      })
    },

    i19StoresDescription () {
      return i18n({
        en_us: 'Search your stores on Mailchimp or create a new one',
        pt_br: 'Busque suas lojas no Mailchimp ou crie uma nova'
      })
    },

    i19Stores () {
      return i18n({
        en_us: 'Stores',
        pt_br: 'Lojas'
      })
    },

    i19StoreFetch () {
      return i18n({
        en_us: 'Search my stores',
        pt_br: 'Buscar minhas lojas'
      })
    },

    i19StoreCreate () {
      return i18n({
        en_us: 'Create store',
        pt_br: 'Criar loja'
      })
    },

    i19Options () {
      return i18n({
        en_us: 'Options',
        pt_br: 'Opções'
      })
    },

    i19ListDescription () {
      return i18n({
        en_us: 'Search lists or create new',
        pt_br: 'Buscar listas ou criar nova'
      })
    },

    i19Lists () {
      return i18n({
        en_us: 'Lists',
        pt_br: 'Listas'
      })
    },

    i19ListsSearch () {
      return i18n({
        en_us: 'Search my lists',
        pt_br: 'Buscar minhas listas'
      })
    },

    i19ListsCreate () {
      return i18n({
        en_us: 'Create list',
        pt_br: 'Criar lista'
      })
    },

    i19StoreIdAlert () {
      return i18n({
        en_us: 'Store ID and List ID must be setted',
        pt_br: 'Store ID e List ID precisam estar configurada'
      })
    },

    i19SyncProducts () {
      return i18n({
        en_us: 'Sync Products',
        pt_br: 'Sincronizar Produtos'
      })
    },

    i19SyncProductsMessage () {
      return i18n({
        en_us: 'Synchronize all products with Mailchimp',
        pt_br: 'Sincronizar todos os produtos com o Mailchimp'
      })
    },

    i19SyncCustomers () {
      return i18n({
        en_us: 'Sync Customer',
        pt_br: 'Sincronizar Clientes'
      })
    },

    i19SyncCustomersMessage () {
      return i18n({
        en_us: 'Synchronize all customers with Mailchimp',
        pt_br: 'Sincronizar todos os clientes com o Mailchimp'
      })
    },

    i19MailchimpLimitErr () {
      return i18n({
        en_us: 'Your account does not allow this operation, check your current plan on Mailchimp and try again.',
        pt_br: 'Sua conta não permite essa operação, verifique seu plano atual no Mailchimp e tente novamente.'
      })
    }
  },

  methods: {
    newStore () {
      appClient({
        url: '/mailchimp/stores',
        method: 'post'
      })
        .then(this.fetchStores)
        .catch(e => {
          this.showModalError = true
        })
    },

    fetchStores () {
      appClient({
        url: '/mailchimp/stores',
        method: 'get'
      })
        .then(({ data }) => {
          this.localStores = data.results
          this.showModalStores = true
        })
    },

    fetchLists () {
      appClient({
        url: '/mailchimp/lists',
        method: 'get'
      })
        .then(({ data }) => {
          this.localLists = data.results
          this.showModalLists = true
        })
    },

    newList () {
      appClient({
        url: '/mailchimp/lists',
        method: 'post'
      })
        .then(this.fetchLists)
        .catch(e => {
          this.showModalError = true
        })
    },

    syncProducts () {
      appClient({
        url: '/mailchimp/products',
        method: 'post'
      })
        .then(() => {
          this.$bvToast.toast('Sincronizado com sucesso', {
            variant: 'success',
            title: 'Mailchimp'
          })
        })
        .catch(e => {
          console.log(e)
          this.$bvToast.toast(
            'Não foi possível realizar a sincronização. Tente novamente mais tarde ou informe o suporte.', {
              variant: 'danger',
              title: 'Mailchimp'
            }
          )
        })
    },

    syncCustomers () {
      appClient({
        url: '/mailchimp/customers',
        method: 'post'
      })
        .then(() => {
          this.$bvToast.toast('Sincronizado com sucesso', {
            variant: 'success',
            title: 'Mailchimp'
          })
        })
        .catch(e => {
          console.log(e)
          this.$bvToast.toast(
            'Não foi possível realizar a sincronização. Tente novamente mais tarde ou informe o suporte.', {
              variant: 'danger',
              title: 'Mailchimp'
            }
          )
        })
    },

    fetchCampaigns () {
      appClient({
        url: '/mailchimp/campaigns',
        method: 'get'
      })
        .then(({ data }) => {
          this.localCampaigns = data.results
          this.showModalCampaigns = true
        })
    },
  }
}
