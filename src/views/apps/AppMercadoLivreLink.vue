<template>
  <div id="app-mercado-livre">
    <div class="form-group">
      <label for="">ID do produto:</label>
      <input type="text" class="form-control" v-model="productToLink.product_id" />
    </div>
    <div class="form-group">
      <label for="">ID do anúncio no ML</label>
      <input type="text" class="form-control" v-model="productToLink.ml_product_id" />
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" v-model="productToLink.allows_balance_update" />
          <label class="form-check-label" for="exampleCheck1">Sincronizar saldo?</label>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" v-model="productToLink.allows_price_update" />
          <label class="form-check-label" for="exampleCheck1">Sincronizar preço?</label>
        </div>
      </div>
    </div>
    <div>
      <button
        @click="add"
        class="btn btn-primary"
      >
        Adicionar à ser sincronizado
      </button>
    </div>
  </div>
</template>

<script src="./js/AppMercadoLivreLink.js"></script>

<style lang="scss">
#app-mercado-livre {
  code {
    display: block;
    white-space: pre-wrap;
  }
}
</style>
