<script setup>
import NavBar from '@/components/navBar.vue'
import SlideShow from '@/components/slideShow.vue'

const nav2List = [
  {
    title: '评审团介绍',
    list: [
      {
        text: '评审团由从业人士及相关行业人士共同组成'
      },
      {
        text: '评审团可以在大赛赛制和流程基础上，独立开展评审工作。'
      }
    ]
  },

  {
    title: '评审团职能',
    list: [
      {
        text: '在大赛章程基础上制定评审规则。'
      },
      {
        text: '对决赛参赛队伍进行问辩。'
      },
      {
        text: '确定决赛作品名次及奖项。'
      }
    ]
  }
]
</script>

<template>
  <NavBar />
  <SlideShow />

  <!-- 赛事简介 -->
  <div id="nav1" class="nav">
    <div class="box-wrap">
      <div class="title">赛事简介</div>
      <div class="content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quaerat fugiat expedita
        excepturi. Saepe quasi amet eligendi iusto? Esse similique distinctio quisquam sunt! Ipsum,
        ab ut vitae tempora facere dignissimos. Neque pariatur aliquam et id repellendus. Laudantium
        placeat provident veniam omnis ad cum reprehenderit ab expedita. Facilis ab nulla sed,
        suscipit sint cum quisquam assumenda natus laborum quasi molestias corporis? Nulla
        laboriosam laborum voluptatem ipsum maiores deserunt provident molestiae veritatis et
        similique, rerum voluptatum iste, illo, ducimus doloremque beatae magnam veniam.
        Perspiciatis obcaecati deserunt architecto autem nesciunt enim quam dolor.
      </div>
    </div>
  </div>

  <!-- 评审组织 -->
  <div id="nav2" class="nav">
    <div class="box-wrap">
      <div class="title">评审组织</div>
      <div class="content">
        <div class="list" v-for="item in nav2List" :key="item.title">
          <div class="sunb-title">{{ item.title }}</div>
          <div class="item" v-for="(item2, index2) in item.list" :key="item2.text">
            <div class="index">{{ index2 + 1 }}</div>
            <div class="text">{{ item2.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@titleColor: #000;
@titleFontSize: 30rem;
@contentWidth: 1200rem;
@contentFontColor: #000;
@contentFontSize: 20rem;
@contentMargin: 50rem;
@contentPadding: 20rem;

.text {
  font-size: 12rem;
}

.nav {
  margin: @contentMargin 0;

  .box-wrap {
    margin: 0 auto;
    width: @contentWidth;
    font-size: @contentFontSize;
    color: @contentFontColor;
    padding: @contentPadding;

    .title {
      text-align: center;
      color: @titleColor;
      font-size: @titleFontSize;
    }
  }
}

#nav1 {
  .box-wrap {
    border: 1px solid red;
  }
}

#nav2 {
  .box-wrap {
    border: 1px solid blue;
  }

  .list {
    .sunb-title {
      &:not(:last-child) {
        margin: 15rem 0;
      }
    }

    .item {
      display: flex;
      padding-left: 30rem;

      &:not(:last-child) {
        margin: 15rem 0;
      }

      .index {
        background-color: lightblue;
        height: 25rem;
        width: 25rem;
        font-size: 15rem;
        color: #fff;
        text-align: center;
        border-radius: 100%;
      }

      .text {
        font-size: 15rem;
        margin-left: 10rem;
      }
    }
  }
}
</style>
