import axios from 'axios'

const baseURL = 'http://us-central1-ecom-mercado-livre.cloudfunctions.net/app'
const service = axios.create({
  baseURL,
  timeout: 60000,
  headers: {
    'x-store-id': localStorage.getItem('store_id') || 1056
  }
})

const findCategory = (term) => {
  term = term
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
  return service.get(`/mercado-livre/suggest-category?term=${term}`)
}

const createProduct = (data) => {
  return service.post('/mercado-livre/product', data)
}

const getProducts = (data) => {
  return service.get('/mercado-livre/product')
}

export {
  findCategory,
  createProduct,
  getProducts
}
