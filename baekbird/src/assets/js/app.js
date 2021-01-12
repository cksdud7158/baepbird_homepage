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
  metaInfo: {
    // Children can override the title.
    title: "뱁새공방",
    titleTemplate: "%s",
    // Define meta tags here.
    meta: [
      { name: "og:title", content: "뱁새공방" },
      {
        name: "og:description",
        content:
          "온라인마케팅, 광고대행사, 광고캠페인기획, 디지털마케팅. 고객의 제품 및 서비스를 분석하여 차별성 있는 브랜드개성을 만들어드리는 온라인마케팅대행사입니다.",
      },
      {
        name: "keywords",
        content:
          "마케팅 ,광고 ,캠페인 ,유튜브광고 ,기획 ,인스타광고 ,온라인마케팅 ,구글검색 ,SNS마케팅 ,마케팅전략 ,광고대행사 ,디지털마케팅 ,키워드광고 ,바이럴광고 ,컨설팅회사 ,마케팅회사 ,브랜드마케팅",
      },
      { name: "author", content: "Park Chanyeong" },
      { name: "og:image", content: "@/assets/img/favicon.ico" },
      { name: "Copyright", content: "©2021. 뱁새공방 all right reserved" },
    ],
  },
};
