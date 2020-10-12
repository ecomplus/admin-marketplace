<template>
  <div class="input-group">
    <input-date
      :iso-value.sync="localDateValue"
      :schema="schema"
    />
    <input-time
      :iso-value.sync="localTimeValue"
      :schema="schema"
    />
  </div>
</template>

<script src="./js/InputDateTime.js"></script>
