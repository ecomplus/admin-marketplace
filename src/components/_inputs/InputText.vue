<template>
  <div>
    <textarea
      v-if="!schema.pattern && schema.maxLength > 255"
      type="text"
      class="form-control"
      :placeholder="schema.default"
      :maxlength="schema.maxLength"
      :rows="schema.maxLength > 2000 ? 4 : schema.maxLength > 1000 ? 3 : 2"
      v-model="localValue"
      @blur="$emit('blur')"
    ></textarea>
    <input
      v-else
      type="text"
      class="form-control"
      :placeholder="schema.default"
      :maxlength="schema.maxLength"
      :pattern="schema.pattern"
      v-model="localValue"
      @blur="$emit('blur')"
    >
  </div>
</template>

<script src="./js/InputText.js"></script>
