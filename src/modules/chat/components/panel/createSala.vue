<template>
  <div class="createSala">
      <input type="text" class="form-control inputCreate" placeholder="Buscar usuario" maxlength="30">
  </div>
</template>

<script>
export default {
    name: 'CreateSala'
}
</script>

<style lang="scss" scoped>

    .createSala {
        width: 95%;
    }

    .inputCreate {
        background: #33383b;
        border-radius: 20px;
        color: white;
        padding-left: 5%;
        border: none;
    }

</style>