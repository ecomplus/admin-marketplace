<template>
  <select
    class="custom-select"
    style="min-width: 130px"
    v-model="localValue"
  >
    <option
      v-for="item in schema.enum"
      :key="item"
      :value="item"
    >
      {{ i18nValues ? i18nValues[item] : item}}
    </option>
  </select>
</template>

<script src="./js/InputEnum.js"></script>
