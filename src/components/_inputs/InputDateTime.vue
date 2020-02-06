<template>
  <a-input-group>
    <input-date
      style="width: 50%"
      :iso-value.sync="localDateValue"
      :schema="schema"
    />
    <input-time
      style="width: 50%"
      :iso-value.sync="localTimeValue"
      :schema="schema"
    />
  </a-input-group>
</template>

<script src="./js/InputDateTime.js"></script>
