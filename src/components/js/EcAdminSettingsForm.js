import { i18n } from '@ecomplus/utils'
import Papa from 'papaparse'
import * as dot from 'dot-object'
import getSchemaInput from './../../lib/get-schema-input'
import sanitize from './../../lib/sanitize'
import { BCollapse } from 'bootstrap-vue'

import {
  i19add,
  i19delete,
  i19deleteAll,
  i19edit,
  i19empty,
  i19editing,
  i19error,
  i19general,
  i19save,
  i19upload
} from '@ecomplus/i18n'

export default {
  name: 'EcAdminSettingsForm',

  props: {
    application: {
      type: Object,
      default () {
        return {}
      }
    },
    isSaving: Boolean,
    openCollapse: {
      type: Number,
      default: 0
    },
    skippedApps: {
      type: Array,
      default () {
        return window.ecomMarketSkippedApps
      }
    }
  },

  data () {
    return {
      data: {},
      hiddenData: {},
      dataListsIndexes: {},
      formResetKey: 0
    }
  },

  components: {
    BCollapse
  },

  computed: {
    i19add: () => i18n(i19add),
    i19delete: () => i18n(i19delete),
    i19deleteAll: () => i18n(i19deleteAll),
    i19download: () => 'Download',
    i19edit: () => i18n(i19edit),
    i19editing: () => i18n(i19editing),
    i19empty: () => i18n(i19empty),
    i19general: () => i18n(i19general),
    i19save: () => i18n(i19save),
    i19upload: () => i18n(i19upload),

    adminSettings () {
      return this.application.admin_settings
    },

    isSkippedApp () {
      return this.skippedApps.includes(this.application.app_id)
    },

    settingsFieldGroups () {
      const baseFieldGroup = {
        header: this.i19general,
        fields: []
      }
      const fieldGroups = []
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
      if (baseFieldGroup.fields.length) {
        fieldGroups.unshift(baseFieldGroup)
      }
      return fieldGroups
    }
  },

  methods: {
    checkComplexSchema (schema) {
      return schema.type === 'object' || schema.type === 'array'
    },

    checkNestedObjectsArray (schema) {
      return schema.type === 'array' && schema.items && schema.items.type === 'object'
    },

    getDescriptionHtml (description) {
      return description.replace(
        /(http(s)?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" rel="noopener">$1</a>'
      )
    },

    getObjectValues (obj) {
      let str = ''
      for (const prop in obj) {
        if (obj[prop]) {
          switch (typeof obj[prop]) {
            case 'number':
            case 'string':
              str += `${obj[prop].toString()} / `
          }
        }
      }
      return str.length > 3 ? str : `${this.i19empty} ...`
    },

    parseAdminSettingsField ({ field, schema, hide, data, parentFields = '' }) {
      if (!data) {
        data = hide ? this.hiddenData : this.data
      }
      let fieldObjects = []
      let refSchema
      if (this.checkNestedObjectsArray(schema)) {
        if (!data[field] || !data[field].length) {
          this.$set(data, field, [{}])
        }
        if (parentFields === '' && this.dataListsIndexes[field] === undefined) {
          this.$set(this.dataListsIndexes, field, 0)
        }
        data = data[field]
        refSchema = schema.items
        field = this.dataListsIndexes[field] || 0
      } else {
        refSchema = schema
      }
      const { localSchema, component } = getSchemaInput(field, refSchema)
      parentFields = `${parentFields}.${field}`
      if (component) {
        fieldObjects.push({
          field,
          schema,
          data,
          name: parentFields,
          component
        })
      }
      if (localSchema.type === 'object') {
        if (!data[field]) {
          this.$set(data, field, {})
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
                parentFields: `${parentFields}.${nestedField}`
              })
            )
          }
        }
      }
      return fieldObjects
    },

    removeDataListElement (dataList, index, field) {
      dataList.splice(index, 1)
      if (!dataList.length) {
        this.$set(dataList, 0, {})
        this.formResetKey++
      }
      this.dataListsIndexes[field] = index > 0 ? index - 1 : 0
    },

    uploadCsv(dataList, file) {
      Papa.parse(file, {
        header: true,
        error: (err, file, inputElem, reason) => {
          console.log(err);
          this.$bvToast.toast(reason, {
            variant: 'warning',
            title: i18n(i19error),
          });
        },
        complete: ({ data }) => {
          data.forEach(row => {
            const parsedData = {};
            for (const head in row) {
              if (row[head]) {
                const field = head.replace(/\w+\(([^)]+)\)/i, '$1');
                const value = head.startsWith('Number')
                  ? Number(row[head])
                  : head.startsWith('Boolean')
                    ? Boolean(row[head] && !row[head].toUpperCase().startsWith('FALS'))
                    : row[head];
                const fields = field.split(/[.[\]]/);
                if (fields.length > 1) {
                  let currentField = parsedData;
                  for (let i = 0; i < fields.length - 1; i++) {
                    const currentFieldName = fields[i];
                    if (!currentField[currentFieldName]) {
                      // Check if the next part of the field is a numeric index
                      const isArrayIndex = /^\d+$/.test(fields[i + 1]);
                      if (isArrayIndex) {
                        currentField[currentFieldName] = [];
                      } else {
                        currentField[currentFieldName] = {};
                      }
                    }
                    currentField = currentField[currentFieldName];
                  }
                  const lastFieldName = fields[fields.length - 1];
                  if (/^\d+$/.test(lastFieldName)) {
                    // It's a numeric index, insert into array
                    currentField.push(value);
                  } else {
                    currentField[lastFieldName] = value;
                  }
                } else {
                  parsedData[field] = value;
                }
              }
            }
            if (Object.keys(parsedData).length) {
              dataList.push(parsedData);
            }
          });
        },
      });
      return false;
    },

    downloadCsv (dataList) {
      const parseDocToRow = doc => {
        const row = dot.dot(doc)
        for (const field in row) {
          if (row[field] !== undefined) {
            const type = typeof row[field]
            if (type !== 'object') {
              // save var type on row header
              row[`${type.charAt(0).toUpperCase()}${type.slice(1)}(${field})`] = row[field]
            }
            delete row[field]
          }
        }
        return row
      }

      // download CSV table with parsed data
      const downloadCsv = () => {
        const columns = []
        const exportData = []
        dataList.forEach(item => exportData.push(parseDocToRow(item)))
        exportData.forEach(row => {
          Object.keys(row).forEach(field => {
            if (!/_records/.test(field) && columns.indexOf(field) === -1) {
              columns.push(field)
            }
          })
        })
        const csv = Papa.unparse(exportData, { columns })
        const csvData = new window.Blob([csv], {
          type: 'text/csv;charset=utf-8;'
        })
        const csvURL = navigator.msSaveBlob
          ? navigator.msSaveBlob(csvData, 'download.csv')
          : window.URL.createObjectURL(csvData)
        const $link = document.createElement('a')
        $link.href = csvURL
        $link.setAttribute('download', 'list.csv')
        $link.click()
      }

      downloadCsv()
    },

    handleSubmit () {
      if (this.isSkippedApp) {
        return window.alert('This app should not be installed')
      }
      const formData = {
        data: sanitize(this.data),
        hidden_data: sanitize(this.hiddenData)
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
