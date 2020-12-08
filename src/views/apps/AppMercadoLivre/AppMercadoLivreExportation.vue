<template>
  <div id="app-mercado-livre">
    <div class="form-group">
      <label for="">ID do produto:</label>
      <input
        type="text"
        class="form-control"
        v-model="productToExport.product_id"
      />
    </div>
    <div class="form-group">
      <AppMercadoLivreSearchCategory v-on:selectCategory="selectCategory"/>
      <label for="">ID da Categoria no ML:</label>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="ID da Categoria no ML"
          aria-label="Categoria no ML"
          aria-describedby="btn-search-ml-category"
          v-model="productToExport.category_id"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="btn-search-ml-category"
            v-b-modal.modal-app-ml-search-category
          >
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="">Tipo de anuncio</label>
      <select class="form-control" v-model="productToExport.listing_type_id">
        <option
          v-for="listingType in listingTypes"
          :key="listingType.id"
          :value="listingType.id"
        >
          {{ listingType.name }}
        </option>
      </select>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            v-model="productToExport.allows_balance_update"
          />
          <label class="form-check-label" for="exampleCheck1"
            >Sincronizar saldo?</label
          >
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            v-model="productToExport.allows_price_update"
          />
          <label class="form-check-label" for="exampleCheck1"
            >Sincronizar preço?</label
          >
        </div>
      </div>
    </div>
    <div>
      <button @click="add" class="btn btn-primary">
        Adicionar para ser exportado
      </button>
    </div>
  </div>
</template>

<script src="./js/AppMercadoLivreExportation.js"></script>

<style lang="scss">
#app-mercado-livre {
  code {
    display: block;
    white-space: pre-wrap;
  }
}
</style>
