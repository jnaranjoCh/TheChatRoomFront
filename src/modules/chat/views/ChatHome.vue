<template>

        <div class="home">

            <div class="history">
                <History></History>
            </div>
            <div class="chat">
                <Chat></Chat>
            </div>

        </div>

</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {
    
    components: {
        History: defineAsyncComponent( () => import('@/modules/chat/components/History.vue')),
        Chat: defineAsyncComponent( () => import('@/modules/chat/components/Chat.vue'))
    }
}
</script>

<style scoped lang="scss">

    .home {
        display: flex;
        flex-direction: row;
        height: 100vh;
        background:  #090e11;
    }

    .history {
        width: 25%;
    }

    .chat {
        width: 75%;
    }

</style>