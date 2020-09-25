<template>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text bg-white border-0">
      <input  
        v-model="localValue" 
        type="checkbox" 
        class="form-inline"  
        :class="localValue && name.indexOf('disable') > -1 ? 'bg-warning' : null"
        :value="Boolean(schema.default)"
      >
    </div>
  </div>
  <label class="m-2">
    {{schema.title}}
  </label>
</div>


</template>

<script src="./js/InputBoolean.js"></script>
