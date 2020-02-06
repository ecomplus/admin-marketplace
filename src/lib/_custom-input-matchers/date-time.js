import InputDateTime from './../../components/_inputs/InputDateTime.vue'

export default (field, localSchema) => {
  return localSchema.format && localSchema.format.startsWith('date') && InputDateTime
}
