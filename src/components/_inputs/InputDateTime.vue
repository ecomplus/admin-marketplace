<template>
  <div class="d-flex justify-content-space-around">
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
  </div>
</template>

<script src="./js/InputDateTime.js"></script>
