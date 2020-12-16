<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="ma">
      <div class="page-1 page " id="page1">
        <div v-animate="{ value: 'fadeIn' }">
          <p>M A R K E T</p>
          <br />
          <p>C R A F T</p>
          <br />
          <p>S T U D I O</p>
        </div>
      </div>

      <div class="page-2 page" id="page2">
        <div v-animate="{ value: 'fadeInRight' }">
          <div id="title">
            <img src="@/assets/img/marketing.svg" alt="" />
          </div>
          <div class="bgi1" v-show="widthCheck">
            <img src="@/assets/img/baepbird.svg" alt="" />
          </div>
          <div class="part2">
            <div id="about" @click.prevent="toAbout">ABOUT +</div>
            <div id="content">
              <p>뱁새공방은</p>
              <p><span>브랜드 개성</span>을</p>
              <p>만들어드리는</p>
              <p><span>마케팅 공방</span>입니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="page-3 page" id="page3">
        <div v-animate="{ value: 'fadeInRight' }">
          <div id="title">
            <img src="@/assets/img/proposition.svg" alt="" />
          </div>
          <div class="bgi2" v-show="widthCheck">
            <img src="@/assets/img/page3.svg" alt="" />
          </div>
          <div class="part3_2">
            <div id="about">
              <p id="link" @click.prevent="$router.push('/planning')">
                PLANNING +
              </p>
              <p id="link" @click.prevent="$router.push('/branding')">
                BRANDING +
              </p>
              <p id="link" @click.prevent="$router.push('/advertising')">
                ADVERTISING +
              </p>
            </div>
            <div id="content">
              <p><span>브랜드</span>를</p>
              <p>성장시키는</p>
              <p><span>마케팅 솔루션</span>을</p>
              <p>제안합니다</p>
            </div>
          </div>
        </div>
      </div>
      <div class="page-4 page" id="page4">
        <ot002 />
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/ma001.js"></script>
<style scoped src="@/assets/css/animate.css"></style>
<style scoped src="@/assets/css/ma001.css"></style>
