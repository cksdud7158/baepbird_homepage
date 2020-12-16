import po006 from "@/components/po006.vue";
export default {
  components: {
    po006,
  },
  data() {
    return {
      dialog: false,
      wHeight: window.innerHeight,
    };
  },
  mounted() {
    let temp111 = window.innerWidth;
    if (temp111 > 960) {
      this.wHeight = window.innerHeight - 121 + "px";
    }
  },
};
