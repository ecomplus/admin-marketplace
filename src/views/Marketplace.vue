<template>
  <div id="marketplace">
    <ec-apps-market
      :next-tab="nextTab"
      @click:app="goToApp"
    />
  </div>
</template>

<script src="./js/Marketplace.js"></script>
