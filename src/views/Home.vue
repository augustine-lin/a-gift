<template>
  <div id="home">
    <div class="toolBoxLayout">
      <div class="toolBox">
        <div class="toolBoxItem folder"></div>
        <div class="toolBoxItem chrome"></div>
        <div class="toolBoxItem outlook"></div>
        <div class="toolBoxItem youtube"></div>
        <div class="toolBoxItem slack"></div>
        <div class="toolBoxItem line"></div>
        <div class="toolBoxItem gift" @click="goToVideo"></div>
        <div class="toolBoxItem spotify"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  methods: {
    goToVideo () {
      this.$router.push({ name: 'Video' })
    }
  }
}
</script>
<style>
 #home {
   height: 100%;
   background: url('~@/assets/bg.jpg') center center no-repeat;
   background-size: cover;
   position: relative;
 }
 .toolBoxLayout {
   position: absolute;
   bottom: 0;
   left: 50%;
 }
 .toolBox {
   display: flex;
   justify-content: space-around;
   align-items: center;
   position: relative;
   height: 100px;
   width: 100%;
   border-radius: 20px;
   left: -50%;
   background-color: rgba(0,0,0, 0.3);
   padding: 0 12px;

 }
 .toolBox .toolBoxItem {
   height: 60px;
   width: 60px;
   border-radius: 5px;
   margin: 0 12px;
   cursor: pointer;
 }
 .gift {
   background: url('~@/assets/gift.gif') center center no-repeat;
   background-size: 100px 100px;
 }
 .line {
   background: url('~@/assets/icon/line.svg') center center no-repeat;
   background-size: 50px 50px;
 }
 .slack {
   background: url('~@/assets/icon/slack.svg') center center no-repeat;
   background-size: 50px 50px;
 }
 .outlook {
   background: url('~@/assets/icon/outlook.svg') center center no-repeat;
   background-size: 50px 50px;
 }
 .folder {
   background: url('~@/assets/icon/folder.svg') center center no-repeat;
   background-size: 50px 50px;
 }
 .chrome {
   background: url('~@/assets/icon/chrome.svg') center center no-repeat;
   background-size: 50px 50px;
 }
 .youtube {
   background: url('~@/assets/icon/youtube.svg') center center no-repeat;
   background-size: 50px 50px;
 }
 .spotify {
   background: url('~@/assets/icon/spotify.svg') center center no-repeat;
   background-size: 50px 50px;
 }
</style>
