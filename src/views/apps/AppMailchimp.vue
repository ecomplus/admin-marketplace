<template>
  <Application>
    <template #settings-append>
      <div class="mt-4">
        <div class="callout callout-info" role="alert">
          {{ i19ApiKeyAlert }}.
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h5>{{ i19Stores }}</h5>
            <p class="text-muted">
              {{ i19StoresDescription }}
              <br>
              <button
                class="btn btn-sm btn-light mt-2"
                @click="fetchStores"
              >
                {{ i19StoreFetch }}
              </button>
              <br>
              <button
                class="btn btn-sm btn-light mt-2"
                @click="newStore"
              >
                {{ i19StoreCreate }}
              </button>
            </p>
          </div>

          <div class="col-lg-6">
            <h5>{{ i19Lists }}</h5>
            <p class="text-muted">
              {{ i19ListDescription }}
              <br>
              <button
                class="btn btn-sm btn-light mt-2"
                @click="fetchLists"
              >
                {{ i19ListsSearch }}
              </button>
              <br>
              <button
                class="btn btn-sm btn-light mt-2"
                @click="newList"
              >
                {{ i19ListsCreate }}
              </button>
            </p>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="callout callout-info" role="alert">
          {{ i19StoreIdAlert }}.
        </div>

        <div class="row">
          <div class="col-lg-6">
            <p class="text-muted">
              <button
                class="btn btn-primary mb-2"
                @click="syncProducts"
              >
                {{ i19SyncProducts }}
              </button>
              <br>
              {{ i19SyncProductsMessage }}
            </p>
          </div>

          <div class="col-lg-6">
            <p class="text-muted">
              <button
                class="btn btn-primary mb-2"
                @click="syncCustomers"
              >
                {{ i19SyncCustomers }}
              </button>
              <br>
              {{ i19SyncCustomersMessage }}
            </p>
          </div>
        </div>
      </div>

      <div>
        <b-modal
          v-model="showModalLists"
          :title="i19Lists"
        >
          <b-table
            striped
            hover
            :items="localLists"
          ></b-table>
        </b-modal>
      </div>

      <div>
        <b-modal
          v-model="showModalStores"
          :title="i19Stores"
        >
          <b-table
            striped
            hover
            :items="localStores"
          ></b-table>
        </b-modal>
      </div>

      <div>
        <b-modal
          v-model="showModalError"
          title="Erro"
        >
          <p class="my-4">
            Sua conta não permite essa operação, verifique seu plano atual no Mailchimp e tente novamente.
          </p>
        </b-modal>
      </div>
    </template>
  </Application>
</template>

<script src="./js/AppMailchimp.js"></script>
