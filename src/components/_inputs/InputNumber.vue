<template>
  <input
    v-model="localValue"
    class="form-control"
    style="max-width: 120px"
    type="number"
    :max="schema.maximum"
    :min="schema.minimum"
    :step="step"
  >
</template>

<script src="./js/InputNumber.js"></script>
