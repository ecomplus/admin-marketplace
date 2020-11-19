<template>
  <div>
    <b-modal
      size="lg"
      id="modal-app-ml-search-category"
      title="Pesquise a categoria"
    >
      <div class="form-group">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Digite o termo da pesquisa..."
            aria-label="Categoria no ML"
            aria-describedby="btn-search-ml-category"
            v-model="term"
            @keypress.enter="search()"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="btn-search-ml-category"
              v-b-modal.modal-app-ml-search-category
              @click="search()"
            >
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="table table-responsive" v-if="categories.length > 0">
        <table style="width:100%" class="table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Domínio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.category_id">
              <td>{{ category.category_id }}</td>
              <td>{{ category.category_name }}</td>
              <td>{{ category.domain_name }}</td>
              <th><button class="btn btn-sm btn-ligth" @click="selectCategory(category)">Selecionar</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </b-modal>
  </div>
</template>

<script src="./js/AppMercadoLivreSearchCategory.js"></script>
