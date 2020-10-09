<template>
  <div>
    <div class="input-group">
      <input-enum
        name="type"
        :schema="type"
        v-model="localValue.type"
        :i18n-values="typeOptions"
      />

      <template v-if="localValue.type === 'percentage'">
        <input
          v-if="localValue.type === 'percentage'"
          class="form-control"
          type="number"
          v-model="localValue.value"
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
        v-model="localValue.value"
      />

      <input-enum
        name="apply_at"
        :schema="applyAt"
        v-model="localValue.apply_at"
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
