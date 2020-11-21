<template>
  <div class="accordion" role="tablist">
    <div v-if="loading">
      <span v-if="loading">carregando...</span>
    </div>
    <div v-else>
      <b-card
        no-body
        class="mb-1"
        v-for="(log, index) in logs"
        :key="`log-${index}`"
      >
        <b-card-header header-tag="header" role="tab">
          <b-button
            block
            align-h="start"
            variant="light"
            v-b-toggle="`log-${index}`"
            @click="setActiveId(`log-${index}`)"
            class="p-10"
          >
            <span class="ml-0">{{ log.timestamp }}</span>
            <span class="ml-30">{{ log.entity }}</span>
            <span v-if="log.success" class="ml-30 badge badge-success"
              >Sucesso</span
            >
            <span v-else class="ml-30 badge badge-danger">Error</span>
          </b-button>
        </b-card-header>
        <b-card-body class="log-card-body">
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
            <b-card-text v-if="log.requestData">
              <strong>
                Request [{{log.status}}]: {{ log.requestMethod }} - {{ log.requestURL }}
              </strong>
              <div id="log-notes">
                <pre><code>{{ log.requestData }}</code></pre>
              </div>
            </b-card-text>
          </b-collapse>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="./js/AppMercadoLivreLogsList.js"></script>

<style lang="scss">
#log-notes {
  width: 100%;
  max-width: 624px;
  max-height: 300px;
  overflow-y: scroll;
}
.log-card-body {
  display: flex;
  flex-direction: column;
  max-width: 624px;
}
</style>
