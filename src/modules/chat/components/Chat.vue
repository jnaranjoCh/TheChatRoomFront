<template>
    <div class="chatComp">
        
        <div class="messages">
            <Msgs></Msgs>
        </div>

        <div class="send">
            <SendMsg></SendMsg>
        </div>

    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {
    name: 'Chat',
    components: {
        SendMsg: defineAsyncComponent( () => import('./chatMsg/sendMsg.vue')),
        Msgs: defineAsyncComponent( () => import('./chatMsg/Msgs.vue'))
    }
}
</script>

<style lang="scss" scoped>

    .chatComp {
        background: #262d31;
        height: 98vh;
        width: auto;
        margin-top: 1vh;
        margin-left: 1vw;
        margin-right: 1vw;
        color: #d8dee2;
        border-top: 2px solid #262d31;
        border-left: 2px solid #262d31;
        border-right: 2px solid #262d31;
        border-radius: 5px;
    }

    .messages {
        height: 90%;
    }

    .send {
        height: 10%;
    }

</style>