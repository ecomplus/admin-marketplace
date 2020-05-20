<template>
  <Application>
    <template #settings-append>
      <a-collapse class="mt-4">
        <a-collapse-panel key="1" :header="i19Advanced">
          <a-alert :message="i19ApiKeyAlert" banner />
          <div class="mt-3">
            <a-list size="small" bordered itemLayout="horizontal">
              <a-list-item>
                <a-list-item-meta :description="i19StoresDescription">
                  <a slot="title">{{i19Stores}}</a>
                </a-list-item-meta>
                <div>
                  <a-dropdown>
                    <a-menu slot="overlay" @click="handleClick">
                      <a-menu-item key="fetchStores">{{i19StoreFetch}}</a-menu-item>
                      <a-menu-item key="newStore">{{i19StoreCreate}}</a-menu-item>
                    </a-menu>
                    <a-button>
                      {{i19Options}}
                      <a-icon type="down" />
                    </a-button>
                  </a-dropdown>
                </div>
              </a-list-item>

              <a-list-item>
                <a-list-item-meta :description="i19ListDescription">
                  <a slot="title">{{i19Lists}}</a>
                </a-list-item-meta>
                <div>
                  <a-dropdown>
                    <a-menu slot="overlay" @click="handleClick">
                      <a-menu-item key="fetchLists">{{i19ListsSearch}}</a-menu-item>
                      <a-menu-item key="newList">{{i19ListsCreate}}</a-menu-item>
                    </a-menu>
                    <a-button>
                      {{i19Options}}
                      <a-icon type="down" />
                    </a-button>
                  </a-dropdown>
                </div>
              </a-list-item>
            </a-list>
          </div>

          <div class="mt-3">
            <a-alert :message="i19StoreIdAlert" banner />
          </div>

          <div class="mt-3">
            <a-list size="small" bordered itemLayout="horizontal">
              <a-list-item>
                <a-list-item-meta :description="i19SyncProductsMessage">
                  <a slot="title">{{i19SyncProducts}}</a>
                </a-list-item-meta>
                <div>
                  <a-button type="primary" @click="syncProducts">{{i19SyncProducts}}</a-button>
                </div>
              </a-list-item>

              <a-list-item>
                <a-list-item-meta :description="i19SyncCustomersMessage">
                  <a slot="title">{{i19SyncCustomers}}</a>
                </a-list-item-meta>
                <div>
                  <a-button type="primary" @click="syncCustomers">{{i19SyncCustomers}}</a-button>
                </div>
              </a-list-item>
            </a-list>
          </div>
        </a-collapse-panel>
      </a-collapse>

      <div>
        <a-modal :footer="null" v-model="showModalLists" :title="i19Lists">
          <a-list item-layout="horizontal" :data-source="localLists">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta :description="`Id: ${item.id}`">
                <a slot="title">Nome: {{ item.name.toUpperCase() }}</a>
                <a-avatar slot="avatar">{{index}}</a-avatar>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-modal>
      </div>

      <div>
        <a-modal :footer="null" v-model="showModalStores" :title="i19Stores">
          <a-list item-layout="vertical" :data-source="localStores">
            <a-list-item slot="renderItem" slot-scope="item">
              <a-list-item-meta>
                <a slot="title">{{ item.name.toUpperCase() }}</a>
              </a-list-item-meta>
              <div class="mt-2">Store Id: {{item.id}}</div>
              <div class="mt-2">Store List Id: {{item.list_id}}</div>
              <div class="mt-2">E-mail: {{item.email_address}}</div>
            </a-list-item>
          </a-list>
        </a-modal>
      </div>

      <div>
        <a-modal :footer="null" v-model="showModalError" title="Erro">
          <a-result
            status="403"
            title="403"
            sub-title="Sua conta não permite essa operação, verifique seu plano atual no Mailchimp e tente novamente."
          ></a-result>
        </a-modal>
      </div>
    </template>
  </Application>
</template>

<script src="./js/AppMailchimp.js"></script>
