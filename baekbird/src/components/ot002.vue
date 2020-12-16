<template>
  <div :style="{ height: wHeight }" class="top11">
    <div class="container">
      <div class="part1">
        <p class="item">M A R K E T</p>
        <p class="item">C R A F T</p>
        <p class="item">S T U D I O</p>
      </div>
      <div class="part2">
        <p @click.prevent="$router.push('/contact')">온라인상담문의</p>
        <img src="@/assets/img/sam.svg" alt="" />
        <po006 />
        <!-- <p @click.stop="dialog = !dialog">이메일무단수집거부</p> -->
        <img src="@/assets/img/sam.svg" alt="" />
      </div>
      <div class="part3">
        <div class="content">
          <p>Contact</p>
          <p>0507 &#183; 1332 &#183; 7158</p>
        </div>
        <div class="content">
          <p>Address</p>
          <p>
            서울특별시 송파구 양재대로 932, <br />
            SFSC 328호
          </p>
        </div>
      </div>
      <div class="part4">
        <p>대표자 : 박 찬 영 | 사업자등록번호 : 327-17-01014</p>
        <p>Copyright 2020. 뱁새공방. All right reserved</p>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/ot002.js"></script>
<style scoped src="@/assets/css/ot002.css"></style>
