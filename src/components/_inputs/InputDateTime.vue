<template>
  <div class="d-flex justify-content-space-around">
    <input  
      type="date"
      class="form-control"     
      style="width: 50%"
      v-model="localDateValue"
      :schema="schema"
    >
    <input
      type="date"
      class="form-control"     
      style="width: 50%"
      v-model="localTimeValue"
      :schema="schema"
    >
  </div>
</template>

<script src="./js/InputDateTime.js"></script>
