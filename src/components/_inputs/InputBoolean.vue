<template>

<div class="custom-control custom-checkbox">
  <input 
    v-model="localValue" 
    type="checkbox" 
    class="custom-control-input" 
    :id="schema.title"
    :class="localValue && name.indexOf('disable') > -1 ? 'bg-warning' : null"
    :value="Boolean(schema.default)">
  <label class="custom-control-label" :for="schema.title">{{schema.title}}</label>
</div>



</template>

<script src="./js/InputBoolean.js"></script>
