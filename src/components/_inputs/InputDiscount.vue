<template>
  <div>
    <a-form-item
      :extra="discountValue.description || discountValue.title"
    >
      <a-input-group compact>
        <a-select
          v-model="localValue.type"
          style="width: 40%"
          :default-value="type.default"
        >
          <a-select-option
            v-for="item in type.enum"
            :key="item"
            :value="item"
          >
            {{ typeOptions[item] }}
          </a-select-option>
        </a-select>

        <a-input-number
          style="width: 60%"
          v-if="localValue.type === 'percentage'"
          v-model="localValue.value"
          :min="0"
          :max="100"
          :formatter="value => `${value}%`"
          :parser="value => value.replace('%', '')"
        />
        <input-money
          style="width: 60%"
          name="value"
          :schema="value"
          v-model="localValue.value"
          v-else
        />
      </a-input-group>
    </a-form-item>

    <a-form-item
      :extra="applyAt.description || applyAt.title"
    >
      <input-enum
        name="apply_at"
        :schema="applyAt"
        v-model="localValue.apply_at"
        style="width: 100%"
        :i18n-values="applyAtOptions"
      />
    </a-form-item>
  </div>
</template>

<script src="./js/InputDiscount.js"></script>
