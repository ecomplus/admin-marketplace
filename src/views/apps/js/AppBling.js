import axios from 'axios'
import { $ecomConfig } from '@ecomplus/utils'
import Application from '../../Application.vue'

export default {
  name: 'AppBling',

  data () {
    return {
      syncType: 'ecomProducts',
      syncValues: ''
    }
  },

  components: {
    Application
  },

  methods: {
    handler () {
      let url = 'https://bling.ecomplus.biz'
      let type = ''
      const { syncType, syncValues } = this

      switch (syncType) {
        case 'ecomProducts':
          url += '/ecomplus/products'
          type = 'produto'
          break
        case 'ecomOrders':
          url += '/ecomplus/orders'
          type = 'produto'
          break
        case 'blingProducts':
          url += '/bling/products'
          type = 'pedido'
          break
        default: break
      }

      if (syncValues === '' || syncValues === null) {
        this.$message.error(`É preciso informar algum ${type} para sincronizar, ou vário(a)s ${type} separados por vírgula.`, 4)
      } else {
        let data = syncValues.split(',')
        data = data.map(el => el.replace(/ /g, ''))
        axios({
          url,
          method: 'post',
          headers: {
            'X-Store-Id': $ecomConfig.get('store_id')
          },
          data
        })
          .then(() => {
            this.$message.success(`${type} foram enviados e serão sincronizados.`, 4)
            this.syncValues = null
          })
          .catch(e => {
            this.$message.error('Não foi possível realizar a sincronização. Tente novamente mais tarde ou informe o suporte.', 4)
          })
      }
    }
  }
}
