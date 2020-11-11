<template>
  <div class="accordion" role="tablist">
    {{activeId}}
    <b-card
      no-body
      class="mb-1"
      v-for="(log, index) in logs"
      :key="`log-${index}`"
    >
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block variant="info"
          >{{ log.entity }} - {{ log.timestamp }}
        </b-button>
      </b-card-header>
      <b-card-body>
        <button v-b-toggle="`log-${index}`" @click="setActiveId(`log-${index}`)">Ver detalhes</button>
        <b-collapse
          :id="`log-${index}`"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-text>
            <div id="log-notes">
              <pre><code>{{ log.notes }}</code></pre>
            </div>
          </b-card-text>
        </b-collapse>
      </b-card-body>
    </b-card>
  </div>
</template>

<script src="./js/AppMercadoLivreLogsList.js"></script>

<style lang="scss">
#log-notes {
  max-width: 600px;
  max-height: 300px;
  overflow-y: scroll;
}
</style>
