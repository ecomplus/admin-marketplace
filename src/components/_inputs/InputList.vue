<template>
  <div>
    <input-text
      v-for="(item, i) in localValue"
      :name="`${name}[${i}]`"
      :key="i"
      :schema="schema.items"
      :value="getItemValue(item)"
      @input="value => setItemValue(value, i)"
      @blur="checkItem(i)"
    />
    <a-button
      type="dashed"
      html-type="button"
      size="small"
      @click.prevent="addItem()"
    >
      <i class="fas fa-plus-circle mr-1"></i>
      {{ schema.items.title }}
    </a-button>
  </div>
</template>

<script src="./js/InputList.js"></script>
