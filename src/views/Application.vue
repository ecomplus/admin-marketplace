<template>
  <div id="application">
    <ec-application
      :application="application"
      @click:install="goToApp"
      @click:back="goToMarket"
      @click:uninstall="goToMarket"
    >
      <template #settings>
        <slot name="settings"/>
      </template>
      <template #settings-append>
        <slot name="settings-append"/>
      </template>
    </ec-application>
  </div>
</template>

<script src="./js/Application.js"></script>
