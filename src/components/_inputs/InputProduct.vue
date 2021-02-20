<template>
  <vue-bootstrap-typeahead
    type="text"
    class="form-control"
    :data="products"
    :serializer="product => product.name"
    :placeholder="schema.default"
    v-model="productSearch"
    @hit="localValue = $event"
  >
</template>

<script src="./js/InputProduct.js"></script>
