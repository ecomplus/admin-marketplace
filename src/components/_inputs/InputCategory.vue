<template>
  <vue-bootstrap-typeahead
    type="text"
    autocomplete="off"
    class="form-control"
    :data="categories"
    :serializer="({ name, parent }) => `${name} ${(parent && parent.name ? '(' + parent.name + ')' : '')}`"
    :placeholder="schema.default"
    :maxMatches="30"
    v-model="term"
    ref="typeahead"
    @hit="handleHit"
  />
</template>

<script src="./js/InputCategory.js"></script>
