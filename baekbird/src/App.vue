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
<style src="@/assets/css/font.css"></style>
