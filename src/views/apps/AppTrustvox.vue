<template>
  <Application>
    <template #settings-append>
      <a-collapse class="mt-4">
        <a-collapse-panel key="1" header="Autenticação">
          <a-alert message="Configure primeiro os parametros ApiKey, Store Id e Url da loja antes de autenticar a aplicativo." banner />
          <div class="mt-3">
            <a-button type="primary" @click="handlerClick">Autenticar</a-button>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </template>
  </Application>
</template>

<script src="./js/AppTrustvox.js"></script>
