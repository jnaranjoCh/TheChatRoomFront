<template>
    <div class="sendMsg">

        <div class="row boxMsg">

            <div class="col-10">
                <input type="text" class="form-control inputText" placeholder="Escriba un mensaje" maxlength="100"
                v-model="msg" v-on:keypress.enter="sendMsg()">
            </div>
            <div class="col-2 icons">
                <span class="enviarText" @click="sendMsg()">
                    Enviar
                </span>
            </div>

        </div>

    </div>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex';
import { postBasic, urlApis } from '@/config/apisRutes';

const Swal = require('sweetalert2');

export default {
    name: 'SendMsg',
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        async sendMsg() {

            if (this.msg.length === 0)
                return;

            const data = await fetch( urlApis.insertMsg, postBasic( JSON.stringify({
                fecha: new Date(),
                texto: this.msg,
                idUserReceptor: this.getSalaActive.usuario.id,
                idUserEmisor: this.getUserIdActive,
                idSala: this.getSalaActive.id
            })));

            if (data.status > 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrió un error',
                    text: 'No se pudo enviar el mensaje'
                });

                return;
            }

            const response = await data.json();

            if (response) {

                this.$store.dispatch('actionInsertMsg', {
                    id: response._id,
                    fecha: response.fecha,
                    texto: response.texto,
                    reqOrResp: true
                });
                this.$store.dispatch('actionUltSala', { ultMsg: response.texto, index: this.salaActive.index });

                this.sendMsgSocket(response);

                this.msg = '';

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrió un error',
                    text: 'No se pudo registrar el mensaje'
                });
            }
        },
        sendMsgSocket(response) {

            const info = {

                idSala: response.sala._id,
                idUsuarioReceptor: response.usuarioReceptor._id,
                idUsuarioEmisor: response.usuarioEmisor._id,
                mensaje: response.texto,
                fecha: response.fecha,
                idMensaje: response._id
            }

            this.$socket.emit('msgToServer', info);
        }        
    },
    computed: {
        ...mapActions(['actionInsertMsg']),
        ...mapGetters(['getMsgsActive', 'getUserIdActive', 'getSalaActive']),
        ...mapState(['salaActive'])
    },
    sockets: {
        connect() {
            console.log('socket connect');
        }
    } 
}
</script>

<style lang="scss" scoped>

    @import '@/styles/styles.scss';

    .boxMsg {
        margin: auto;
        height: 100%;
        align-items: center;
    }

    .sendMsg {
        height: 100%;
    }

    .icons {
        text-align: center;
    }

    .inputText {
        background: $backgroundGrayLight;
        border-radius: 20px;
        color: white;
        padding-left: 2%;
        border: none;
    }

    .enviarText {
        color: white;
        cursor: pointer;
    }

</style>