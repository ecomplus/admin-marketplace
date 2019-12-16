<template>
  <a-input-number
    :name="name"
    :min="schema.minimum"
    :max="schema.maximum"
    v-model="localValue"
  />
</template>

<script src="./js/InputNumber.js"></script>
