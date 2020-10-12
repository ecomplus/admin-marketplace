<template>
  <div id="app-mercado-livre">
    <div class="form-group">
      <label for="">ID do produto</label>
      <input type="text" class="form-control" v-model="productTerm" />
    </div>
    <div>
      <div v-for="productFound of productsFound" :key="productFound._id">
        <input type="radio" :value="productFound" v-model="product.product" />
        {{ productFound._source.name }}
      </div>
    </div>
    <div class="form-group">
      <label for="">Categoria no ML</label>
      <input type="text" class="form-control" v-model="product.category_id" />
    </div>
    <div class="form-group">
      <label for="">Tipo de anuncio</label>
      <select class="form-control" v-model="product.listing_type_id">
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
        @click="send"
        class="btn btn-primary"
        :disabled="!product.product"
      >
        Enviar
      </button>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>Sucesso</h3>
        <code>{{ result }}</code>
      </div>
      <div class="col-md-6">
        <h3>Erro</h3>
        <code>{{ error }}</code>
      </div>
    </div>
    <h2>Anuncios no Mercado Livre!</h2>
    <AppMercadoLivreProducList />

  </div>
</template>

<script src="./js/AppMercadoLivreProduct.js"></script>

<style lang="scss">
#app-mercado-livre {
  code {
    display: block;
    white-space: pre-wrap;
  }
}
</style>
