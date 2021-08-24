<template>
  <Application
    :is-settings-visible="!!(application.data && application.data.merchant_key && application.data.merchant_key.length)"
    @load="handleAppLoad"
  >
    <template
      v-if="!(application.data && application.data.merchant_key && application.data.merchant_key.length)"
      #settings-prepend
    >
      <div class="mt-4">
        <div class="row">
          <div class="col-lg-12">
            <p class="text-muted">
              <button
                class="btn btn-primary mb-2"
                style="width:100%"
                @click="integrateIp"
                :disabled="isSaving"
              >
                Vincular sua chave InfinitePay
              </button>
            </p>
          </div>
        </div>
      </div>
      <div>
        <b-modal
          v-model="showModalError"
          title="Conta não encontrada"
          hide-footer
        >
          <p class="my-4">
            Sua conta ainda não foi habilitada na Infinitepay. Verifique se o seu cadastro foi aprovado com a InfinitePay e tente novamente.
          </p>
          <p class="my-4">
            Qualquer dúvida, nos chame no <a href="#" onclick="'window.Intercom && window.Intercom(\'show\')'">chat</a>!
          </p>

          <button
            class="btn btn-primary mb-2"
            style="width:100%"
            @click="openCreateModal"
          >
            Criar conta grátis na InfinitePay
          </button>
        </b-modal>
      </div>
      <div>
        <b-modal
          v-model="ipModal"
          hide-footer
          hide-header
        >
          <iframe :src="currentUrl.includes('admin.confere.shop') ? `https://checkout.confere.shop?userId=${confereData.id}` : `https://checkout.confere.com.br?userId=${confereData.id}`" style="height: 100%; min-height: 650px; border: none; width: 100%"></iframe>
        </b-modal>
      </div>
    </template>
  </Application>
</template>

<script src="./js/AppConferePay.js"></script>
