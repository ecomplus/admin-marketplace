<template>
  <div class="custom-control custom-checkbox">
    <input
      v-model="localValue"
      type="checkbox"
      class="custom-control-input"
      :id="name"
      :class="localValue && isDisable ? 'bg-warning' : null"
    >
    <label
      class="custom-control-label"
      :class="isDisable ? 'text-warning' : null"
      :for="name"
    >
      {{ schema.title }}
    </label>
  </div>
</template>

<script src="./js/InputBoolean.js"></script>
