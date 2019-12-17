<template>
  <a-input-number
    :name="name"
    :min="schema.minimum"
    :max="schema.maximum"
    v-model="localValue"
    :defaultValue="schema.default"
    :decimalSeparator="countryCode === 'BR' ? ',' : '.'"
  />
</template>

<script src="./js/InputNumber.js"></script>
