<template>
  <input
    type="text"
    class="form-control"
    :placeholder="schema.default"
    :maxlength="schema.maxLength"
    :pattern="schema.pattern"
    v-model="localValue"
    @blur="$emit('blur')"
  >
</template>

<script src="./js/InputText.js"></script>
