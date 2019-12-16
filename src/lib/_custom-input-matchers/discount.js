import InputDiscount from './../../components/_inputs/InputDiscount.vue'

export default (field, localSchema) => {
  if (field.includes('discount')) {
    const { properties } = localSchema
    if (properties && properties.value && properties.type && properties.apply_at) {
      delete properties.value
      delete properties.type
      delete properties.apply_at
      return InputDiscount
    }
  }
  return false
}
