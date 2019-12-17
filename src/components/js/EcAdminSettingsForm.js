import { i18n } from '@ecomplus/utils'
import getSchemaInput from './../../lib/get-schema-input'

import {
  // i19general,
  i19save
} from '@ecomplus/i18n'

export default {
  name: 'EcAdminSettingsForm',

  props: {
    application: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      data: {},
      hiddenData: {}
    }
  },

  computed: {
    i19general: () => 'Geral',
    i19save: () => i18n(i19save),

    adminSettings () {
      return this.application.admin_settings
    },

    settingsFieldGroups () {
      const baseFieldGroup = {
        header: this.i19general,
        fields: []
      }
      const fieldGroups = [baseFieldGroup]
      for (const field in this.adminSettings) {
        if (this.adminSettings[field]) {
          const { schema, hide } = this.adminSettings[field]
          const fieldObj = { schema, hide, field }
          if (this.checkComplexSchema(schema)) {
            fieldGroups.push({
              header: schema.title,
              description: schema.description,
              fields: [fieldObj]
            })
          } else {
            baseFieldGroup.fields.push(fieldObj)
          }
        }
      }
      return fieldGroups
    }
  },

  methods: {
    checkComplexSchema (schema) {
      return schema.type === 'object' || schema.type === 'array'
    },

    getDescriptionHtml (description) {
      return description.replace(
        /(http(s)?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" rel="noopener">$1</a>'
      )
    },

    parseAdminSettingsField ({ field, schema, hide, data, parent = '' }) {
      if (!data) {
        data = hide ? this.hiddenData : this.data
      }
      let fieldObjects = []
      const { localSchema, component } = getSchemaInput(field, schema)
      if (component) {
        fieldObjects.push({
          field,
          schema,
          data,
          name: `${parent}.${field}`,
          component
        })
      }
      if (localSchema.type === 'object') {
        if (!data[field]) {
          data[field] = {}
        }
        const { properties } = localSchema
        for (const nestedField in properties) {
          const childSchema = properties[nestedField]
          if (childSchema) {
            fieldObjects = fieldObjects.concat(
              this.parseAdminSettingsField({
                field: nestedField,
                schema: childSchema,
                data: data[field],
                parent: `${parent}.${nestedField}`
              })
            )
          }
        }
      }
      return fieldObjects
    },

    handleSubmit () {
      const formData = {
        data: this.data,
        hidden_data: this.hiddenData
      }
      this.$emit('submit', formData)
      this.$emit('update:application', {
        ...this.application,
        ...formData
      })
    }
  },

  watch: {
    application: {
      handler () {
        const { data, hiddenData, application } = this
        this.data = Object.assign({}, data, application.data)
        this.hiddenData = Object.assign({}, hiddenData, application.hidden_data)
      },
      immediate: true,
      deep: true
    }
  }
}
