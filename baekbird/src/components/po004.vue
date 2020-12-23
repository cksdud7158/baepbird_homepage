<template>
  <div>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      v-if="windowSize"
      width="70vw"
    >
      <template v-slot:activator="{ on, attrs }">
        <h1 dark v-bind="attrs" v-on="on" id="companyLogo">
          여기에 이미지 넣을거
        </h1>
      </template>
      <div id="first">
        <div id="contents">
          <div>
            <h1>컨텐츠가 들어감</h1>
          </div>
        </div>
        <div id="forClose">
          <v-spacer></v-spacer>
          <v-btn dark @click="dialog = false">
            I accept
          </v-btn>
        </div>
      </div>
    </v-dialog>
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
      v-if="!windowSize"
    >
      <template v-slot:activator="{ on, attrs }">
        <h1 dark v-bind="attrs" v-on="on" id="companyLogo">
          모바일 버전
        </h1>
      </template>
      <div id="first">
        <div id="contents">
          <div>
            <h1>컨텐츠가 들어감</h1>
          </div>
        </div>
        <div id="forClose">
          <v-spacer></v-spacer>
          <v-btn dark @click="dialog = false">
            I accept
          </v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>
<style scoped src="@/assets/css/remove_css.css"></style>

<script>
export default {
  props: ["companys"],
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      windowSize: false,
    };
  },
  mounted() {
    this.windowSizeJudge();
  },
  methods: {
    windowSizeJudge() {
      const windowWidth = window.innerWidth;
      if (windowWidth > 961) {
        this.windowSize = true;
      }
      return null;
    },
  },
};
</script>

<style scoped>
#first {
  background-color: #fff;
  height: 100vh;
  padding-top: 50px;
}
#contents {
  background-color: #fff;
  height: 90%;
  overflow: scroll;
}
#forClose {
  height: 10%;
  background-color: green;
}

@media screen and (min-width: 961px) {
  #companyLogo {
  }
  #first {
    height: 70vh;
    margin: 0 auto;
    padding-top: 0;
  }
  #test {
    background-color: red;
  }
}
</style>
