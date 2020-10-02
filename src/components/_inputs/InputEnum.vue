<template>
  <select
    class="custom-select"
    style="min-width: 120px;"
    v-model="localValue"
  >
    <option
      v-for="item in schema.enum"
      :key="item"
      :value=" schema.default "
    >
      {{ i18nValues ? i18nValues[item] : item}}
    </option>
  </select>
</template>

<script src="./js/InputEnum.js"></script> 