<template>
  <a-select
    style="min-width: 120px"
    :default-value="schema.default"
    v-model="localValue"
  >
    <a-select-option
      v-for="item in schema.enum"
      :key="item"
      :value="item"
    >
      {{ i18nValues ? i18nValues[item] : item}}
    </a-select-option>
  </a-select>
</template>

<script src="./js/InputEnum.js"></script>
