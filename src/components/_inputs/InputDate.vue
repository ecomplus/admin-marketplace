<template>
  <input 
    type="tel" 
    :placeholder="placeholder" 
    :raw="false" 
    class="form-control" 
    pattern="[\d/-]{10}" 
    :options="cleaveOptions" 
    v-model="localValue"
  >
</template>

<script src="./js/InputDate.js"></script>
