<script setup>
import ismobile from '@/utils/ismobile'
import containWidth from '@/utils/page-contain-width'
import logoImg from '@/assets/img/iga_logo.png'
import mainBgImg from '@/assets/img/main-bg.png'

// import { ref, onMounted } from 'vue'

// const currentNavIndex = ref(0)

function scrollTo(num) {
  const fixedNavHeight = 90 // 假设导航栏的高度为50px

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

// function absoluteBottomMyElement() {
//   document.querySelectorAll('.nav').forEach((myElement, myElementIndex) => {
//     const rectMyElement = myElement.getBoundingClientRect()
//     const absoluteTopMyElement = rectMyElement.top + window.scrollY
//     const absoluteBottomMyElement = absoluteTopMyElement + myElement.offsetHeight
//     window.addEventListener('scroll', () => {
//       const currentScroll = window.scrollY
//       if (currentScroll >= absoluteTopMyElement && currentScroll < absoluteBottomMyElement) {
//         console.log('经过元素了', myElementIndex)
//         currentNavIndex.value = myElementIndex + 1
//       }
//     })
//   })
// }

// onMounted(() => {
//   // absoluteBottomMyElement()
// })
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

        <div class="item nav-item" @click="scrollTo(5)" @mouseover="scrollTo(5)">评审流程</div>
      </template>

      <div class="item nav-item" @click="scrollTo(6)" @mouseover="scrollTo(6)">我要参赛</div>
    </div>
  </nav>

  <div class="bg-img">
    <img :src="mainBgImg" alt="" />
  </div>

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
  left: 0;
  width: 100%;
  height: calc(100vh - @navHight);

  img {
    width: 100%;
    height: 100%;
  }
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
  width: calc(660rem / 9);
  height: calc(440rem / 9);

  .img {
    width: 100%;
    height: 100%;
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
