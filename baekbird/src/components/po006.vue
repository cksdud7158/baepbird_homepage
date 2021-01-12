<template>
  <div data-app>
    <p @click.prevent="dialog = true" class="forCursor">이메일무단수집거부</p>
    <v-dialog v-model="dialog" fullscreen>
      <div class="forBack">
        <div class="container">
          <div class="part1">
            <div class="part1_1">
              <img
                src="@/assets/img/sam.svg"
                alt=""
                class="sam"
                v-show="widthCheck"
              />
              <p class="title">이메일무단수집거부</p>
              <div v-show="widthCheck"></div>
            </div>
            <img src="@/assets/img/bs001_5.svg" alt="" class="bar" />
          </div>
          <p class="item">2021년 1월 1일 게시</p>
          <div class="part2">
            <img src="@/assets/img/dot.svg" alt="" class="dot" />
            <p>공고</p>
          </div>
          <div class="content" v-show="!widthCheck">
            <p>본 웹사이트에 게시된 이메일 주소가</p>
            <p>전자우편 수집 프로그램이나</p>
            <p>그 밖의 기술적 장치를 이용하여</p>
            <p>무단으로 수집되는 것을 거부하며,</p>
            <p>이를 위반 시 정보통신법에 의해</p>
            <p>형사처벌됨을 유의하시기 바랍니다.</p>
          </div>
          <div class="content" v-show="widthCheck">
            <p>본 웹사이트에 게시된 이메일 주소가</p>
            <p>
              전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로
              수집되는 것을 거부하며,
            </p>
            <p>
              이를 위반 시 정보통신법에 의해 형사처벌됨을 유의하시기 바랍니다.
            </p>
          </div>
          <div class="part3">
            <img
              src="@/assets/img/x_blue.svg"
              alt=""
              class="x"
              @click.prevent="dialog = false"
            />
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      widthCheck: false,
    };
  },
  mounted() {
    let iWidth = window.innerWidth;
    if (iWidth > 960) {
      this.widthCheck = true;
    }
  },
};
</script>

<style scoped>
.forCursor {
  cursor: -webkit-grab;
  cursor: grab;
}
.forBack {
  height: 100vh;
  background-color: white;
}
.container {
  padding: 10vw;
  font-family: "NanumSquare";
}
.part1 {
  margin-top: 8vh;
  display: grid;
  justify-items: center;
}
.title {
  margin-top: 10px;
  font-family: "Jalnan";
  font-size: 1.6rem;
  color: #3d5ba9;
}
.bar {
  margin-top: 20px;
  width: 5vw;
}
.item {
  margin-top: 10%;
  text-align: right;
  font-size: 0.7rem;
}
.dot {
  width: 5px;
}
.part2 {
  display: flex;
  margin-top: 10%;
}
.part2 > p {
  margin-left: 10px;
  font-size: 0.7rem;
  font-weight: 600;
}
.content {
  margin-top: 10px;
  margin-left: 15px;
  font-size: 0.8rem;
}
.content > p {
  margin-top: 6px;
}

.part3 {
  position: absolute;
  bottom: 0;
  width: 80vw;
  height: 80px;
  display: flex;
}
.x {
  width: 30vw;
  margin: 0 auto;
  cursor: -webkit-grab;
  cursor: grab;
}

@media screen and (min-width: 961px) {
  .forBack {
    background-color: grey;
    height: calc(100vh - 120px);
    margin-top: 120px;
  }
  .container {
    padding: 0 10vw;
    margin: 0 auto;
    width: 80vw;
    background-color: #fff;
    height: calc(100vh - 120px);
    padding-top: 2vh;
  }
  .title {
    font-size: 2rem;
  }

  .part1_1 {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .sam {
    width: 1vw;
    transform: rotate(270deg);
  }
  .bar {
    width: 20px;
  }
  .item {
    margin-top: 7vh;
    font-size: 1rem;
  }

  .part2 {
    margin-top: 5vh;
  }
  .part2 > p {
    font-size: 1rem;
  }
  .content {
    font-size: 1.4rem;
  }
  .part3 {
    position: absolute;
    bottom: 0;
    width: 60vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .x {
    height: 60px;
    cursor: -webkit-grab;
    cursor: grab;
  }
}

@media screen and (min-width: 961px) and (max-width: 1024px) {
  .title {
    font-size: 1.5rem;
  }

  .item {
    font-size: 0.8rem;
  }

  .part2 {
    margin-top: 5vh;
  }
  .part2 > p {
    font-size: 0.7rem;
  }
  .content {
    font-size: 0.9rem;
  }
  .x {
    width: 15vw;
  }
}
@media all and (min-width: 768px) and (max-width: 960px) {
  .title {
    font-size: 2rem;
  }

  .item {
    font-size: 1.1rem;
  }

  .part2 > p {
    font-size: 0.9rem;
  }
  .content {
    font-size: 1.2rem;
  }
  .part3 {
    margin-top: 150px;
  }
}
</style>
