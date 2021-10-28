<template>
  <div class="tagUser">
    <div class="imgUser">
        <img src="@/assets/user.png" alt="user" class="image"/>
    </div>
    <div class="infoUser">
      <div>
        <label class="nickName">{{ user.nickName }}</label>
      </div>
      <div>
        <span class="lastMsg"> {{ user.lastMsg }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TagUser',
    props: {
      user: {
        type: Object,
        required: true
      }
    },
}
</script>

<style lang="scss" scoped>

  .imgUser {
      width: 15%;
      text-align: center;
      align-self: center;
  }

  .infoUser {
    width: 85%;
    padding-left: 1vw;
    align-self: center;
  }

  .image {
      width: 80%;
  }

  .tagUser {
    display: flex;
    flex-direction: row;
    height: 10vh;
    border-top: 1px solid #33383b;
    border-bottom: 1px solid #33383b;

    &:hover {
      cursor: pointer;
      background: #33383b;
    }
  }

  .nickName {
    color: #c8cdd2;
    font-size: 1.1vw;
  }

  .lastMsg {
    color: #85898c;
    font-size: 0.9vw;
  }

  .separator {
    display: flex;
    justify-content: flex-end;
  }

  .linea {
    color: #c8cdd2;
    width: 80%;
  }

</style>
