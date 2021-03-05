import InputProduct from './../../components/_inputs/InputProduct.vue'
export default (field) => {
  const fields = ['product', 'product_id', 'id_product', 'product_ids']
  if (fields.includes(field)) {
    return InputProduct
  }
}
