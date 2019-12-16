import cloneDeep from 'lodash.clonedeep'

import InputEnum from './../components/_inputs/InputEnum.vue'
import InputText from './../components/_inputs/InputText.vue'
import InputNumber from './../components/_inputs/InputNumber.vue'
import InputBoolean from './../components/_inputs/InputBoolean.vue'

import matchGroupDiscount from './_custom-input-matchers/discount'
import matchInputMoney from './_custom-input-matchers/money'
import matchInputZipCode from './_custom-input-matchers/zip-code'

const getInputMatchersByType = type => {
  switch (type) {
    case 'object':
      return [
        matchGroupDiscount
      ]
    case 'string':
      return [
        matchInputZipCode,
        (_, schema) => schema.enum && InputEnum,
        () => InputText
      ]
    case 'integer':
    case 'number':
      return [
        matchInputMoney,
        () => InputNumber
      ]
    case 'boolean':
      return [
        () => InputBoolean
      ]
    default:
      return []
  }
}

export default (field, schema) => {
  const { type } = schema
  const localSchema = (type === 'object' || type === 'array') ? cloneDeep(schema) : schema
  for (const match of getInputMatchersByType(type)) {
    const component = match(field, localSchema)
    if (component) {
      return { localSchema, component }
    }
  }
  return { localSchema }
}
