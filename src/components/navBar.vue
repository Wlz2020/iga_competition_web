<script setup>
import ismobile from '@/utils/ismobile'
import containWidth from '@/utils/page-contain-width'
import logoImg from '@/assets/img/copyright/sponsor.png'

function scrollTo(num) {
  const fixedNavHeight = 90 // 假设导航栏的高度为90px

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
    <div class="box-wrap" :style="{ width: containWidth }">
      <div class="item img-wrap" @click="scrollTo(0)" @mouseover="scrollTo(0)">
        <img class="img" :src="logoImg" />
      </div>
      <template v-if="!ismobile">
        <div class="item nav-item" @click="scrollTo(1)" @mouseover="scrollTo(1)">赛事简介</div>

        <div class="item nav-item" @click="scrollTo(2)" @mouseover="scrollTo(2)">评审组织</div>

        <div class="item nav-item" @click="scrollTo(3)" @mouseover="scrollTo(3)">作品要求</div>

        <div class="item nav-item" @click="scrollTo(4)" @mouseover="scrollTo(4)">奖项设置</div>

        <div class="item nav-item" @click="scrollTo(7)" @mouseover="scrollTo(7)">惊喜奖品</div>

        <div class="item nav-item" @click="scrollTo(5)" @mouseover="scrollTo(5)">评审流程</div>
      </template>

      <div class="item nav-item" @click="scrollTo(6)" @mouseover="scrollTo(6)">我要参赛</div>
    </div>
  </nav>

  <div class="bg-img" :class="ismobile ? 'bg-img-mobile' : 'bg-img-pc'"></div>

  <div class="placeholder-box"></div>
</template>

<style lang="less" scoped>
@balckTheme: #11b6d1;
@titleColor: #fff;
@navHight: 80rem;

* {
  color: @titleColor;
}

.bg-img {
  position: fixed;
  top: @navHight;
  left: -1vw;
  top: -1vh;
  width: 102vw;
  height: 102vh;
}

.bg-img-pc {
  background: linear-gradient(to bottom right, #9366a7 40%, #3abfea 100%);
}

.bg-img-mobile {
  background: linear-gradient(to bottom, #9366a7 20%, #3abfea 100%);
}

.nav-wrap {
  width: 100%;
  height: @navHight;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: @balckTheme;

  .box-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    height: inherit;
  }
}

.placeholder-box {
  height: @navHight;
}

.img-wrap {
  width: 80rem;

  .img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.item {
  font-family: inherit;
  font-size: 20rem;
  font-weight: 700;
  line-height: 1.5;

  &:hover {
    cursor: pointer;
  }
}
</style>
