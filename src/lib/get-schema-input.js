import cloneDeep from 'lodash.clonedeep'

import InputEnum from '../components/_inputs/InputEnum.vue'
import InputText from '../components/_inputs/InputText.vue'
import InputNumber from '../components/_inputs/InputNumber.vue'
import InputBoolean from '../components/_inputs/InputBoolean.vue'
import InputList from '../components/_inputs/InputList.vue'

import matchGroupDiscount from './_custom-input-matchers/discount'
import matchInputMoney from './_custom-input-matchers/money'
import matchInputDateTime from './_custom-input-matchers/date-time'
import matchInputZipCode from './_custom-input-matchers/zip-code'

const getInputMatchersByType = type => {
  switch (type) {
    case 'object':
      return [
        matchGroupDiscount
      ]
    case 'string':
      return [
        matchInputDateTime,
        matchInputZipCode,
        (_, schema) => schema.enum && InputEnum,
        () => InputText
      ]
    case 'integer':
    case 'number':
      return [
        matchInputMoney,
        matchInputZipCode,
        () => InputNumber
      ]
    case 'boolean':
      return [
        () => InputBoolean
      ]
    case 'array':
      return [
        () => InputList
      ]
    default:
      return []
  }
}

export default (field, schema) => {
  const { type } = schema
  const localSchema = (type === 'object' || type === 'array') ? cloneDeep(schema) : schema
  for (const match of getInputMatchersByType(type)) {
    const component = match(field.toString(), localSchema)
    if (component) {
      return { localSchema, component }
    }
  }
  return { localSchema }
}
