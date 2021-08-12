<template>
  <div id="marketplace">
    <ec-apps-market @click:app="goToApp" v-bind:tab="tab"/>
  </div>
</template>

<script src="./js/Marketplace.js"></script>
