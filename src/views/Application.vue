<template>
  <div id="application">
    <ec-application
      :application.sync="application"
      :is-settings-visible="isSettingsVisible"
      :settings-open-collapse="settingsOpenCollapse"
      @click:back="goToMarket"
      @install="onInstall"
      @uninstall="goToMarket"
    >
      <template #settings>
        <slot name="settings"/>
      </template>
      <template #settings-prepend>
        <slot name="settings-prepend"/>
      </template>
      <template #settings-append>
        <slot name="settings-append"/>
      </template>
    </ec-application>
  </div>
</template>

<script src="./js/Application.js"></script>
