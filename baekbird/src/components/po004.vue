<template>
  <v-dialog v-model="dialog" fullscreen>
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on" class="portfolioCompanyLogo">
        <img :src="company.logo" alt="" class="companyLogo" />
      </div>
    </template>

    <div class="all">
      <div id="allDiv">
        <div class="title">
          <img :src="company.logo" alt="" />
        </div>
        <v-tabs
          v-model="tab"
          next-icon="mdi-chevron-right"
          prev-icon="mdi-chevron-left"
          show-arrows
          grow
          id="tabs"
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            v-for="(tab, i) in company.tabs"
            :key="i"
            :style="{
              letterSpacing: '-1px',
              fontWeight: '700',
            }"
            id="tabsWord"
          >
            {{ tab.tab }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(tab, index) in company.tabs" :key="index">
            <div class="portfolioContent">
              <div class="description">
                <div class="descriptionSpan">
                  <p>{{ tab.description1 }}</p>
                  <p>{{ tab.description2 }}</p>
                </div>
              </div>
              <div
                v-for="(imgUrl, index) in tab.imageList"
                :key="index"
                id="imgUrlList"
              >
                <img :src="imgUrl" alt="" id="imgUrl" />
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
      <!-- 닫기 버튼 -->
      <div id="forClose">
        <img
          src="@/assets/img/x_blue.svg"
          alt=""
          class="x"
          @click.prevent="dialog = false"
        />
      </div>
    </div>
  </v-dialog>
</template>
<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/po004.js"></script>
<style scoped src="@/assets/css/po004.css"></style>
