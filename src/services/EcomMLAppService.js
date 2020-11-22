
const baseURL = 'http://us-central1-ecom-mercado-livre.cloudfunctions.net/app'

const getAuthUrl = () => {
  return `${baseURL}/mercado-livre/callback?store_id=${localStorage.getItem('store_id')}`
}

export {
  getAuthUrl
}
