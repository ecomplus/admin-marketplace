<template>
  <div>
    <div class="input-group">
      <input-enum
        name="type"
        :schema="type"
        :value="value.type"
        @input="val => update('type', val)"
        :i18n-values="typeOptions"
      />

      <template v-if="value.type === 'percentage'">
        <input
          v-if="value.type === 'percentage'"
          name="value"
          class="form-control"
          type="number"
          :value="value.value"
          @input="e => update('value', parseInt(e.target.value, 10))"
          :min="0"
          :max="100"
        />
        <div class="input-group-append">
          <span class="input-group-text">%</span>
        </div>
      </template>
      <input-money
        v-else
        name="value"
        :schema="value"
        :value="value.value"
        @input="val => update('value', val)"
      />

      <input-enum
        name="apply_at"
        :schema="applyAt"
        :value="value.apply_at"
        @input="val => update('apply_at', val)"
        :i18n-values="applyAtOptions"
        :placeholder="applyAt.description || applyAt.title"
      />
    </div>

    <span class="form-text text-muted">
      {{ discountValue.description || discountValue.title }}
    </span>
  </div>
</template>

<script src="./js/InputDiscount.js"></script>
