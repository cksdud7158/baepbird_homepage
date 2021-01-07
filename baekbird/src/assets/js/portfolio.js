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
      companys: [
        {
          name: "choiceHospital",
          logo: require("@/assets/img/client/choiceHospital/choiceHospital.svg"),
          tabs: [
            {
              tab: "브랜드채널",
              description1: "수준 높은 스토리텔링 및 검색엔진 ",
              description2: "상위노출을 통한 전문적인 브랜드채널 육성",
              imageList: [
                require("@/assets/img/client/choiceHospital/brandChannel/brandChannel_1.png"),
                require("@/assets/img/client/choiceHospital/brandChannel/brandChannel_2.png"),
                require("@/assets/img/client/choiceHospital/brandChannel/brandChannel_3.png"),
                require("@/assets/img/client/choiceHospital/brandChannel/brandChannel_4.png"),
              ],
            },
            {
              tab: "콘텐츠사진",
              description1: "각종 언론사 및 오프라인 매체 활용까지 ",
              description2: "가능한 인상적인 콘텐츠사진 촬영",
              imageList: [
                require("@/assets/img/client/choiceHospital/contentPhoto/contentPhoto_1.jpg"),
                require("@/assets/img/client/choiceHospital/contentPhoto/contentPhoto_2.jpg"),
                require("@/assets/img/client/choiceHospital/contentPhoto/contentPhoto_3.jpg"),
                require("@/assets/img/client/choiceHospital/contentPhoto/contentPhoto_4.jpg"),
              ],
            },
            {
              tab: "광고콘텐츠",
              description1: "브랜드 컨셉과 장점이 명확하게 드러나는",
              description2: "직관적인 광고콘텐츠 기획 및 디자인",
              imageList: [
                require("@/assets/img/client/choiceHospital/advertiseContent/advertiseContent_1.jpg"),
                require("@/assets/img/client/choiceHospital/advertiseContent/advertiseContent_2.jpg"),
                require("@/assets/img/client/choiceHospital/advertiseContent/advertiseContent_3.jpg"),
                require("@/assets/img/client/choiceHospital/advertiseContent/advertiseContent_4.jpg"),
                require("@/assets/img/client/choiceHospital/advertiseContent/advertiseContent_5.jpg"),
                require("@/assets/img/client/choiceHospital/advertiseContent/advertiseContent_6.png"),
              ],
            },
            {
              tab: "온라인광고",
              description1: "예산 맞춤형 노출 및 클릭율 최적화를 통한",
              description2: "효율적인 온라인광고 관리",
              imageList: [
                require("@/assets/img/client/choiceHospital/onlineAdvertise/onlineAdvertise_1.png"),
                require("@/assets/img/client/choiceHospital/onlineAdvertise/onlineAdvertise_2.png"),
                require("@/assets/img/client/choiceHospital/onlineAdvertise/onlineAdvertise_3.png"),
                require("@/assets/img/client/choiceHospital/onlineAdvertise/onlineAdvertise_4.png"),
                require("@/assets/img/client/choiceHospital/onlineAdvertise/onlineAdvertise_1.png"),
                require("@/assets/img/client/choiceHospital/onlineAdvertise/onlineAdvertise_5.png"),
              ],
            },
            {
              tab: "인플루언서",
              description1: "브랜드 이미지 확산을 위한 이슈 메이커로서",
              description2: "효과적인 인플루언서 마케팅 운영",
              imageList: [
                require("@/assets/img/client/choiceHospital/influence/influence_1.png"),
                require("@/assets/img/client/choiceHospital/influence/influence_2.png"),
                require("@/assets/img/client/choiceHospital/influence/influence_3.jpg"),
                require("@/assets/img/client/choiceHospital/influence/influence_4.jpg"),
                require("@/assets/img/client/choiceHospital/influence/influence_5.jpg"),
                require("@/assets/img/client/choiceHospital/influence/influence_6.jpg"),
                require("@/assets/img/client/choiceHospital/influence/influence_7.jpg"),
                require("@/assets/img/client/choiceHospital/influence/influence_8.jpg"),
                require("@/assets/img/client/choiceHospital/influence/influence_9.jpg"),
                require("@/assets/img/client/choiceHospital/influence/influence_10.jpg"),
              ],
            },
          ],
        },
        {
          name: "newNormal",
          logo: require("@/assets/img/client/newNormal/newNormal.svg"),
          tabs: [
            {
              tab: "로고",
              description1: "브랜드 컨셉과 색의 균형까지 고려한 ",
              description2: "감각적인 로고 디자인",
              imageList: [
                require("@/assets/img/client/newNormal/logo/logo_1.png"),
                require("@/assets/img/client/newNormal/logo/logo_2.png"),
              ],
            },
            {
              tab: "제품패키지",
              description1: "브랜드 가독성 및 매대 진열상태까지 감안한 ",
              description2: "실용적인 제품패키지 디자인",
              imageList: [
                require("@/assets/img/client/newNormal/productPackage/productPackage_1.png"),
              ],
            },
            {
              tab: "상세페이지",
              description1: "제품 특징과 용도를 간편하게 이해할 수 있는 ",
              description2: "매력적인 상세페이지 기획 및 디자인",
              imageList: [
                require("@/assets/img/client/newNormal/productIntroductionPage/productIntroductionPage_1.jpg"),
                require("@/assets/img/client/newNormal/productIntroductionPage/productIntroductionPage_2.jpg"),
                require("@/assets/img/client/newNormal/productIntroductionPage/productIntroductionPage_3.jpg"),
                require("@/assets/img/client/newNormal/productIntroductionPage/productIntroductionPage_4.jpg"),
                require("@/assets/img/client/newNormal/productIntroductionPage/productIntroductionPage_5.jpg"),
                require("@/assets/img/client/newNormal/productIntroductionPage/productIntroductionPage_6.jpg"),
                require("@/assets/img/client/newNormal/productIntroductionPage/productIntroductionPage_7.jpg"),
                require("@/assets/img/client/newNormal/productIntroductionPage/productIntroductionPage_8.jpg"),
                require("@/assets/img/client/newNormal/productIntroductionPage/productIntroductionPage_9.jpg"),
                require("@/assets/img/client/newNormal/productIntroductionPage/productIntroductionPage_10.jpg"),
                require("@/assets/img/client/newNormal/productIntroductionPage/productIntroductionPage_11.jpg"),
              ],
            },
          ],
        },
        {
          name: "woodyHome",
          logo: require("@/assets/img/client/woodyHome/woodyHome.svg"),
          tabs: [
            {
              tab: "마케팅컨설팅",
              description1: "광고비의 효율적인 운영 및 관리를 위한 ",
              description2: "실무적인 마케팅컨설팅 제공",
              imageList: [
                require("@/assets/img/client/woodyHome/marketingConsulting/marketingConsulting_1.png"),
                require("@/assets/img/client/woodyHome/marketingConsulting/marketingConsulting_2.png"),
              ],
            },
            {
              tab: "스토어컨설팅",
              description1: "지속적인 매출 증가 및 최적화 과정에 대한",
              description2: "체계적인 스토어컨설팅 제공",
              imageList: [
                require("@/assets/img/client/woodyHome/storeConsulting/storeConsulting_1.png"),
                require("@/assets/img/client/woodyHome/storeConsulting/storeConsulting_2.png"),
              ],
            },
          ],
        },
        {
          name: "lks",
          logo: require("@/assets/img/client/lks/lks.svg"),
          tabs: [
            {
              tab: "마케팅플래닝",
              description1: "기초적인 시장조사 및 브랜드 포지셔닝에",
              description2: "필요한 단계적인 마케팅플래닝 제공",
              imageList: [
                require("@/assets/img/client/lks/marketingPlanning/marketingPlanning_1.png"),
                require("@/assets/img/client/lks/marketingPlanning/marketingPlanning_2.png"),
                require("@/assets/img/client/lks/marketingPlanning/marketingPlanning_3.png"),
              ],
            },
            {
              tab: "웹사이트",
              description1: "브랜드 메시지가 뚜렷하게",
              description2: "드러나는 전략적인 웹사이트 기획",
              imageList: [
                require("@/assets/img/client/lks/website/website_1.png"),
                require("@/assets/img/client/lks/website/website_2.png"),
              ],
            },
            {
              tab: "상세페이지",
              description1: "제품 기능을 디자인 아이디어로",
              description2: "활용한 매력적인 상세페이지 기획",
              imageList: [
                require("@/assets/img/client/lks/productIntroductionPage/productIntroductionPage_1.png"),
                require("@/assets/img/client/lks/productIntroductionPage/productIntroductionPage_2.png"),
              ],
            },
          ],
        },
        {
          name: "artHome",
          logo: require("@/assets/img/client/artHome/artHome.svg"),
          tabs: [
            {
              tab: "제품사진",
              description1: "브랜드 컨셉이 뚜렷하게 드러나는",
              description2: "예술적인 제품사진 촬영",
              imageList: [
                require("@/assets/img/client/artHome/productPhoto/productPhoto_1.jpg"),
                require("@/assets/img/client/artHome/productPhoto/productPhoto_2.jpg"),
                require("@/assets/img/client/artHome/productPhoto/productPhoto_3.jpg"),
              ],
            },
            {
              tab: "상세페이지",
              description1: "제품 이미지를 통해 분위기와 느낌을 사로잡는",
              description2: "매력적인 상세페이지 기획 및 디자인",
              imageList: [
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_1.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_2.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_3.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_4.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_5.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_6.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_7.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_8.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_9.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_10.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_11.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_12.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_13.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_14.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_15.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_16.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_17.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_18.png"),
                require("@/assets/img/client/artHome/productIntroductionPage/productIntroductionPage_19.png"),
              ],
            },
          ],
        },
      ],
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
    const swiperWrappers = document.getElementsByClassName("swiper-wrapper");
    const swiperWrapper = swiperWrappers[1];
    swiperWrapper.style.alignContent = "center";
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
