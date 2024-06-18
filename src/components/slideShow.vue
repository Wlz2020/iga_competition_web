<script setup>
import { ref } from 'vue'
import ismobile from '@/utils/ismobile'
import mobileMainImg from '@/assets/img/mobile-main.png'
import pcMainImg from '@/assets/img/pc-main.png'

const slideImgUrl = ref('')

if (ismobile) {
  slideImgUrl.value = mobileMainImg
} else {
  slideImgUrl.value = pcMainImg
}
</script>

<template>
  <div class="slide-show-wrap">
    <img class="img" :src="slideImgUrl" />
  </div>
</template>

<style lang="less" scoped>
.slide-show-wrap {
  position: relative;
  z-index: 1;
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
