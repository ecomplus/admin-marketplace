<template>
  <div id="marketplace">
    <ec-apps-market
      @click:app="goToApp"
      v-bind:tab="tab"
      :additional-apps="mockedApps"
      :next-tab="nextTab"
    />
  </div>
</template>

<script src="./js/Marketplace.js"></script>
