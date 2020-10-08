import InputZipCode from './../../components/_inputs/InputZipCode.vue'

export default (field, localSchema) => {
  if (field.includes('zip')){
    return InputZipCode
  }
  else if (field.includes('inicial') || field.includes('final')){
    return InputZipCode
  }
}
