<template>
  <Application>
    <template #settings-append>
      <a-collapse>
        <a-collapse-panel key="1" header="Envio Manual">
          <div class="mb-3">
            <a-alert
              message="Sincronização Manual"
              description="É possível enviar produtos e pedidos para o Bling manualmente, e também, produtos do Bling para E-Com Plus."
              type="info"
              show-icon
            />
          </div>

          <div class="mb-3">
            <span>Para enviar produtos da E-Com Plus para o Bling, selecione a opção Produtos E-Com Plus, e insira os SKU's dos produtos que você pretende enviar para o Bling separados por virgula, ex; MeuSku1,MeuSku2,MeuSku3</span>
          </div>

          <div class="mb-3">
            <span>Para enviar pedidos da E-Com Plus para o Bling, selecione a opção Pedidos E-Com Plus, e insira os Id's dos pedidos separados por virgula, ex; 5e76d9e77e65524614891a77,5e76d9e77e65524614891a77,5e76d9e77e65524614891a77</span>
          </div>

          <div class="mb-3">
            <span>Para enviar produtos do Bling para E-Com Plus, selecione a opção Produtos Bling, e insira o código dos produtos no Bling separados por virgula, ex; MeuProdutoNoBling1,MeuProdutoNoBling2,MeuProdutoNoBling3</span>
          </div>

          <a-input-group compact>
            <a-select default-value="ecomProducts" style="width: 30%" v-model="syncType">
              <a-select-option value="ecomProducts">Produtos E-Com Plus</a-select-option>
              <a-select-option value="ecomOrders">Pedidos E-Com Plus</a-select-option>
              <a-select-option value="blingProducts">Produtos Bling</a-select-option>
            </a-select>
            <a-input style="width: 50%" v-model="syncValues" />
          </a-input-group>

          <div class="mt-3">
            <a-button type="primary" @click="handler">Sincronizar</a-button>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </template>
  </Application>
</template>

<script src="./js/AppBling.js"></script>
