<template>
  <a-input
    :name="name"
    :placeholder="schema.default"
    :maxlength="schema.maxLength"
    v-model="localValue"
  />
</template>

<script src="./js/InputText.js"></script>
