<template>
  <cleave-input
    type="tel"
    autocomplete="off"
    class="form-control"
    style="max-width: 120px"
    :pattern="pattern"
    :options="cleaveOptions"
    v-model="localValue"
    :placeholder="placeholder"
  />
</template>

<script src="./js/InputZipCode.js"></script>
