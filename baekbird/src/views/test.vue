<template>
  <div>
    <v-btn color="success" @click.prevent="test">test1</v-btn>
    <v-btn color="success" @click.prevent="test2">test2</v-btn>
    <iframe
      width="853"
      height="480"
      src="https://my.matterport.com/show/?m=CRQdvvbXR76"
      frameborder="0"
      allowfullscreen
      allow="xr-spatial-tracking"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {},
    };
  },
  methods: {
    test() {
      console.log("click");
      var d = new Date();
      var n = d.toLocaleString();
      this.$firebase
        .firestore()
        .collection("contact")
        .doc(n)
        .set({
          test: "23123123142",
          time: n,
        });
    },

    async test2() {
      console.log("click");

      const sn = await this.$firebase
        .firestore()
        .collection("contact")
        .orderBy("time", "desc")
        // .limit(1)
        .get();

      this.items = sn.docs.map((v) => {
        const item = v.data();
        return {
          id: v.id,
          name: item.name,
        };
      });
      console.log(this.items);
    },
  },
};
</script>
