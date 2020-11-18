<template>
  <div class="ml-profile">
    <span v-if="!profile">Carregando...</span>
    <button
      class="ml-profile__open-sign btn btn-sm btn-primary"
      @click="openSignInWindow()"
      v-if="profile && !profile.id"
    >
      Vincular conta
    </button>
    <div v-if="profile && profile.id">
      <div>
        <strong>ID: </strong><span>{{ profile.id }}</span>
      </div>
      <div>
        <strong>E-mail: </strong><span>{{ profile.email }}</span>
      </div>
      <div>
        <strong>Nome: </strong
        ><span>{{ profile.first_name }} {{ profile.last_name }}</span>
      </div>
      <div class="ml-profile__show_profile">
        <a
          :href="profile.permalink"
          target="_blank"
          class="btn btn-sm btn-primary"
          >Ver perfil</a
        >
      </div>
    </div>
  </div>
</template>

<script src="./js/AppMercadoLivreAuth.js"></script>

<style lang="scss" scoped>
.ml-profile {
  &__open-sign {
    margin-bottom: 16px;
  }
  &__show_profile {
    margin-top: 16px;
  }
  strong {
    font-weight: bold;
  }
}
</style>
