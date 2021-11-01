<template>
    <InfoUser :nameUser="sala.usuario.nickName"></InfoUser>
    <div class="historyMsg container">
        
        <div v-if="getMsgsActive.length > 0" class="scrollMsg" id="scrollMsg">
            
            <div v-for="(msg, index) in getMsgsActive" :key="index">

                <div class="directionCard" v-bind:class="{ 'activeFlex': msg.reqOrResp }">

                    <div class="textBoxMsg">

                        <div class="card" v-bind:class="{ 'cardRight': msg.reqOrResp, 'cardLeft': !msg.reqOrResp }">
                            <div class="card-body">
                                <h6 class="card-subtitle mb-2">{{ msg.texto }}</h6>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>

        <div v-else class="noMsgs">
            <h2>No hay mensajes!!!</h2>
        </div>
    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';

export default {
    name: 'Msgs',
    props: {
        sala: {
            type: Object
        }
    },
    data() {
        return {
            scrollMsg: ''
        }
    },
    components: {
        InfoUser: defineAsyncComponent( () => import('./InfoUser.vue')),
    },
    computed: {
        ...mapGetters(['getMsgsActive'])
    },
    updated() {
        let objDiv = document.getElementById("scrollMsg");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
}
</script>

<style lang="scss" scoped>

    @import '@/styles/styles.scss';

    .historyMsg {
        height: 100%;
        width: 100%;
        background: $historyChat;
        padding-top: 2vh;
    }

    .noMsgs {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: $backgroundOne;
    }

    .activeFlex {
        justify-content: end;
    }

    .cardRight {
        background: $cardRight;
        color: white;
        margin-right: 1vw;
    }

    .cardLeft {
        color: $backgroundOne;
    }

    .directionCard {
        display: flex;
    }

    .textBoxMsg {
        max-width: 50%;
        min-width: 10%;
        width: auto;
        margin-bottom: 2vh;
    }

    .scrollMsg {
        height: 90%;
        overflow-y: auto;
        scroll-snap-type: y proximity;

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