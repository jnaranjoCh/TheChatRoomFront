<template>
  <div class="infoUser">
    <div class="imgUser">
        <img src="@/assets/user.png" alt="user" class="image"/>
    </div>
    <div class="nickName">
        <h4>{{ nameUser }}</h4>
    </div>
  </div>
</template>

<script>

export default {
    name: 'InfoUser',
    props: {
        nameUser: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

    .infoUser {
        height: 10.8%;
        display: flex;
        flex-direction: row;
        background: #33383b;
    }

    .imgUser {
        width: 10%;
        text-align: center;
        align-self: center;
    }

    .image {
      width: 50%;
    }

    .nickName {
        width: 90%;
        align-self: center;
    }

</style>
