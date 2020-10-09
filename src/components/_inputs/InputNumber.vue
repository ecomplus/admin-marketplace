<template>
  <input
    v-model="localValue"
    class="form-control"
    style="max-width: 120px"
    type="number"
    :name="name"
    :max="schema.maximum"
    :min="schema.minimum"
    :step="step"
  >
</template>

<script src="./js/InputNumber.js"></script>
