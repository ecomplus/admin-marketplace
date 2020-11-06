<template>
  <Application>
    <template #settings-append>
      <div>
        <h2>Integrações:</h2>
        <div>
          <AppMercadoLivreTabs :applicationBody="applicationBody" />
        </div>
      </div>
    </template>
  </Application>
</template>

<script src="./js/AppMercadoLivre.js"></script>
