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
    }, 700);
  },
  methods: {
    typing() {
      var app = document.getElementById("text");
      console.log(app);
      var typewriter = new Typewriter(app, {
        loop: false,
        delay: 75,
        cursor: "",
      });
      typewriter
        .pauseFor(1000)
        .typeString(
          "<p style='margin-bottom: 5px'>안녕하세요, </p><p style='margin-bottom: 10px'>처음 뵙겠습니다. "
        )
        .pauseFor(300)
        .typeString(
          "</p> <span style='color: #3d5ba9; font-size:2rem; font-family: Jalnan;'>뱁새공방</span> 입니다."
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
  },
};
