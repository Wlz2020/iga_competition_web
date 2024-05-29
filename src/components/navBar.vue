<script setup>
function scrollTo(num) {
  const fixedNavHeight = 80 // 假设导航栏的高度为50px

  if (num === 0) {
    window.scrollTo(0, 0)
    return
  }

  const idx = `#nav${num}`
  const element = document.querySelector(idx)

  if (element) {
    const elementTop = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: elementTop - fixedNavHeight,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <nav class="nav-wrap">
    <div class="box-wrap">
      <div class="item img-wrap" @click="scrollTo(0)">
        <img
          class="img"
          src="https://website.xdcdn.net/poster/187168/IGA%E6%AF%94%E8%B5%9B/80aNWNtf.png"
        />
      </div>

      <div class="item" @click="scrollTo(1)">赛事简介</div>

      <div class="item" @click="scrollTo(2)">评审组织</div>

      <div class="item" @click="scrollTo(3)">作品要求</div>

      <div class="item" @click="scrollTo(4)">奖项设置</div>

      <div class="item" @click="scrollTo(5)">评审流程</div>

      <div class="item" @click="scrollTo(6)">我要参赛</div>
    </div>
  </nav>

  <div class="placeholder-box"></div>
</template>

<style lang="less" scoped>
@navHight: 80rem;

.nav-wrap {
  width: 100%;
  height: @navHight;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #11b6d1;

  .box-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
    height: inherit;
  }
}

.placeholder-box {
  height: @navHight;
}

.img-wrap {
  width: calc(230rem / 2);
  height: calc(70rem / 2);

  .img {
    width: 100%;
    height: 100%;
  }
}

.item {
  font-family: inherit;
  font-size: 20rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.5;

  &:hover {
    cursor: pointer;
  }
}
</style>
