import InputMoney from './../../components/_inputs/InputMoney.vue'

export default (field, localSchema) => {
  return (field.includes('amount') || field.includes('price')) &&
    InputMoney
}
