<template>
  <div id="app-mercado-livre">
    <b-tabs content-class="mt-3" fill>
      <b-tab title="Exportar produtos" active>
        <AppMercadoLivreExportation v-on:add="addToExportation" />
        <hr />
        <h3>Produtos à exportar</h3>
        <div class="table table-responsive">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Categoria ML</th>
                <th>Tipo de listagem</th>
                <th>Sincronização de saldo</th>
                <th>Sincronização de preço</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product of exportationProducts" :key="product">
                <td>{{ product.product_id }}</td>
                <td>{{ product.category_id }}</td>
                <td>{{ product.listing_type_id }}</td>
                <td><i :class="getCheckedClass(product.allows_balance_update)"></i></td>
                <td><i :class="getCheckedClass(product.allows_price_update)"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <button class="btn btn-primary" @click="exportProducts" :disabled="exportationProducts.length === 0">
          Exportar
        </button>
      </b-tab>
      <b-tab title="Vincular produtos">
        <AppMercadoLivreLink v-on:add="addToLink" />
        <hr />
        <h3>Produtos à exportar</h3>
        <div class="table table-responsive">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Categoria ML</th>
                <th>Sincronização de saldo</th>
                <th>Sincronização de preço</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product of linkProducts" :key="product">
                <td>{{ product.product_id }}</td>
                <td>{{ product.ml_product_id }}</td>
                <td><i :class="getCheckedClass(product.allows_balance_update)"></i></td>
                <td><i :class="getCheckedClass(product.allows_price_update)"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <button class="btn btn-primary" @click="exportLinkProducts" :disabled="linkProducts.length === 0">
          Exportar
        </button>
      </b-tab>
      <b-tab title="Meus anúncios">
        <div class="table table-responsive">
          <table v-if="applicationBody.data.product_correlations">
            <thead>
              <tr>
                <th>ID</th>
                <th>ID no ML</th>
                <th>Sincroniza saldo?</th>
                <th>Sincroniza preço?</th>
              </tr>
            </thead>
            <tbody>
              <template
                v-for="correlation of Object.keys(
                  applicationBody.data.product_correlations
                )"
              >
                <tr
                  v-for="product of applicationBody.data.product_correlations[
                    correlation
                  ]"
                  :key="product"
                >
                  <td>{{ product.metadata.product_id }}</td>
                  <td>{{ product.ml_id }}</td>
                  <td><i :class="getCheckedClass(product.metadata.allows_balance_update)"></i></td>
                  <td><i :class="getCheckedClass(product.metadata.allows_price_update)"></i></td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </b-tab>
      <b-tab title="Logs">
        <p>I'm the tab with the very, very long title</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script src="./js/AppMercadoLivreTabs.js"></script>