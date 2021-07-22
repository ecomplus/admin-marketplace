<template>
  <Application
    :is-settings-visible="!!(application.data && application.data.merchant_key)"
    @load="handleAppLoad"
  >
    <template
      v-if="!(application.data && application.data.merchant_key)"
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
        >
          <p class="my-4">
            Sua conta ainda não foi habilitada na Infinitepay. Verifique se o seu cadastro foi aprovado com a InfinitePay e tente novamente.
          </p>
          <p class="my-4">
            Qualquer dúvida, pode chamar eles no chat: <a href="https://infinitepay.io" target="_blank" rel="nofollow noopener noreferrer">https://infinitepay.io</a>
          </p>
        </b-modal>
      </div>
    </template>
  </Application>
</template>

<script src="./js/AppConferePay.js"></script>
