<template>
  <div class="presentation">
      <div class="imgUser">
          <img src="@/assets/user.png" alt="user" class="image"/>
      </div>
      <div class="nameUser">
          <h4> {{ userActive.nickName }} </h4>
      </div>
      <div class="logout" @click="logout()">
          Salir
      </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'Presentation',
    computed: {
        ...mapState(['userActive'])
    },
    methods: {
        logout() {
            this.$router.push({ path: '/login' });
            localStorage.removeItem('user');
        }
    },
    unmounted() {
        this.$store.dispatch('resetAllStates');
    }
}
</script>

<style lang="scss" scoped>

    .presentation {
        background: #33383b;
        display: flex;
        flex-direction: row;
        color: white;
        height: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .nameUser {
        width: 80%;
        align-self: center;
        padding-left: 1vw;
        font-size: 1.5vw;
    }

    .imgUser {
        width: 20%;
        text-align: center;
        align-self: center;
    }

    .image {
        width: 75%;
    }

    .logout {
        align-self: center;
        margin-right: 1vw;
        cursor: pointer;
    }

</style>