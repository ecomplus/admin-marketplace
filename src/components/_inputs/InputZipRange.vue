<template>
  <div class="input-group">
    <input-zip-code
      v-for="(schema, field) in childSchemas"
      :key="field"
      :schema="schema"
      :placeholder="schema.description || schema.title || field"
      :value="value[field]"
      @input="val => update(field, val)"
    />
  </div>
</template>

<script src="./js/InputZipRange.js"></script>
