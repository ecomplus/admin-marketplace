<template>
    <vue-bootstrap-typeahead
      type="text"
      class="form-control"
      :data="products"
      :serializer="(product) => product.name"
      :placeholder="schema.default"
      :maxMatches="30"
      v-model="productSearch"
      ref="productTypeahead"
      @hit="handleHit"
    />
</template>

<script src="./js/InputProduct.js"></script>
