<template>
  <div id="menubar">
    <div class="img">
      <img src="@/assets/img/menubar_1.svg" alt="" @click.prevent="close" />
    </div>
    <p @click.prevent="$router.push('/about')" class="item">ABOUT</p>
    <p @click.prevent="$router.push('/planning')" class="item">PLANNING</p>
    <p @click.prevent="$router.push('/branding')" class="item">BRANNDING</p>
    <p @click.prevent="$router.push('/advertising')" class="item">
      ADVERTISING
    </p>
    <p @click.prevent="$router.push('/contact')" class="item">CONTACT</p>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<style scoped>
#menubar {
  margin-top: 8vh;
  height: 92vh;
  background-color: #3d5ba9;
}
.img {
  display: grid;
  justify-items: end;
}
img {
  margin-top: 5vh;
  width: 7vw;
  margin-right: 10vw;
  cursor: -webkit-grab;
  cursor: grab;
}
.item {
  margin-left: 10vw;
  color: white;
  font-family: "NanumSquareExtraBold";
  font-size: 2.2rem;
  margin-top: 7vh;
  cursor: -webkit-grab;
  cursor: grab;
}

@media screen and (min-width: 961px) {
  #menubar {
    margin-top: 120px;
    height: calc(100vh - 120px);
  }
  img {
    width: 2vw;
    margin-top: 8vh;
  }
  .item {
    margin-left: 20vw;
    font-size: 2.5rem;
  }
}
@media screen and (min-width: 961px) and (max-width: 1024px) {
  .item {
    font-size: 1.8rem;
  }
}
</style>

<script>
export default {
  methods: {
    close() {
      this.$emit("close", false);
    },
  },
};
</script>
