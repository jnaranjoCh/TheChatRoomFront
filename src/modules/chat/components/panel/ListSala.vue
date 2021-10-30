<template>
  <div class="listHistory">
      <div v-if="historial.length > 0" class="scrollColumn">

        <div v-for="(hist, index) in historial" :key="index">

            <TagUser :user="hist"></TagUser>

        </div>
        
      </div>
      <div v-else>

        <div class="infoWidthChat">
          No tienes chats por el momento!!!
        </div>

      </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'
import { mapState, mapMutations } from 'vuex';
import { urlApis, getBasic } from '@/config/apisRutes';

export default {
    name: 'ListSala',
    components: {
        TagUser: defineAsyncComponent( () => import('./TagUser.vue'))
    },
    data() {
        return {
            historial: []
        }
    },
    computed: {
        ...mapMutations(['updateUser']),
        ...mapState(['userActive'])
    },
    methods: {

        async getSalas() {

            const data = await fetch( urlApis.getSalas + this.userActive.nickName, getBasic);
            const response = await data.json();

            if (response) {

                this.historial = response.map( user => {

                    let userReq = this.userActive.nickName === user.usuarioEmisor.nickName ?
                                    user.usuarioReceptor : user.usuarioEmisor;

                    return {
                        id: user._id,
                        ultMsg: user.ultimoMsg,
                        usuario: {
                            id: userReq._id,
                            nickName: userReq.nickName
                        }
                    }
                });

            } else
                this.historial = [];
        }
    },
    created() {

        this.getSalas();
    }
}
</script>

<style lang="scss" scoped>

    .listHistory {
        height: 100%;
    }

    .infoWidthChat {
        display: flex;
        justify-content: center;
        color: #33383b;
    }

    .scrollColumn {
        
        height: 100%;
        overflow-y: auto;

        &::-webkit-scrollbar {
            -webkit-appearance: none;
        }

        &::-webkit-scrollbar:vertical {
            width: 3px;
        }

        &::-webkit-scrollbar-button:increment, &::-webkit-scrollbar-button {
            display: none;
        } 

        &::-webkit-scrollbar-thumb {
            background-color: #33383b;
            border-radius: 5px;
            border: none;
        }

        &::-webkit-scrollbar-track {
            border-radius: 5px;  
        }
    }

</style>