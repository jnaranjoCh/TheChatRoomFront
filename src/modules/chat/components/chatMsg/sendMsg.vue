<template>
    <div class="sendMsg">

        <div class="row boxMsg">

            <div class="col-11">
                <input type="text" class="form-control inputText" placeholder="Escriba un mensaje" maxlength="100"
                v-model="msg" v-on:keypress.enter="sendMsg()">
            </div>
            <div class="col-1 icons">
                <span class="enviarText" @click="sendMsg()">
                    Enviar
                </span>
            </div>

        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { postBasic, urlApis } from '@/config/apisRutes';
export default {
    name: 'SendMsg',
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        async sendMsg() {

            const data = await fetch( urlApis.insertMsg, postBasic( JSON.stringify({
                fecha: new Date(),
                texto: this.msg,
                idUserReceptor: this.getSalaActive.usuario.id,
                idUserEmisor: this.getUserIdActive,
                idSala: this.getSalaActive.id
            })));

            const response = await data.json();

            if (response) {
                
                //insertar mensaje en el state de mensajes

                this.$store.dispatch('actionInsertMsg', {

                    id: response._id,
                    fecha: response.fecha,
                    texto: response.texto,
                    reqOrResp: true
                });

                // enviar socket del response
                this.msg = '';
            }
        }
    },
    computed: {
        ...mapActions(['actionInsertMsg']),
        ...mapGetters(['getMsgsActive', 'getUserIdActive', 'getSalaActive'])
    }
}
</script>

<style lang="scss" scoped>

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
        background: #33383b;
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