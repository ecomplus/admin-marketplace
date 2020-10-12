<template>
  <cleave-input
    type="tel"
    class="form-control"
    style="max-width: 135px"
    pattern="[\d:]{8}"
    :options="cleaveOptions"
    v-model="localValue"
    :raw="false"
    placeholder="hh:mm:ss"
  />
</template>

<script src="./js/InputTime.js"></script>
