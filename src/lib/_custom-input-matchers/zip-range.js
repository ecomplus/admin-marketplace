import InputZipRange from './../../components/_inputs/InputZipRange.vue'

export default (field, localSchema) => {
  if (field.includes('zip')) {
    const { properties } = localSchema
    if (properties && properties.min && properties.max) {
      delete properties.min
      delete properties.max
      return InputZipRange
    }
  }
  return false
}
