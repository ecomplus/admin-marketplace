<template>
  <div>
    <vue-bootstrap-typeahead
      type="text"
      class="form-control"
      :data="products"
      :serializer="(product) => product.name"
      :placeholder="schema.default"
      :maxMatches="30"
      v-model="productSearch"
      @hit="localValue = $event._id"
      ref="typeahead"
    />
  </div>
</template>

<script src="./js/InputProduct.js"></script>
