<template>
  <div id="app-mercado-livre">
    <b-tabs content-class="mt-3" fill>
      <b-tab title="Autenticação" active>
        <!-- Todo: Remover -->
        <InputProduct name="product_id" :schema="applicationBody"/>
        <!--  -->
        <AppMercadoLivreAuth :mlProfile="applicationBody.data.mlProfile" />
      </b-tab>
      <b-tab title="Exportar produtos">
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
                <td>
                  <i
                    :class="getCheckedClass(product.allows_balance_update)"
                  ></i>
                </td>
                <td>
                  <i :class="getCheckedClass(product.allows_price_update)"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <button
          class="btn btn-primary"
          @click="exportProducts"
          :disabled="exportationProducts.length === 0"
        >
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
                <td>
                  <i
                    :class="getCheckedClass(product.allows_balance_update)"
                  ></i>
                </td>
                <td>
                  <i :class="getCheckedClass(product.allows_price_update)"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <button
          class="btn btn-primary"
          @click="exportLinkProducts"
          :disabled="linkProducts.length === 0"
        >
          Exportar
        </button>
      </b-tab>
      <b-tab title="Meus anúncios">
        <div class="row">
          <div class="col-md-3 offset-md-9">
            <button class="btn btn-sm btn-light" @click="loadApplicationBody">
              <i class="fa fa-refresh"></i> Atualizar
            </button>
          </div>
        </div>
        <AppMercadoLivreProductList
          v-if="applicationBody.data"
          v-on:unlink="unlinkProduct"
          :productCorrelations="applicationBody.data.product_correlations"
        />
      </b-tab>
      <b-tab title="Logs">
        <div class="row">
          <div class="col-md-3 offset-md-9">
            <button class="btn btn-sm btn-light" @click="loadApplicationBody">
              <i class="fa fa-refresh"></i> Atualizar
            </button>
          </div>
        </div>
        <hr />
        <AppMercadoLivreLogsList
          :logs="applicationBody.hidden_data.logs"
          :loading="loading"
        />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script src="./js/AppMercadoLivreTabs.js"></script>
