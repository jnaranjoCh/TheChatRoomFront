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
import { mapState, mapMutations } from 'vuex';

export default {
    
    components: {
        History: defineAsyncComponent( () => import('@/modules/chat/components/History.vue')),
        Chat: defineAsyncComponent( () => import('@/modules/chat/components/Chat.vue'))
    },
    created() {

        if (this.userActive === null)
            this.validateUser();
    },
    computed: {
        ...mapMutations(['updateUser']),
        ...mapState(['userActive'])
    },
    methods: {

        validateUser() {
            this.$store.dispatch('actionUserUp', JSON.parse( sessionStorage.getItem('user') ));
        }
    }
}
</script>

<style scoped lang="scss">

    @import '@/styles/styles.scss';

    .home {
        display: flex;
        flex-direction: row;
        height: 100vh;
        background: $backgroundThree;
    }

    .history {
        width: 25%;
    }

    .chat {
        width: 75%;
    }

</style>