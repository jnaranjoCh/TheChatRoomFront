<template>
  <div class="tagUser" v-on:click="selectChat()" v-bind:class="{ 'selectTagUser': validateSelect() }">
    <div class="imgUser">
        <img src="@/assets/user.png" alt="user" class="image"/>
    </div>
    <div class="infoUser">
      <div>
        <label class="nickName">{{ user.usuario.nickName }}</label>
      </div>
      <div>
        <span class="lastMsg"> {{ user.ultMsg }} </span>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';
import { getBasic, urlApis } from '@/config/apisRutes';

export default {
    name: 'TagUser',
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    methods: {

      validateSelect() {
        return this.getIndexSala === this.user.index;
      },
      selectChat() {
        this.getMessages();
        this.updateSala(this.user);
      },
      async getMessages() {

            const data = await fetch( urlApis.getMsgs + this.user.id, getBasic);
            const response = await data.json();

            const result = response.map( msg => {

              return {
                id: msg._id,
                fecha: msg.fecha,
                texto: msg.texto,
                reqOrResp: msg.usuarioReceptor === this.user.usuario.id
              }
            });

            this.$store.dispatch('actionUpdateMsgs', result);
      },
      ...mapMutations(['updateSala']),
    },
    computed: {
      ...mapGetters(['getIndexSala'])
    }
}
</script>

<style lang="scss" scoped>

  @import '@/styles/styles.scss';

  .imgUser {
      width: 15%;
      text-align: center;
      align-self: center;
  }

  .infoUser {
    width: 85%;
    padding-left: 1vw;
    align-self: center;
  }

  .image {
      width: 80%;
  }

  .tagUser {
    display: flex;
    flex-direction: row;
    height: 10vh;
    border-top: 1px solid $backgroundGrayLight;
    border-bottom: 1px solid $backgroundGrayLight;

    &:hover {
      cursor: pointer;
      background: $backgroundGrayLight;
    }
  }

  .nickName {
    color: $fontColorChat;
    font-size: 1.1vw;
  }

  .lastMsg {
    color: $fontColorChatFond;
    font-size: 0.9vw;
  }

  .separator {
    display: flex;
    justify-content: flex-end;
  }

  .selectTagUser {
    background: $backgroundGrayLight;
  }

</style>
