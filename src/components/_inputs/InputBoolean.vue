<template>
  <a-switch
    :name="name"
    :class="localValue && name.indexOf('disable') > -1 ? 'bg-warning' : null"
    :defaultChecked="Boolean(schema.default)"
    v-model="localValue"
  />
</template>

<script src="./js/InputBoolean.js"></script>
