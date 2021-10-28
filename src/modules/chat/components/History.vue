<template>
    <div class="histComp">
        <div class="presentComp">
            <Presentation></Presentation>
        </div>
        <div class="presentSala">
            <CreateSala></CreateSala>
        </div>
        <div class="presentList">
            <ListSala></ListSala>
        </div>
    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {
    name: 'History',
    components: {
        Presentation: defineAsyncComponent( () => import('./panel/Presentation.vue')),
        CreateSala: defineAsyncComponent( () => import('./panel/createSala.vue')),
        ListSala: defineAsyncComponent( () => import('./panel/ListSala.vue'))
    }
}
</script>

<style lang="scss" scoped>

    .histComp {
        background: #131c21;
        height: 98vh;
        width: auto;
        margin-top: 1vh;
        margin-left: 1vw;
        border-radius: 5px;
    }

    .presentComp {
        height: 10%;
    }

    .presentSala {
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .presentList {
        height: 80%;
    }

</style>
