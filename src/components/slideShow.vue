<script setup>
import { ref } from 'vue'
import ismobile from '@/utils/ismobile'

const slideImgUrl = ref('')

if (ismobile) {
  slideImgUrl.value = 'https://website.xdcdn.net/poster/187168/IGA%E6%AF%94%E8%B5%9B/80aJQzv0.png'
} else {
  slideImgUrl.value = 'https://website.xdcdn.net/poster/187168/IGA%E6%AF%94%E8%B5%9B/8040dJde.png'
}
</script>

<template>
  <div class="slide-show-wrap">
    <img class="img" :src="slideImgUrl" />
  </div>
</template>

<style lang="less" scoped>
.slide-show-wrap {
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
