<template>
  <div class="listHistory">
      <div v-if="getListSalas.length > 0" class="scrollColumn">

        <div v-for="(hist, index) in getListSalas" :key="index">

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
import { mapState, mapMutations, mapGetters } from 'vuex';
import { urlApis, getBasic } from '@/config/apisRutes';

const Swal = require('sweetalert2');

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
        ...mapMutations(['updateUser', 'updateSalas']),
        ...mapState(['userActive', 'salasListActive', 'salaActive']),
        ...mapGetters(['getListSalas'])
    },
    methods: {

        async getSalas() {

            const data = await fetch( urlApis.getSalas + this.userActive.nickName, getBasic);

            if (data.status > 400) {

                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrió un error',
                    text: 'No se pudo crear la sala'
                });

                return;
            }
            
            const response = await data.json();

            if (response) {

                this.historial = response.map( (user, index) => {

                    let userReq = this.userActive.nickName === user.usuarioEmisor.nickName ?
                                    user.usuarioReceptor : user.usuarioEmisor;

                    return {
                        index,
                        id: user._id,
                        ultMsg: user.ultimoMsg,
                        usuario: {
                            id: userReq._id,
                            nickName: userReq.nickName
                        }
                    }
                });

                this.$store.dispatch('actionListSalas', this.historial);

            } else
                this.historial = [];
        },
        insertMsg() {

            this.sockets.subscribe('msg:'+this.userActive.id, data => {

                const sala = this.salasListActive.find(x => x.id == data.idSala);

                if (sala) {

                    this.$store.dispatch('actionUltSala', { ultMsg: data.mensaje, index: sala.index });
                    
                    const salaActiva = this.salaActive !== null && this.salaActive.id === data.idSala;

                    if (salaActiva) {
                    
                        this.$store.dispatch('actionInsertMsg', {
                            id: data.idMensaje,
                            fecha: data.fecha,
                            texto: data.mensaje,
                            reqOrResp: false
                        });
                    
                    } else {
                    
                        console.log('no esta abierta');
                        // ---indico en el front que esa sala ha recibido un mensaje (como en whatsApp, icono verde)
                    }    

                } else {
                    
                    this.findSalaAndAddState(data.idSala);
                    // ---indico en el front que esa sala ha recibido un mensaje (como en whatsApp, icono verde)
                }
            });
        },
        async findSalaAndAddState(idSala) {

            const sala = await fetch( urlApis.findSalaById + idSala, getBasic);
            const response = await sala.json();

            if (response._id) {

                const newSala = {
                    id: response._id,
                    index: this.salasListActive.length,
                    ultMsg: response.ultimoMsg,
                    usuario: {
                        id: response.usuarioEmisor._id,
                        nickName: response.usuarioEmisor.nickName
                    }
                }

                this.$store.dispatch('actionUltSala', { ultMsg: response.ultimoMsg, index: newSala.index });
                this.$store.dispatch('actionUpListSalas', newSala);

            } else {
                console.log('Ocurrio un problema la sala no existe');
            }
        }
    },
    async created() {

        await this.getSalas();
        this.insertMsg();
    },
    sockets: {
        connect() {
            console.log('socket chat connect');
        }
    },
    unmounted() {
        this.sockets.unsubscribe('msg:'+this.userActive.id);
    }
}
</script>

<style lang="scss" scoped>

    @import '@/styles/styles.scss';

    .listHistory {
        height: 100%;
    }

    .infoWidthChat {
        display: flex;
        justify-content: center;
        color: $backgroundGrayLight;
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
            background-color: $backgroundGrayLight;
            border-radius: $borderRaiusGeneric;
            border: none;
        }

        &::-webkit-scrollbar-track {
            border-radius: $borderRaiusGeneric;  
        }
    }

</style>