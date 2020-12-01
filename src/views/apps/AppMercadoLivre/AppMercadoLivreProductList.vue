<template>
  <div class="table table-responsive">
    <table v-if="productCorrelations">
      <thead>
        <tr>
          <th>ID</th>
          <th>ID no ML</th>
          <th>Sinc. saldo?</th>
          <th>Sinc. preço?</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for="correlation in Object.keys(productCorrelations)"
        >
          <tr
            v-for="product in productCorrelations[correlation]"
            :key="product.metadata.product_id"
          >
            <td>{{ product.metadata.product_id }}</td>
            <td>{{ product.mlId }}</td>
            <td>
              <i
                :class="getCheckedClass(product.metadata.allows_balance_update)"
              ></i>
            </td>
            <td>
              <i
                :class="getCheckedClass(product.metadata.allows_price_update)"
              ></i>
            </td>
            <td>
              <button type="button" class="btn btn-sm btn-light" @click="unlink(product)">
                Desvincular
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script src="./js/AppMercadoLivreProductList.js"></script>
