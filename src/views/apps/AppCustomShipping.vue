<template>
  <Application
    :is-settings-visible="isSettingsVisible"
    :settings-open-collapse="hasAdvancedConfig ? null : 0"
    @load="handleAppLoad"
  >
    <template #settings-prepend>
      <h4>{{ i19quickSetup }}</h4>
      <button
        v-for="({ label }, i) in shippingMethods"
        :key="`shipping-${i}`"
        type="button"
        class="btn btn-sm mr-2 mb-2"
        :class="editingMethodIndex === i
           ? 'btn-light'
           : editingMethodIndex < 0 ? 'btn-primary' : 'btn-outline-primary'"
        @click="editingMethodIndex = i"
      >
        {{ label }}
      </button>

      <ec-admin-settings-form
        v-if="editingMethod"
        :key="`ship-${Math.random()}`"
        class="mt-2"
        :application="ghostApplication"
        :is-saving="isSaving"
        @submit="editApp"
      >
        <template #submit-label>
          {{ i19save }}: {{ editingMethod.label }}
        </template>
      </ec-admin-settings-form>

      <a
        class="mt-4 mb-3 d-block h6 text-uppercase fw-500"
        href="#"
        @click.prevent="isSettingsVisible = !isSettingsVisible"
      >
        <i
          class="mr-1 text-primary opacity-60 fa"
          :class="isSettingsVisible ? 'fa-minus-circle' : 'fa-plus-circle'"
        >
        </i>
        {{ i19allOptions }}
      </a>
    </template>
  </Application>
</template>

<script src="./js/AppCustomShipping.js"></script>
