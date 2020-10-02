<template>
  <input 
    @blur="$emit('blur')" 
    type="text" 
    class="form-control" 
    :placeholder="schema.default" 
    :max-length="schema.maxLength" 
    :pattern="schema.pattern"
    v-model="localValue"
  >
</template>

<script src="./js/InputText.js"></script>
