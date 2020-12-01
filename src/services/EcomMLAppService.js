import { $ecomConfig } from '@ecomplus/utils'

const baseURL = 'https://us-central1-ecom-mercado-livre.cloudfunctions.net/app'

const getAuthUrl = () => {
  return `${baseURL}/mercado-livre/callback?store_id=${$ecomConfig.get('store_id')}`
}

export {
  getAuthUrl
}
