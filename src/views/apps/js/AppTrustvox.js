import Application from '../../Application.vue'
import { $ecomConfig } from '@ecomplus/utils'
export default {
  name: 'AppTrustvox',

  components: {
    Application
  },

  methods: {
    handlerClick () {
      const authUrl = `https://trustvox.ecomplus.biz/trustvox/auth-callback?x_store_id=${$ecomConfig.get('store_id')}`
      window.open(authUrl, "_blank")
    } 
  }
}
