import axios from 'axios'

const baseURL = 'http://us-central1-ecom-mercado-livre.cloudfunctions.net/app'
const service = axios.create({
  baseURL,
  timeout: 60000,
  headers: {
    'x-store-id': 1056 // Todo: chage to correct store id
  }
})

const findCategory = (term) => {
  term = term
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
  return service.get(`/mercado-livre/suggest-category?term=${term}`)
}

const createAd = (data) => {
  return service.post('/mercado-livre/product', data)
}

export {
  findCategory,
  createAd
}
