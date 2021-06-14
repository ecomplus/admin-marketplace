import {
  // i19allOptions,
  i19errorMsg,
  // i19motorcycleCourier,
  // i19ownDelivery,
  // i19pickUpAtTheStore,
  // i19quickSetup
  i19save,
  i19savedWithSuccess
} from '@ecomplus/i18n'

import { i18n } from '@ecomplus/utils'
import ecomApps from '@ecomplus/apps-manager'
import * as cloneDeep from 'lodash.clonedeep'
import EcAdminSettingsForm from './../../../components/EcAdminSettingsForm.vue'
import Application from './../../Application.vue'

const i19motorcycleCourier = 'Motoboy'
const i19ownDelivery = 'Entrega própria'
const i19pickUpAtTheStore = 'Retirar na loja'

export default {
  name: 'AppCustomShipping',

  components: {
    EcAdminSettingsForm,
    Application
  },

  data () {
    return {
      isFirstAppLoad: true,
      isSaving: false,
      isSettingsVisible: false,
      hasAdvancedConfig: false,
      editingMethodIndex: -1,
      shippingRuleIndex: -1,
      application: {
        admin_settings: {
          shipping_rules: null
        }
      }
    }
  },

  computed: {
    i19allOptions: () => 'Todas as opções',
    i19quickSetup: () => 'Configuração rápida',
    i19save: () => i18n(i19save),

    shippingMethods () {
      return [{
        service_code: 'PROPRIA',
        label: i19ownDelivery
      }, {
        service_code: 'MOTO',
        label: i19motorcycleCourier
      }, {
        service_code: 'PICKUP',
        label: i19pickUpAtTheStore,
        disable_free_shipping_from: true,
        total_price: 0,
        pick_up: 'store'
      }]
    },

    editingMethod () {
      const editingMethod = this.shippingMethods[this.editingMethodIndex]
      if (editingMethod) {
        let hiddenData = this.application.hidden_data
        if (!hiddenData) {
          hiddenData = this.application.hidden_data = {
            shipping_rules: []
          }
        } else if (!Array.isArray(hiddenData.shipping_rules)) {
          hiddenData.shipping_rules = []
        } else {
          this.shippingRuleIndex = hiddenData.shipping_rules.findIndex(shippingRule => {
            return shippingRule.service_code === editingMethod.service_code
          })
          if (this.shippingRuleIndex >= 0) {
            Object.assign(editingMethod, hiddenData.shipping_rules[this.shippingRuleIndex])
          }
        }
      }
      return editingMethod
    },

    ghostApplication () {
      const adminSettings = this.application.admin_settings
      if (adminSettings && adminSettings.shipping_rules) {
        const ruleSchema = cloneDeep(adminSettings.shipping_rules.schema.items)
        const schemaProperties = Object.assign({
          from: {
            type: 'object',
            properties: {
              zip: adminSettings.zip && adminSettings.zip.schema
            }
          }
        }, ruleSchema.properties)
        delete schemaProperties.service_code
        delete schemaProperties.excedent_weight_cost
        delete schemaProperties.amount_tax
        delete schemaProperties.disable_free_shipping_from
        if (this.editingMethod) {
          const serviceCode = this.editingMethod.service_code
          if (serviceCode !== 'MOTO') {
            const instructionsSchema = {
              type: 'string',
              maxLength: 1000
            }
            if (serviceCode === 'PICKUP') {
              instructionsSchema.title = 'Instruções para retirada'
              instructionsSchema.description = 'Endereço completo e horário de funcionamento da loja ' +
                'ou ponto de retirada'
              delete schemaProperties.max_cubic_weight
              delete schemaProperties.min_amount
              delete schemaProperties.total_price
              if (schemaProperties.delivery_time) {
                Object.assign(schemaProperties.delivery_time.properties.days, {
                  description: 'Prazo em dias para separação do pedido no ponto de retirada',
                  default: 0
                })
              }
            } else {
              instructionsSchema.title = 'Instruções para entrega'
              schemaProperties.label = adminSettings.services &&
                adminSettings.services.schema.items.properties.label
            }
            schemaProperties.delivery_instructions = instructionsSchema
          }
        }
        return {
          hidden_data: {
            shipping_rule: this.editingMethod
          },
          admin_settings: {
            shipping_rule: {
              schema: {
                ...ruleSchema,
                properties: schemaProperties
              },
              hide: true
            }
          }
        }
      }
      return {}
    }
  },

  methods: {
    handleAppLoad (application) {
      this.application = application
      const hiddenData = application.hidden_data
      if (hiddenData) {
        if (
          hiddenData.zip ||
          (Array.isArray(hiddenData.shipping_rules) && hiddenData.shipping_rules.length > 9) ||
          (Array.isArray(hiddenData.services) && hiddenData.services.length)
        ) {
          this.hasAdvancedConfig = true
          if (this.isFirstAppLoad) {
            this.isSettingsVisible = true
          }
        }
        this.isFirstAppLoad = false
      } else if (this.application.admin_settings) {
        this.isFirstAppLoad = false
      }
    },

    editApp (data) {
      this.isSaving = true
      const shippingRules = this.application.hidden_data.shipping_rules
      if (this.shippingRuleIndex < 0) {
        shippingRules.push(data.hidden_data.shipping_rule)
      } else {
        shippingRules[this.shippingRuleIndex] = data.hidden_data.shipping_rule
      }
      const toast = (variant, body) => this.$bvToast.toast(body, {
        variant,
        title: this.application.title
      })
      ecomApps.edit(this.application._id, {
        hidden_data: {
          shipping_rules: shippingRules
        }
      })
        .then(() => {
          toast('success', `${this.editingMethod.label} ${i18n(i19savedWithSuccess).toLowerCase()}!`)
        })
        .catch(e => {
          toast('danger', i18n(i19errorMsg))
        })
        .finally(() => {
          this.isSaving = false
        })
    }
  },

  watch: {
    isSettingsVisible (isVisible) {
      if (isVisible) {
        this.editingMethodIndex = -1
      }
    },

    editingMethodIndex (i) {
      if (i >= 0) {
        this.$nextTick(() => {
          this.isSettingsVisible = false
        })
      }
    }
  }
}
