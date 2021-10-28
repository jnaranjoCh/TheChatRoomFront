<template>
  <div class="listHistory">
      <div v-if="historial.length > 0">

          <div v-for="(hist, index) in historial" :key="index">

              <TagUser :user="hist"></TagUser>

          </div>

      </div>
      <div v-else>

        <div class="infoWidthChat">
          No tienes chats por el momento!!!
        </div>

      </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {
    name: 'ListSala',
    components: {
        TagUser: defineAsyncComponent( () => import('./TagUser.vue'))
    },
    data() {
        return {
            historial: [

                // {
                //     nickName: "jnaranjoCh",
                //     lastMsg: "no se"
                // },
                // {
                //     nickName: "luis naranjo",
                //     lastMsg: "no se 2"
                // },
                // {
                //     nickName: "manuel fernandes",
                //     lastMsg: "no se 3"
                // },
                // {
                //     nickName: "cesar cordoba",
                //     lastMsg: "no se 4"
                // },
                // {
                //     nickName: "david chourio",
                //     lastMsg: "no se 5"
                // },
                // {
                //     nickName: "eduardo valderrama",
                //     lastMsg: "no se 6"
                // }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    .listHistory {
        height: 100%;
    }

    .infoWidthChat {
        display: flex;
        justify-content: center;
        color: #33383b;
    }

</style>