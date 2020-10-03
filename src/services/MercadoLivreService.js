import axios from 'axios'

const baseURL = 'https://api.mercadolibre.com'

const service = axios.create({
  baseURL,
  timeout: 60000

})

const getListingTypes = (categoryId) => {
  return service.get(`/categories/${categoryId}/listing_types`)
}

export {
  getListingTypes
}
