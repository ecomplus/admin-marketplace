<template>
  <div class="form-check">
    <input  
      v-model="localValue" 
      type="checkbox" 
      class="form-check-input"  
      :value="$Boolean(schema.default)"
    >
  </div>
</template>

<script src="./js/InputBoolean.js"></script>
