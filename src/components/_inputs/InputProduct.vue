<template>
  <vue-bootstrap-typeahead
    type="text"
    autocomplete="off"
    class="form-control"
    :data="products"
    :serializer="({ sku, name }) => `${name} (${sku})`"
    :placeholder="schema.default"
    :maxMatches="30"
    v-model="term"
    ref="typeahead"
    @hit="handleHit"
  />
</template>

<script src="./js/InputProduct.js"></script>
