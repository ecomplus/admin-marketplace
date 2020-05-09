import cloneDeep from 'lodash.clonedeep'

const isEmptyObject = obj => {
  return typeof obj === 'object' && obj &&
    (!Array.isArray(obj) ? Object.keys(obj).length < 1 : obj.length < 1)
}

const hasNextObject = obj => {
  return typeof obj === 'object' && obj && !Array.isArray(obj)
}

const sanitizeArray = items => {
  for (const item of items) {
    if (hasNextObject(item)) {
      for (const key of Object.keys(item)) {
        sanitize(item, key)
      }
    }
  }
}

const sanitize = (obj, prop) => {
  if (typeof obj === 'object' && obj !== null) {
    switch (obj[prop]) {
      case null:
      case '':
        delete obj[prop]
        break
      default:
        if (hasNextObject(obj[prop])) {
          for (const key of Object.keys(obj[prop])) {
            sanitize(obj[prop], key)
          }
        }
        if (Array.isArray(obj[prop])) {
          sanitizeArray(obj[prop])
          obj[prop] = obj[prop].filter(item => isEmptyObject(item) === false)
        }
        if (isEmptyObject(obj[prop])) {
          delete obj[prop]
        }
    }
  }
}

export default formData => {
  const newFormData = cloneDeep(formData)
  for (const key of Object.keys(newFormData)) {
    sanitize(newFormData, key)
  }
  return newFormData
}
