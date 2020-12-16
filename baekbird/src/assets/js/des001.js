import ot002 from "@/components/ot002.vue";

export default {
  components: {
    ot002,
  },
  data() {
    return {
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
};
