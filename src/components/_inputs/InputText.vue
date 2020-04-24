<template>
  <a-input
    :name="name"
    :placeholder="schema.default"
    :max-length="schema.maxLength"
    :pattern="schema.pattern"
    v-model="localValue"
    @blur="$emit('blur')"
  />
</template>

<script src="./js/InputText.js"></script>
