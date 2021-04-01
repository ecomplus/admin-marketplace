<template>
  <div id="application">
    <ec-application
      :application.sync="application"
      @click:back="goToMarket"
      @install="onInstall"
      @uninstall="goToMarket"
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
