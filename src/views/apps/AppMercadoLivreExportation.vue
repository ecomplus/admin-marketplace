<template>
  <div id="app-mercado-livre">
    <div class="form-group">
      <label for="">ID do produto:</label>
      <input type="text" class="form-control" v-model="productToExport.product_id" />
    </div>
    <div class="form-group">
      <label for="">Categoria no ML</label>
      <input type="text" class="form-control" v-model="productToExport.category_id" />
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
    <div>
      <button
        @click="add"
        class="btn btn-primary"
      >
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
