import menubar from "@/components/menubar.vue";
import in001 from "@/views/in001.vue";
import preDownImage from "@/components/preDownImage.vue";

export default {
  components: {
    menubar,
    in001,
    preDownImage,
  },
  data: () => ({
    drawer: false,
    dayFirstVisit: false,
    in001Show: true,
    wHeight: window.innerHeight,
    nowOuterHeight: window.outerHeight,
  }),
  mounted() {
    this.forReload();
    let temp111 = window.innerWidth;
    if (temp111 < 768) {
      this.wHeight = this.wHeight - 49.5 + "px";
    } else if (temp111 >= 768 && temp111 < 960) {
      this.wHeight = this.wHeight - 74.5 + "px";
    } else {
      this.wHeight = window.innerHeight - 1 + "px";
    }

    let temp = this.getCookie();
    if (temp == "true") {
      console.log("실행");
      this.dayFirstVisit = true;
      this.in001Show = false;
    } else {
      console.log("실패");
      this.setCookie("dayFirstVisit", true, 1);
      setTimeout(() => {
        this.dayFirstVisit = true;
        this.in001Show = false;
      }, 4000);
    }
  },
  methods: {
    setCookie(name, value, exp) {
      var date = new Date();
      date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
      document.cookie =
        name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
    },
    getCookie() {
      var value = document.cookie.match(
        "(^|;) ?" + "dayFirstVisit" + "=([^;]*)(;|$)"
      );
      return value ? value[2] : null;
    },
    close(value) {
      this.drawer = value;
    },
    forReload() {
      window.addEventListener("resize", this.reload);
    },
    reload() {
      let tempHeight = window.outerHeight;
      // console.log(tempHeight)
      // console.log(this.nowOuterHeight)
      if (this.nowOuterHeight != tempHeight) {
        location.reload();
      }
    },
  },
};
