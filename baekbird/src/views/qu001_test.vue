<template>
  <div class="container">
    <p class="name">뱁새공방</p>
    <p class="contact">CONTACT</p>
    <div class="part1">
      <div class="item">
        <p>성 함</p>
        <div class="part11">
          <v-text-field
            outlined
            dense
            class="white"
            hide-details
            v-model="name"
          ></v-text-field>
        </div>
      </div>
      <div class="item">
        <p>연락처</p>
        <div class="part11">
          <v-text-field
            outlined
            dense
            class="white"
            hide-details
            v-model="contactNum"
          ></v-text-field>
        </div>
      </div>
      <div class="item">
        <p>이메일</p>
        <div class="part11">
          <v-text-field
            outlined
            dense
            class="white"
            hide-details
            v-model="email"
          ></v-text-field>
        </div>
      </div>
      <div class="item">
        <p>내 용</p>
        <div class="part11">
          <v-textarea
            background-color="white"
            rows="4"
            v-model="content"
            hide-details
          ></v-textarea>
        </div>
      </div>
      <div class="part3">
        <v-checkbox
          v-model="checkbox"
          color="white"
          dark
          hide-details
        ></v-checkbox>
        <span>개인정보 수집 및 이용에 동의합니다.</span>
      </div>
      <div class="ask">
        <img src="@/assets/img/ask.svg" alt="" @click.prevent="sendEmail" />
      </div>
      <po005 class="last" />
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/qu001.js"></script>
<style scoped src="@/assets/css/qu001_test.css"></style>
