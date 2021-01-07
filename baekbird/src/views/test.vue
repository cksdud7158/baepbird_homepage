<template>
  <div class="po005" data-app>
    <p class="last" @click.prevent="dialog = true">개인정보처리방침</p>
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
              <p class="title">개인정보처리방침</p>
              <div v-show="widthCheck"></div>
            </div>
            <img src="@/assets/img/bs001_5.svg" alt="" class="bar" />
          </div>
          <p class="item">2021년 1월 1일 게시</p>
          <div class="part2">
            <img src="@/assets/img/dot.svg" alt="" class="dot" />
            <p>목적</p>
          </div>
          <div class="content" v-show="widthCheck">
            <p>
              온라인 문의사항에 답변을 드리기 위한 목적으로 개인정보를
              수집·이용·처리하며,
            </p>
            <p>목적 외의 용도로 사용하지 않습니다.</p>
          </div>
          <div class="content" v-show="!widthCheck">
            <p>온라인 문의사항에 답변을 드리기 위한 목적으로</p>
            <p>개인정보를 수집·이용·처리하며,</p>
            <p>목적 외의 용도로 사용하지 않습니다.</p>
          </div>
          <div class="part2">
            <img src="@/assets/img/dot.svg" alt="" class="dot" />
            <p>항목</p>
          </div>
          <div class="content">
            <p>성함 · 연락처 · 이메일</p>
          </div>
          <div class="part2">
            <img src="@/assets/img/dot.svg" alt="" class="dot" />
            <p>동의거부</p>
          </div>
          <div class="content" v-show="!widthCheck">
            <p>본 규정 및 개인정보의 수집·이용·처리에 대한</p>
            <p>동의를 거부할 수 있으며,</p>
            <p>이 경우 온라인 문의사항에 대한 답변이 제한됩니다.</p>
          </div>
          <div class="content" v-show="widthCheck">
            <p>
              본 규정 및 개인정보의 수집·이용·처리에 대한 동의를 거부할 수
              있으며,
            </p>
            <p>이 경우 온라인 문의사항에 대한 답변이 제한됩니다.</p>
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
    if (iWidth > 768) {
      this.widthCheck = true;
    }
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  padding: 10vw;
  font-family: "NanumSquare";
  background-color: #fff;
}
.part1 {
  margin-top: 8vh;
  display: grid;
  justify-items: center;
}
.x {
  width: 6vw;
  justify-self: end;
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
  margin-top: 13vh;
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
    margin-top: 3vh;
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
  .x {
    width: 10vw;
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
    margin-top: 100px;
  }
}
</style>
