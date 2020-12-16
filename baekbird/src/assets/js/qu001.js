import po005 from "@/components/po005.vue";
export default {
  components: {
    po005,
  },
  data() {
    return {
      name: "",
      contactNum: "",
      email: "",
      content: "",
      checkbox: "",
      widthCheck: true,
    };
  },
  mounted() {
    let iWidth = window.innerWidth;
    if (iWidth > 1024) {
      this.widthCheck = false;
    }
  },
  methods: {
    async sendEmail() {
      if (this.checkbox != true) {
        alert("개인정보 수집 및 이용에 동의해주세요");
        return;
      } else {
        var d = new Date();
        var n = d.toLocaleString();
        await this.$firebase
          .firestore()
          .collection("contact")
          .doc(n)
          .set({
            name: this.name,
            contactNum: this.contactNum,
            email: this.email,
            content: this.content,
            time: n,
          });

        this.name = "";
        this.contactNum = "";
        this.email = "";
        this.content = "";
        alert("문의가 완료되었습니다.");
      }
    },
  },
};
