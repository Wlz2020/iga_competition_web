<script setup>
const testUrl = 'https://website.xdcdn.net/poster/187168/IGA%E6%AF%94%E8%B5%9B/80aJQzv0.png'
console.log(testUrl)
</script>

<template>
  <footer class="footer-wrap">
    <div class="box-wrap">
      <div class="copy">*本赛事的最终解释权归主办单位所有</div>
      <div class="text">特邀媒体</div>
      <div class="medium">
        <div class="img-contain"><img :src="testUrl" alt="" srcset="" /></div>
        <div class="img-contain"><img :src="testUrl" alt="" srcset="" /></div>
      </div>
      <div class="text">特邀合作</div>
      <div class="img-contain">
        <img :src="testUrl" alt="" srcset="" />
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
.footer-wrap {
  .box-wrap {
    margin: 0 auto;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 160rem;
  }

  .copy {
    color: #000;
    font-size: 16rem;
    margin-bottom: 20rem;
  }

  .text {
    margin-top: 50rem;
    color: #000;
    font-size: 28rem;
    font-weight: bold;
  }

  .medium {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(150rem * 2 + 40rem);
  }

  .img-contain {
    width: 150rem;
    height: 70rem;
    margin-top: 30rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
