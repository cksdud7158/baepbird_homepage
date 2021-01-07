<template>
  <div class="box">
    <p class="about">SERVICE</p>
    <div id="part2_1">
      <p></p>
      <p>PORTFOLIO</p>
      <img src="@/assets/img/sam_white.svg" alt="" />
    </div>
    <div class="part2_content">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          v-for="(company, i) in companys"
          :key="i"
          id="swiper-slide"
        >
          <po004 :company="company"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script src="@/assets/js/portfolio.js"></script>
<style scoped src="@/assets/css/portfolio.css"></style>
