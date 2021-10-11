<template>
  <div class="position-relative">
     <textarea
       v-if="!isPassword && !schema.pattern && schema.maxLength > 255"
       class="form-control"
       :placeholder="schema.default"
       :maxlength="schema.maxLength"
       :rows="schema.maxLength > 2000 ? 4 : schema.maxLength > 1000 ? 3 : 2"
       v-model="localValue"
       @blur="$emit('blur')"
     ></textarea>
    <input
      v-else
      class="form-control"
      autocomplete="off"
      :type="inputType"
      :placeholder="schema.default"
      :maxlength="schema.maxLength"
      :pattern="schema.pattern"
      v-model="localValue"
      @blur="$emit('blur')"
    >

    <i
      v-if="isPassword"
      class="fa position-absolute"
      :class="inputType === 'password' ? 'fa-eye' : 'fa-eye-slash'"
      style="cursor: pointer; right: 7px; top: 12px"
      @click="inputType = (inputType === 'password' ? 'text' : 'password')"
    ></i>
  </div>
</template>

<script src="./js/InputText.js"></script>
