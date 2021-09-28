<template>
  <div id="marketplace">
    <ec-apps-market
      :next-tab="nextTab"
      :additional-apps="mockedApps"
      @click:app="goToApp"
    />
  </div>
</template>

<script src="./js/Marketplace.js"></script>
