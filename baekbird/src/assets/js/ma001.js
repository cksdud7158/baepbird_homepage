import ot002 from "@/components/ot002.vue";

export default {
  components: {
    ot002,
  },
  data() {
    return {
      widthCheck: false,
      opts: {
        dir: "v",
        beforeChange: (prev, next) => {
          prev;
          next;
          // console.log("before");
          // this.offPage(next);
          // this.onPage(next + 1);
        },
        afterChange: (prev, next) => {
          prev;
          next;
        },
      },
    };
  },
  mounted() {
    let iWidth = window.innerWidth;
    if (iWidth > 1024) {
      this.widthCheck = true;
    }

    setTimeout(() => {
      this.moveNext();
    }, 2000);
  },
  methods: {
    moveNext() {
      if (this.$refs.ma.$fullpage.curIndex == 0) {
        this.$refs.ma.$fullpage.moveTo(1, true, true); //Move to the next page
      }
    },
    toAbout() {
      this.$router.push("/about");
    },
  },
};
