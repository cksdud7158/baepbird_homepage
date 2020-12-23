import Typewriter from "typewriter-effect/dist/core";

export default {
  data() {
    return {
      wHeight: window.innerHeight,
    };
  },
  components: { Typewriter },
  mounted() {
    setTimeout(() => {
      this.typing();
      setTimeout(() => {
        this.typing2();
      }, 2000);
    }, 700);

    setTimeout(() => {
      this.typing3();
    }, 3000);
    
  },
  methods: {
    typing() {
      const app = document.getElementById("text1");
      const typewriter = new Typewriter(app, {
        loop: false,
        delay: 75,
        cursor: "",
      });
      typewriter
        .typeString(
          "<p style='margin-bottom: 10px'>안녕하세요, </p><p>처음 뵙겠습니다.</p>  "
        )
        .start()
        .pauseFor(300)
        .callFunction(() => {
          typewriter.stop();
        });
      
      

    },
    getCookie() {
      var value = document.cookie.match(
        "(^|;) ?" + "dayFirstVisit" + "=([^;]*)(;|$)"
      );
      return value ? value[2] : null;
    },
    typing2(){
      const baep = document.getElementById("text2");
      const typewriter2 = new Typewriter(baep, {
        loop: false,
        delay: 75,
        cursor: "",
      });
      typewriter2
        .typeString(
          "뱁새공방"
        )
        .start()
        .pauseFor(300)
        .callFunction(() => {
          typewriter2.stop();
        });
    },
    typing3(){
      const text3 = document.getElementById("text3");
      const typewriter3 = new Typewriter(text3, {
        loop: false,
        delay: 75,
        cursor: "",
      });
      typewriter3
        .typeString(
          "입니다"
        )
        .start()
        .pauseFor(300)
        .callFunction(() => {
          typewriter3.stop();
        });
    }
  },
};
