<template>
  <div id="app-mercado-livre-product-list">
    <table class="table">
      <thead>
        <tr>
          <th v-for="mlKey in mlKeys" :key="mlKey" scope="col">
            {{ mlKey }}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mlProduct in mlProducts" :key="mlProduct">
          <td v-for="mlKey in mlKeys" :key="mlKey" scope="col">
            {{ mlProduct.body[mlKey] }}
          </td>

          <td>
            <a href="#"><i class="fa fa-link"></i></a>
          </td>

          <td>
            <a
              :href="mlProduct.body.permalink"
              target="_blank"
            >
              <i class="fa fa-eye"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./js/AppMercadoLivreProductList.js"></script>

<style lang="scss">
#app-mercado-livre {
  code {
    display: block;
    white-space: pre-wrap;
  }
}
</style>
