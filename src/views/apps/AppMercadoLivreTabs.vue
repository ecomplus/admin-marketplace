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
                <td>{{ product.allows_balance_update }}</td>
                <td>{{ product.allows_price_update }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr>
        <button class="btn btn-primary" @click="exportProducts">Exportar</button>
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
                <td>{{ product.allows_balance_update }}</td>
                <td>{{ product.allows_price_update }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr>
        <button class="btn btn-primary" @click="exportLinkProducts">Exportar</button>
      </b-tab>
      <b-tab title="Logs">
        <p>I'm the tab with the very, very long title</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script src="./js/AppMercadoLivreTabs.js"></script>