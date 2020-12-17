<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="bs001">
      <div class="page-1 page " id="page1">
          <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <bs001 />
        </swiper-slide>
        <swiper-slide>
          <bs002 />
        </swiper-slide>
        <swiper-slide>
          <bs003 />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </div>
      <div class="page-2 page" id="page2">
        <div id="page_2_content">
          <portfolio />
        </div>
      </div>
      <div class="page-3 page" id="page3">
        <ot002 />
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/work.js"></script>
<style scoped src="@/assets/css/work.css"></style>
