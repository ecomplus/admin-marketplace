<template>
  <div>
    <a-form-item
      :extra="discountValue.description || discountValue.title"
    >
      <a-input-group compact>
        <input-enum
          name="type"
          :schema="type"
          v-model="localValue.type"
          style="width: 33%; min-width: auto"
          :i18n-values="typeOptions"
        />

        <a-input-number
          style="width: 34%"
          v-if="localValue.type === 'percentage'"
          v-model="localValue.value"
          :min="0"
          :max="100"
          :formatter="value => `${value}%`"
          :parser="value => value.replace('%', '')"
        />
        <input-money
          style="width: 34%"
          name="value"
          :schema="value"
          v-model="localValue.value"
          v-else
        />

        <input-enum
          name="apply_at"
          :schema="applyAt"
          v-model="localValue.apply_at"
          style="width: 33%; min-width: auto"
          :i18n-values="applyAtOptions"
          :placeholder="applyAt.description || applyAt.title"
        />
      </a-input-group>
    </a-form-item>
  </div>
</template>

<script src="./js/InputDiscount.js"></script>
