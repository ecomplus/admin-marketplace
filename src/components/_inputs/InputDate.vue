
<template>
  <cleave-input
    type="tel"
    class="form-control"
    style="max-width: 135px"
    pattern="[\d/-]{10}"
    :options="cleaveOptions"
    v-model="localValue"
    :raw="false"
    :placeholder="placeholder"
  />
</template>

<script src="./js/InputDate.js"></script>