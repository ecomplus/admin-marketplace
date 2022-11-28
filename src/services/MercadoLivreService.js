import axios from 'axios'

const baseURL = 'https://api.mercadolibre.com'

const service = axios.create({
  baseURL,
  timeout: 60000

})

const getListingTypes = (categoryId) => {
  return service.get(`/categories/${categoryId}/listing_types`)
}

const findProducts = (ids = [], attributes = []) => {
  ids = ids.join(',')
  attributes = attributes.join(',')
  return service.get(`/items/?ids=${ids}&attributes=${attributes}`)
}

const findCategory = (term) => {
  term = term
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
  return service.get(`/sites/MLB/domain_discovery/search?limit=8&q=${term}`)
}

export {
  getListingTypes,
  findProducts,
  findCategory
}
