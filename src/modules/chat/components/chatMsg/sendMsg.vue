<template>
    <div class="sendMsg">

        <div class="row boxMsg">

            <div class="col-11">
                <input type="text" class="form-control inputText" placeholder="Escriba un mensaje" maxlength="100">
            </div>
            <div class="col-1 icons">
                <span class="enviarText">
                    Enviar
                </span>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'SendMsg'
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
    }

    .enviarText {
        color: white;
        cursor: pointer;
    }

</style>