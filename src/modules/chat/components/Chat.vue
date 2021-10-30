<template>
    <div class="chatComp" v-if="!this.validateSalaActive">
        <div class="messages">
            <Msgs :sala="getSalaActive"></Msgs>
        </div>
        <div class="send">
            <SendMsg></SendMsg>
        </div>
    </div>
    <div v-else class="chatComp">
        <div class="msgOutChat">
            <h3>Crea o selecciona un chat</h3>
        </div>
    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
    name: 'Chat',
    components: {
        SendMsg: defineAsyncComponent( () => import('./chatMsg/sendMsg.vue')),
        Msgs: defineAsyncComponent( () => import('./chatMsg/Msgs.vue'))
    },
    computed: {
        ...mapGetters(['validateSalaActive', 'getSalaActive'])
    }
}
</script>

<style lang="scss" scoped>

    @import '@/styles/styles.scss';

    .chatComp {
        background: $backgroundTwo;
        height: 98vh;
        width: auto;
        margin-top: 1vh;
        margin-left: 1vw;
        margin-right: 1vw;
        color: $fontColorChat;
        border-top: 2px solid $backgroundTwo;
        border-left: 2px solid $backgroundTwo;
        border-right: 2px solid $backgroundTwo;
        border-radius: $borderRaiusGeneric;
    }

    .messages {
        height: 90%;
    }

    .send {
        height: 10%;
    }

    .msgOutChat {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: $backgroundGrayLight;
    }

</style>