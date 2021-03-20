<template>
  <div>
    <div v-if="isProductList">
      <input-product
        class="mb-2"
        v-for="(item, i) in localValue"
        :name="`${name}[${i}]`"
        :key="i"
        :schema="schema.items"
        :value="getItemValue(item)"
        @input="value => setItemValue(value, i)"
        @blur="checkItem(i)"
      />
    </div>
    <div v-else>
      <input-text
        class="mb-2"
        v-for="(item, i) in localValue"
        :name="`${name}[${i}]`"
        :key="i"
        :schema="schema.items"
        :value="getItemValue(item)"
        @input="value => setItemValue(value, i)"
        @blur="checkItem(i)"
      />
    </div>

    <button
      class="mb-1 btn btn-secundary btn-sm"
      @click.prevent="addItem()"
    >
      <i class="fa fa-plus-circle mr-1"></i>
      {{ schema.items.title }}
    </button>
  </div>
</template>

<script src="./js/InputList.js"></script>
