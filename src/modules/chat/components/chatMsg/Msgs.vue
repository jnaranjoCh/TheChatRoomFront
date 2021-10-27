<template>
    <div class="historyMsg container">
        
        <div v-if="messages.length > 0">
            
            <div v-for="(msg, index) in messages" :key="index">

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
export default {
    name: 'Msgs',
    data() {
        return {
            messages: [{
                texto: "mensaje 1111111111",
                reqOrResp: false
            },
            {
                texto: "si es true es porque yo envio",
                reqOrResp: true
            }]
        }
    }
}
</script>

<style lang="scss" scoped>

    .historyMsg {
        height: 100%;
        width: 100%;
        background: #0d1418;
        padding-top: 2vh;
    }

    .noMsgs {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: #33383b;
    }

    .activeFlex {
        justify-content: end;
    }

    .cardRight {
        background: #056162;
    }

    .cardLeft {
        color: #33383b;
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

</style>