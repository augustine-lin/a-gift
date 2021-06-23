<template>
  <div id="video">
    <div class="homeBtn" @click="goToHome"></div>
    <div class="title">For You</div>
    <div class="wrapper">
      <div class="picture" v-for="(item, index) in list" :key="item.name + index"
           :class="{'pointer': !!item.name}"
           :style="{'background': covertImg(item.name)}"
           @click="playVideo(item)">
      </div>
    </div>
    <fullscreen :fullscreen.sync="isFullscreen">
      <youtube width="100%"
               height="100%"
               ref="youtube"
               v-if="videoId"
               :video-id="videoId"
               @ended="isFullscreen = false">
      </youtube>
    </fullscreen>
  </div>
</template>
<script>
import { uniq } from 'lodash'
export default {
  name: 'Home',
  data () {
    return {
      videoId: null,
      isFullscreen: false,
      checkPoint: []
    }
  },
  watch: {
    isFullscreen: function (val) {
      if (!val) {
        this.videoId = null
      }
    }
  },
  computed: {
    list: function () {
      if (uniq(this.checkPoint).length >= 7 && this.checkPoint.length !== 0) {
        return [
          { name: 'austin', url: 'vYmXWpIFtAo' },
          { name: '', url: '' },
          { name: 'bob', url: '4Knjnxo43Yo' },
          { name: '', url: '' },
          { name: 'fisher', url: 'GJreVGpW1Jw' },
          { name: '', url: '' },
          { name: 'larry', url: 'CyG2f5RXoXQ' },
          { name: '', url: '' },
          { name: 'jerry', url: 'xSw6p5bnmHo' },
          { name: '', url: '' },
          { name: 'james', url: 'wKTSJ55yotA' },
          { name: '', url: '' },
          { name: 'egg', url: '40lUsjxaxIY' },
          { name: '', url: '' },
          { name: 'nicole', url: 'PRrsdeCAl4I' }
        ]
      } else {
        return [
          { name: 'austin', url: 'vYmXWpIFtAo' },
          { name: '', url: '' },
          { name: 'bob', url: '4Knjnxo43Yo' },
          { name: '', url: '' },
          { name: 'fisher', url: 'GJreVGpW1Jw' },
          { name: '', url: '' },
          { name: 'larry', url: 'CyG2f5RXoXQ' },
          { name: '', url: '' },
          { name: 'jerry', url: 'xSw6p5bnmHo' },
          { name: '', url: '' },
          { name: 'james', url: 'wKTSJ55yotA' },
          { name: '', url: '' },
          { name: '', url: '' },
          { name: '', url: '' },
          { name: 'nicole', url: 'PRrsdeCAl4I' }
        ]
      }
    }
  },
  methods: {
    goToVideo () {
      this.$router.push({ name: 'Video' })
    },
    covertImg (name) {
      if (name) {
        const imgUrl = require(`@/assets/preload/${name}.gif`)
        return `url(${imgUrl}) center center no-repeat`
      }
    },
    playVideo (item) {
      if (item.url) {
        this.checkPoint.push(item.name)
        this.isFullscreen = true
        this.videoId = item.url
        this.$nextTick(() => {
          this.$refs.youtube.player.playVideo()
        })
      }
    },
    goToHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
<style>
  #video {
    height: 100%;
    background-color: black;
  }
  .title{
    padding: 40px;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 50px;
    font-weight: bolder;
  }
  .wrapper {
    height: calc(100% - 130px);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .picture {
    background-size: cover !important;
  }
  .pointer {
    cursor: pointer;
  }
  .homeBtn {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 40px;
    width: 40px;
    background: url('~@/assets/home.png') center center no-repeat;
    background-size: cover;
    cursor: pointer;
  }
</style>
