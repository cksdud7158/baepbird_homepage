<template>
  <div class="box">
    <p class="about">PLANNING</p>
    <div id="part2_1">
      <p></p>
      <p>PORTFOLIO</p>
      <img src="@/assets/img/sam_white.svg" alt="" />
    </div>
    <div class="part2_content">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(company, i) in companys" :key="i">
          <po004 :companys="companys"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import po004 from "@/components/po004.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    po004,
  },
  data() {
    return {
      items: "",
      swiperOption: {
        slidesPerView: 2,
        slidesPerColumn: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      companys: 5,
    };
  },
  beforeMount() {
    if (window.innerWidth > 960) {
      this.swiperOption.slidesPerView = 3;
      this.swiperOption.slidesPerColumn = 2;
      this.swiperOption.spaceBetween = 0;
    }
  },
  mounted() {
    // this.read();
  },
  methods: {
    test() {
      console.log("작동");
      this.$firebase
        .firestore()
        .collection("boards")
        .add({ test: "이건가" });
    },
    async read() {
      const sn = await this.$firebase
        .firestore()
        .collection("boards")
        .get();
      this.items = sn.docs.map((v) => {
        const item = v.data();
        return {
          id: v.id,
          imgUrl: item.imgUrl,
        };
      });
      console.log(this.items);
    },
  },
};
</script>

<style scoped>
.about {
  margin-top: 5vh;
  text-align: center;
  color: white;
  font-family: "NanumSquare";
  font-weight: bold;
  font-size: 1.2rem;
}

#part2_1 {
  text-align: center;
  color: white;
  font-family: "Jalnan";
  font-size: 1.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}

#part2_1 > img {
  margin-left: 15vw;
  width: 10px;
}

.swiper-container {
  margin-top: 3vh;
  width: 90vw;
  height: 65vh;
}
.part2_content {
  margin: 0 5vw;
}

.swiper-slide {
  height: 15vh;
  text-align: center;
  font-size: 18px;
}

@media screen and (min-width: 961px) {
  .box {
    display: grid;
    align-items: center;
  }
  .about {
    padding-top: 5vh;
    font-size: 1.4rem;
  }
  #part2_1 {
    font-size: 2.4rem;
  }
  .swiper-container {
    width: 35vw;
    height: 50vh;
  }
  .swiper-slide {
    height: 20vmin;
    width: 20vmin !important;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  #part2_1 > img {
    margin-left: 10vw;
    width: 15px;
  }
}
@media screen and (min-width: 961px) and (max-width: 1024px) {
  .about {
    font-size: 1rem;
  }
  #part2_1 {
    font-size: 2rem;
  }
  .swiper-container {
    width: 60vw;
  }
  .swiper-slide {
    height: 25vmin;
    width: 25vmin !important;
    margin-bottom: 5px;
  }
  #part2_1 > img {
    width: 10px;
  }
  .part2_content {
    padding-top: 2vh;
  }
}

@media all and (min-width: 768px) and (max-width: 960px) {
  .swiper-container {
    margin-top: 3vh;
    width: 90vw;
    height: 65vh;
  }
  .part2_content {
    margin: 0 5vw;
  }

  .swiper-slide {
    height: 25vmin;
    width: 25vmin;
  }
}
</style>
