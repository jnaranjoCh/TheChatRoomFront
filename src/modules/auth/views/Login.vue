<template>
    <div class="screen">
        <div class="login">
            <div class="formulario">
                
                <div class="squarInput">
                    <label for="user" class="form-label nameUser">Ingrese el usuario</label>
                    <input type="text" class="form-control inputUser" id="user" maxlength="30"
                            v-model="user" autocomplete="off" v-on:keydown.delete="deleteData">
                    <div id="emailHelp" class="form-text" v-if="noExist">El usuario no existe, desea registrarlo?</div>
                </div>
                <div>
                    <button type="button" v-if="!noExist" class="btn btn-primary inputUser" @click="viewUser()" :disabled="user.length == 0">Ingresar</button>
                    <button v-else class="btn btn-primary inputUser" @click="saveUSer()">Registrar</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import { mapMutations } from 'vuex';
import { urlApis, postBasic, getBasic } from '@/config/apisRutes';

const Swal = require('sweetalert2');

export default {
    data() {
        return {
            user: '',
            noExist: false
        }
    },
    methods: {
        async viewUser() {

            const data = await fetch( urlApis.getUser + this.user, getBasic);
            const response = await data.json();

            if (response.nickName) {
                this.saveStateUser(response);
                this.$router.push({ path: '/home' });
            }
            else
                this.noExist = true;
        },
        async saveUSer() {

            const data = await fetch( urlApis.createUser, postBasic( JSON.stringify({ nickName: this.user })));
            const response = await data.json();

            if (response) {

                this.saveStateUser(response);
                this.$router.push({ path: '/home' });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrió un error',
                    text: 'No se pudo registrar el usuario'
                });
            }
        },
        saveStateUser(newUSer) {

            const insertUser = { id: newUSer._id, nickName: newUSer.nickName };
            localStorage.setItem('user', JSON.stringify(insertUser));
            this.updateUser(insertUser);
        },
        deleteData() {

            if (this.noExist) {
                this.user = '';
                this.noExist = !this.noExist;
            }
        },
        ...mapMutations(['updateUser'])  
    }
}
</script>

<style lang="scss" scoped>

    @import '@/styles/styles.scss';

    .screen {
        background: $backgroundOne;
        display: flex;
        flex-direction: row;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .login {
        border: 1px solid $backgroundGrayLight;
        border-radius: 20px;
        height: 35%;
        width: 20%;
    }

    .nameUser {
        color: white;
    }

    .formulario {
        padding-top: 10%;
        padding-left: 10%;
    }

    .inputUser {
        width: 90%;
    }

    .squarInput {
        height: 20vh;
    }

</style>