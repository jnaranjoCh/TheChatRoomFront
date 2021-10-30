<template>
  <div class="createSala">
      <input type="text" class="form-control inputCreate" placeholder="Buscar usuario" maxlength="30" 
      v-model="findUser" v-on:keypress.enter="createNewSala()">
  </div>
</template>

<script>

import { mapState } from 'vuex';
import { postBasic, urlApis } from '@/config/apisRutes';

const Swal = require('sweetalert2');

export default {
    name: 'CreateSala',
    data() {
        return {
            findUser: ''
        }
    },
    methods: {
        async createNewSala() {

            if (this.findUser.length === 0)
                return;

            const data = await fetch( urlApis.createSala, postBasic( JSON.stringify({
                usuarioEmisor: this.userActive.nickName,
                usuarioReceptor: this.findUser
            })));

            if (data.status > 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrió un error',
                    text: 'No se pudo crear la sala'
                });

                return;
            }

            const response = await data.json();

            if (!response.status) {

                const sala = {
                    id: response._id,
                    ultMsg: '',
                    usuario: {
                        id: response.usuarioReceptor._id,
                        nickName: response.usuarioReceptor.nickName
                    }
                }

                this.$store.dispatch('actionUpdateSala', sala);
                this.$store.dispatch('actionUpListSalas', sala);
            } else {

                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrió un error',
                    text: response.message
                });
            }

            this.findUser = '';
        }
    },
    computed: {
        ...mapState(['userActive'])
    }
}
</script>

<style lang="scss" scoped>

    @import '@/styles/styles.scss';

    .createSala {
        width: 95%;
    }

    .inputCreate {
        background: $backgroundGrayLight;
        border-radius: 20px;
        color: white;
        padding-left: 5%;
        border: none;
    }

</style>