<template>
  <div id="menubar">
    <div class="img">
      <img src="@/assets/img/menubar_1.svg" alt="" @click.prevent="close" />
    </div>
    <p @click.prevent="$router.push('/about')" class="item">ABOUT</p>
    <p @click.prevent="$router.push('/work')" class="item">WORK</p>
    <p @click.prevent="$router.push('/contact')" class="item">CONTACT</p>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<style scoped>
#menubar {
  margin-top: 50px;
  height: calc(100vh - 50px);
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
  font-family: "NanumSquare";
  font-size: 3rem;
  font-weight: 600;
  margin-top: 60px;
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
  .item:nth-child(2) {
    margin-top: 100px;
  }
  .item {
    margin-top: 60px;
    margin-left: 20vw;
    font-size: 6rem;
  }
}
@media screen and (min-width: 961px) and (max-width: 1024px) {
  .item {
    font-size: 4rem;
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
