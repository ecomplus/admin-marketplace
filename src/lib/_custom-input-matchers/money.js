import InputMoney from './../../components/_inputs/InputMoney.vue'

export default (field, localSchema) => {
  let isValidField
  switch (field) {
    case 'amount':
    case 'price':
    case 'total_price':
    case 'cost':
      isValidField = true
      break
    default:
      if (
        (field.includes('amount') || field.includes('price') || field.includes('cost')) &&
        (localSchema.maximum === undefined || localSchema.maximum > 100)
      ) {
        isValidField = true
      }
  }
  return isValidField && InputMoney
}
