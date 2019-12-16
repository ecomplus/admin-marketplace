import InputZipCode from './../../components/_inputs/InputZipCode.vue'

export default (field, localSchema) => {
  return field.includes('zip') &&
    localSchema.pattern === '^[0-9]{5}-?[0-9]{3}$' &&
    InputZipCode
}
