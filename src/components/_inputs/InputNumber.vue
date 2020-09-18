<template>
  <input v-model="localValue" class="form-control" id="input-number" type="number" :max="schema.maximum" :min="schema.minimum" :decimalSeparator="countryCode === 'BR' ? ',' : '.'">
</template>
<script src="./js/InputNumber.js"></script>