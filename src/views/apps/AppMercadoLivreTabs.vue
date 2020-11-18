<template>
  <div id="app-mercado-livre">
    <b-tabs content-class="mt-3" fill>
      <b-tab title="Autenticação">
        <AppMercadoLivreAuth />
      </b-tab>
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
              <tr v-for="product in exportationProducts" :key="product">
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
              <tr v-for="product in linkProducts" :key="product">
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
        <div class="row">
          <div class="col-md-3 offset-md-9">
            <button class="btn btn-sm btn-light" @click="loadApplicationBody"><i class="fa fa-refresh"></i> Atualizar</button>
          </div>
        </div>
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
                v-for="correlation in Object.keys(
                  applicationBody.data.product_correlations
                )"
              >
                <tr
                  v-for="product in applicationBody.data.product_correlations[
                    correlation
                  ]"
                  :key="product.metadata.product_id"
                >
                  <td>{{ product.metadata.product_id }}</td>
                  <td>{{ product.mlId }}</td>
                  <td><i :class="getCheckedClass(product.metadata.allows_balance_update)"></i></td>
                  <td><i :class="getCheckedClass(product.metadata.allows_price_update)"></i></td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </b-tab>
      <b-tab title="Logs">
        <div class="row">
          <div class="col-md-3 offset-md-9">
            <button class="btn btn-sm btn-light" @click="loadApplicationBody"><i class="fa fa-refresh"></i> Atualizar</button>
          </div>
        </div>
        <hr>
        <AppMercadoLivreLogsList :logs="applicationBody.data.logs"/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script src="./js/AppMercadoLivreTabs.js"></script>
