import axios from 'axios'

const baseURL = 'http://us-central1-ecom-mercado-livre.cloudfunctions.net/app'
const service = axios.create({
  baseURL,
  timeout: 60000,
  headers: {
    'x-store-id': localStorage.getItem('store_id') || 1056
  }
})

const getAuthUrl = () => {
  return `${baseURL}/mercado-livre/callback?store_id=${localStorage.getItem('store_id')}`
}

const findCategory = (term) => {
  term = term
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
  return service.get(`/mercado-livre/suggest-category?term=${term}`)
}

const getProducts = () => {
  return service.get('/mercado-livre/product')
}

export {
  getAuthUrl,
  findCategory,
  getProducts
}
