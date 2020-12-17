<template>
  <div data-app>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0,
      minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    /><!-- 앱바 -->
    <div id="appbar" v-if="dayFirstVisit">
      <img
        src="@/assets/img/companyName.svg"
        alt="뱁새공방"
        id="title"
        @click.prevent="$router.push('/')"
      />
      <!-- 이미지 미리 다운 -->
    <div :style="{display:'none'}"><img src="@/assets/img/ask.svg" width=1 height=1>
    <img src="@/assets/img/baepbird.svg" width=1 height=1>
    <img src="@/assets/img/bs001_1.svg" width=1 height=1>
    <img src="@/assets/img/bs001_5.svg" width=1 height=1>
    <img src="@/assets/img/bs001_pc.svg" width=1 height=1>
    <img src="@/assets/img/bs002_1.svg" width=1 height=1>
    <img src="@/assets/img/bs002_pc.svg" width=1 height=1>
    <img src="@/assets/img/bs003_1.svg" width=1 height=1>
    <img src="@/assets/img/bs003_pc.svg" width=1 height=1>
    <img src="@/assets/img/companyName.svg" width=1 height=1>
    <img src="@/assets/img/dot.svg" width=1 height=1>
    <img src="@/assets/img/logo.svg" width=1 height=1>
    <img src="@/assets/img/marketing.svg" width=1 height=1>
    <img src="@/assets/img/menubar_1.svg" width=1 height=1>
    <img src="@/assets/img/menuBar.svg" width=1 height=1>
    <img src="@/assets/img/page3.svg" width=1 height=1>
    <img src="@/assets/img/proposition.svg" width=1 height=1>
    <img src="@/assets/img/sam_white.svg" width=1 height=1>
    <img src="@/assets/img/sam.svg" width=1 height=1>
    <img src="@/assets/img/x_blue.svg" width=1 height=1></div>
      <img
        src="@/assets/img/menuBar.svg"
        alt="뱁새공방"
        id="title"
        @click="drawer = !drawer"
      />
    </div>
    <v-navigation-drawer v-model="drawer" absolute temporary width="100vw">
      <menubar @close="close" />
    </v-navigation-drawer>

    <in001 v-if="in001Show" :style="{ height: wHeight }" />
    <!-- 라우터뷰 -->
    <router-view v-if="!in001Show" id="router" :style="{ height: wHeight }" />
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/app.js"></script>
<style scoped src="@/assets/css/app.css"></style>

