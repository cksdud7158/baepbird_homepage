import portfolio from "@/components/portfolio.vue";
import ot002 from "@/components/ot002.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import bs001 from "@/views/bs001.vue";
import bs002 from "@/views/bs002.vue";
import bs003 from "@/views/bs003.vue";

export default {
  components: {
    portfolio,
    ot002,
    bs001,
    bs002,
    bs003,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      opts: {
        dir: "v",
        beforeChange: (prev, next) => {
          prev;
          next;
        },
        afterChange: (prev, next) => {
          prev;
          next;
        },
      },
      swiperOption: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        loop:true,
        spaceBetween:	1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // autoplay: {
        //   delay: 4000,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
