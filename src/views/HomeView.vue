<script setup>
import { onMounted } from 'vue'
import NavBar from '@/components/navBar.vue'
import SlideShow from '@/components/slideShow.vue'
import PageFooter from '@/components/pageFooter.vue'
import ismobile from '@/utils/ismobile'
import containWidth from '@/utils/page-contain-width'
import mainTitleImg from '@/assets/img/main_title_bg.png'
import subTitleImg from '@/assets/img/sub_title_bg.png'

import award1Img from '@/assets/img/planA/award1.png'
import award2Img from '@/assets/img/planA/award2.png'
import award3Img from '@/assets/img/planA/award3.png'
import award4Img from '@/assets/img/planA/award4.png'
import award5Img from '@/assets/img/planA/award5.png'
import award6Img from '@/assets/img/planA/award6.png'

onMounted(() => {
  const eleList = document.querySelectorAll('.box-wrap')
  eleList.forEach((ele) => {
    ele.style.width = containWidth
  })
  console.log(ismobile)
})

const testUrl = 'https://website.xdcdn.net/poster/187168/IGA%E6%AF%94%E8%B5%9B/80aJQzv0.png'

const nav1Content =
  '由IGA Studio，TapTap游戏社区联合发起的独立游戏创作大赛，面向青年人举办的数字媒体技术竞赛活动。大赛旨在创建一个鼓励年轻独立游戏开发者群体勇敢表达创意，探索玩法，享受游戏开发魅力的交流平台，欢迎任何专业或非专业的独立游戏爱好者报名参加，除了完成度，此次赛事同样注重创意表达与玩法设计，在赛事期间主办方也会尽最大努力给开发者提供各种各样的帮助，组委会也为优秀的作品提供后续孵化支持。'

const nav2List = [
  {
    title: '评审团介绍',
    list: [
      {
        text: '评审团由从业人士及相关行业人士共同组成。'
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

const nav2ListPerson = [
  {
    title: '评审团成员',
    list: [
      {
        img: testUrl,
        position: 'position',
        name: 'Lorem'
      },
      {
        img: testUrl,
        position: 'position',
        name: 'Lorem'
      },
      {
        img: testUrl,
        position: 'position',
        name: 'Lorem'
      },
      {
        img: testUrl,
        position: 'position',
        name: 'Lorem'
      },
      {
        img: testUrl,
        position: 'position',
        name: 'Lorem'
      },
      {
        img: testUrl,
        position: 'position',
        name: 'Lorem'
      },
      {
        img: testUrl,
        position: 'position',
        name: 'Lorem'
      }
    ]
  }
]

const nav3List = [
  {
    title: '作品开发要求',
    list: [
      {
        text: '在提交截止日期(8月1日)前，选手可自由进行作品开发。'
      },
      {
        text: '原则上选手可以使用半年内正在开发的项目参加比赛。'
      },
      {
        text: '所有参赛作品为不限制平台的电子游戏。'
      },
      {
        text: '作品需符合大赛规定，组委会会对提交作品进行抽查，发现有抄袭，作假，舞弊的情况，将取消比赛资格，同时作品带来的知识产权纠纷问题，由选手个人承担。'
      },
      {
        text: '作品内容必须保持政治正确，依法合规，符合社会主义核心价值观，严禁包括反动，暴力，色情，人身攻击(包括并不限于侮辱诽谤)，反人类，亵渎现实宗教等内容。一旦违反将会失去参赛资格，作品将被删除。'
      }
    ]
  },

  {
    title: '作品提交要求',
    list: [
      {
        text: '队伍负责人需添加活动负责人微信进入队长通知群，在页面点击【我要参赛】查看详情。'
      },
      {
        text: '在提交截止日期前(8月1日)前，选手可在任意时段提交作品，提交时需要重新填写作品信息表。'
      },
      {
        text: '选手可以个人或队伍身份提交作品，个人身份提交需承担80%以上的作品内容开发。一个队伍只需要队伍负责人提交作品，其他选手无需重复提交。'
      },
      {
        text: '每个选手/负责人只能申报/参与一项作品。'
      },
      {
        text: '提交的作品需达到至少30%完成度，能通过demo展示核心玩法循环。'
      },
      {
        signal: 'email',
        email: 'brand@igagame.com',
        text1: '作品提交打包上传至赛事邮箱',
        text2:
          '，填写作品信息表，包含必传材料:运行文件，移动端apk;选传材料:开发Vlog/Plog，其他游戏介绍视频/文档/PPT。缺失任一必传材料视为无效参赛。'
      },
      {
        text: '作品提交后在截止日期前可以进行修改并重新提交到邮箱。'
      }
    ]
  }
]

const nav4List = [
  {
    img: award1Img,
    name: '大赛优胜作品',
    desc: '授予在游戏创意，画面，叙事，技术力等多方面综合表现力最强的作品。游戏完成度高，体验流畅，内容丰富，创作角度新颖，且具备较高的迭代潜力。',
    award: '奖品:PS5光驱版+Xbox Series X+Steam Deck+Nintendo Switch'
  },
  {
    img: award2Img,
    name: '最佳画面作品',
    desc: '授予在游戏美术风格，画面表现力，场景结构，特效等视觉综合表现最优秀的作品。',
    award: '奖品:PS5光驱版'
  },
  {
    img: award3Img,
    name: '最佳创意作品',
    desc: '授予在关卡设计，核心玩法设计，游戏流程设计等游戏设计方向综合表现最创新的作品。',
    award: '奖品:PS5光驱版'
  },
  {
    img: award4Img,
    name: '最佳叙事作品',
    desc: '授予在游戏剧情设计，游戏文案设计，游戏背景设计与概念深度方向综合表现最独特且优秀的作亟。',
    award: '奖品:PS5光驱版'
  },
  {
    img: award5Img,
    name: '最佳学生作品',
    desc: '授予由学生团体开发，在学生提交作品中综合表现力最强的作品。游戏完成度较高，体验流畅，内容丰富。',
    award: '奖品:PS5光驱版'
  },
  {
    img: award6Img,
    name: '最具潜力游戏',
    desc: '授予现阶段表现力虽然不是最突出，但是有着创意十足的设计，并且经评委会认定有着极强迭代潜力的作品。',
    award: '奖品:PS5光驱版'
  }
]

const nav5List = [
  {
    text: '5月1日-7月31日，选手可报名参赛并提交作品。'
  },
  {
    text: '8月1日-8月15日，大赛评审团将对所有参赛作品进行预审，选出15个作品参加决赛(具体数量视提交作品数量而定)。'
  },
  {
    text: '8月15日-8月22日，选手可对预审结果提出质疑，预期将不予处理。'
  },
  {
    text: '8月26日，公布大赛最终评奖结果。'
  },
  {
    text: '8月26日-8月31日，决赛选手可以对最终结果提出质疑，预期将不予处理。(包括并不限于侮辱诽谤)，反人类，亵渎现实宗教等内容。一旦违反将会失去参赛资格，作品将被删除。'
  }
]

const nav6List = [
  {
    signal: 'text',
    text: '作品提交截止时间为2023年8月1日0:00(GMT+8)。'
  },
  {
    signal: 'email',
    email: 'info@igagame.com',
    text1: '请在截止日期前将作品运行文件及移动端apk打包发送邮件至',
    text2:
      '。邮件标题命名格式“【IGA<sup>2</sup>】+【队伍名称】+【作品名称】”，举例“IGA<sup>2</sup>艾吉欧盖姆迪赛”。'
  },
  {
    signal: 'fillTable',
    text: '请在截止日期前填写作品提交信息表格:',
    url: 'https://bwbokl51ry.feishu.cn/share/base/form/shrcnvRMh0AaHhtfC5LxrpTgeDe'
  },
  {
    signal: 'joinInTeam',
    text: '参赛选手和队长可扫描下方二维码或通过群号加入赛事官方交流群:258175672',
    cipher: '(入群暗号: IGA)',
    img: testUrl
  }
]
</script>

<template>
  <div class="page">
    <NavBar />
    <SlideShow />

    <!-- 赛事简介 -->
    <div id="nav1" class="nav">
      <div class="box-wrap">
        <div class="title">
          <div class="main-img">
            <img :src="mainTitleImg" />
          </div>
          <div>赛事简介</div>
        </div>
        <div class="content">{{ nav1Content }}</div>
      </div>
    </div>

    <!-- 评审组织 -->
    <div id="nav2" class="nav">
      <div class="box-wrap">
        <div class="title">
          <div class="main-img">
            <img :src="mainTitleImg" />
          </div>
          <div>评审组织</div>
        </div>
        <div class="content">
          <div class="list" v-for="item in nav2List" :key="item.title">
            <div class="sunb-title">
              <div class="sub-img">
                <img :src="subTitleImg" />
              </div>
              <div>{{ item.title }}</div>
            </div>
            <div class="item" v-for="(item2, index2) in item.list" :key="item2.text">
              <div class="index-box">
                <div class="index">{{ index2 + 1 }}</div>
              </div>
              <div class="text">{{ item2.text }}</div>
            </div>
          </div>

          <div class="list person-list" v-for="item in nav2ListPerson" :key="item.title">
            <div class="sunb-title">
              <div class="sub-img">
                <img :src="subTitleImg" />
              </div>
              <div>{{ item.title }}</div>
            </div>
            <div class="item-box row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
              <div class="col item" v-for="item2 in item.list" :key="item2.text">
                <div class="p-3">
                  <div class="img-container">
                    <img class="img" :src="item2.img" />
                  </div>
                  <div class="text">{{ item2.position }}</div>
                  <div class="text">{{ item2.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 作品要求 -->
    <div id="nav3" class="nav">
      <div class="box-wrap">
        <div class="title">
          <div class="main-img">
            <img :src="mainTitleImg" />
          </div>
          <div>作品要求</div>
        </div>
        <div class="content">
          <div class="list" v-for="item in nav3List" :key="item.title">
            <div class="sunb-title">
              <div class="sub-img">
                <img :src="subTitleImg" />
              </div>
              <div>{{ item.title }}</div>
            </div>
            <div class="item" v-for="(item2, index2) in item.list" :key="item2.text">
              <div class="index-box">
                <div class="index">{{ index2 + 1 }}</div>
              </div>
              <div class="text">
                <template v-if="item2.signal && item2.signal === 'email'">
                  <span>{{ item2.text1 }}</span>
                  <a :href="`mailto:${item2.email}`">{{ item2.email }}</a>
                  <span>{{ item2.text2 }}</span>
                </template>

                <template v-else>
                  {{ item2.text }}
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 奖项设置 -->
    <div id="nav4" class="nav">
      <div class="box-wrap">
        <div class="title">
          <div class="main-img">
            <img :src="mainTitleImg" />
          </div>
          <div>奖项设置</div>
        </div>
        <div class="list list1">
          <div class="sub-title">
            <span class="un-select">- </span>评奖说明<span class="un-select"> -</span>
          </div>
          <div class="text">
            为鼓励更多参赛选手投入到创新与精致的游戏创作中，大赛组委会设立的评审团将评选出一个综合表现最优秀的作品，数个在不同领域有突出表现力的作品。评审团将遵守公平公正的评审态度，以专业的角度对所有参赛作品予以打分。进入到决赛的作品评审团会采取更为细致严格的答辩方式评判作品。
          </div>
        </div>
        <div class="list list2">
          <div class="sub-title">
            <span class="un-select">- </span>奖项设置<span class="un-select"> -</span>
          </div>
          <div class="itme" v-for="item in nav4List" :key="item.name">
            <div class="row1">
              <div class="sub-img">
                <img :src="subTitleImg" />
              </div>
              <div class="text">{{ item.name }}</div>
            </div>

            <div class="row2">
              <div class="img-contain">
                <img :src="item.img" />
              </div>
              <div class="text">
                {{ item.desc }}
              </div>
            </div>

            <div class="row3">
              <div class="text">{{ item.award }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 评审流程 -->
    <div id="nav5" class="nav">
      <div class="box-wrap">
        <div class="title">
          <div class="main-img">
            <img :src="mainTitleImg" />
          </div>
          <div>评审流程</div>
        </div>
        <div class="content">
          <div class="list">
            <div class="item" v-for="(item, index) in nav5List" :key="item.text">
              <div class="index-box">
                <div class="index">{{ index + 1 }}</div>
              </div>
              <div class="text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 报名流程 -->
    <div id="nav6" class="nav">
      <div class="box-wrap">
        <div class="title">
          <div class="main-img">
            <img :src="mainTitleImg" />
          </div>
          <div>报名流程</div>
        </div>
        <div class="content">
          <div class="list">
            <div class="item" v-for="(item, index) in nav6List" :key="item.text">
              <div class="index-box">
                <div class="index">{{ index + 1 }}</div>
              </div>
              <div class="text">
                <template v-if="item.signal === 'text'">
                  {{ item.text }}
                </template>

                <template v-else-if="item.signal === 'email'">
                  <span>{{ item.text1 }}</span>
                  <a :href="`mailto:${item.email}`">{{ item.email }}</a>
                  <span v-html="item.text2"></span>
                </template>

                <template v-else-if="item.signal === 'fillTable'">
                  <div>{{ item.text }}</div>
                  <a :href="item.url" target="_blank">{{ item.url }}</a>
                </template>

                <template v-else-if="item.signal === 'joinInTeam'">
                  <span>{{ item.text }}</span>
                  <span class="cipher">{{ item.cipher }}</span>
                  <div class="img-wrap">
                    <div class="img-contain">
                      <img :src="item.img" alt="" />
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<style lang="less" scoped>
@titleColor: #fff;
@titleFontSize: 30rem;
@contentFontColor: #000;
@contentFontSize: 20rem;
@contentMargin: 50rem;
@contentPadding: 40rem;
@mianTitleImgWidth: 3072rem;
@mianTitleImgeight: 1383rem;
@subTitleImgWidtht: 1722rem;
@subTitleImgHeight: 560rem;

* {
  color: @titleColor;
}

.page {
  background-color: #000;
}

.text {
  font-size: 12rem;
}

.nav {
  margin: @contentMargin 0;
  position: relative;
  z-index: 1;

  .box-wrap {
    margin: 0 auto;
    font-size: @contentFontSize;
    color: @contentFontColor;
    padding: @contentPadding;
    padding-bottom: 60rem;
    background-color: rgba(000, 000, 000, 0.4);

    .title {
      position: relative;
      text-align: center;
      font-size: @titleFontSize;
      margin-bottom: 50rem;

      .main-img {
        position: absolute;
        top: -40rem;
        left: calc(50% - (@mianTitleImgWidth / 9) / 2);
        width: calc(@mianTitleImgWidth / 9);
        height: calc(@mianTitleImgeight / 9);

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.nav {
  .box-wrap {
    // background-color: #000;
  }

  .list {
    &:not(:first-child) {
      margin-top: 60rem;
    }

    .sunb-title {
      position: relative;
      font-size: 20rem;
      margin: 40rem 0;
      padding-left: 26rem;

      .sub-img {
        position: absolute;
        top: -12rem;
        left: 0rem;
        width: calc(@subTitleImgWidtht / 10);
        height: calc(@subTitleImgHeight / 10);

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .item {
      display: flex;

      &:not(:last-child) {
        margin: 15rem 0;
      }

      .index-box {
        .index {
          background-color: #fff;
          height: 28rem;
          width: 28rem;
          font-size: 18rem;
          color: #000;
          font-weight: bold;
          text-align: center;
          border-radius: 100%;
        }
      }

      .text {
        flex: 1;
        margin-left: 10rem;
        font-size: 18rem;
      }
    }
  }

  .person-list {
    .item-box {
      display: flex;
      flex-wrap: wrap;
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 15rem 0;
      padding: 0;

      .text {
        font-size: 16rem;
        text-align: center;
        margin-left: 0;
      }

      .img-container {
        width: 120rem;
        height: 120rem;
        margin-bottom: 10rem;
        display: inline-block;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 100%;
        }
      }
    }
  }
}

#nav3 {
  .sunb-title {
    font-size: 19rem;
  }
}

#nav4 {
  .list {
    .sub-title {
      font-size: 23rem;
      text-align: center;
      margin-bottom: 20rem;
    }
  }

  .list1 {
    .text {
      font-size: 18rem;
    }
  }
}

#nav4 {
  .list2 {
    .itme {
      margin-top: 50rem;
      margin-bottom: 80rem;

      & > div {
        margin: 20rem 0;
      }

      .row1 {
        height: calc(@subTitleImgHeight / 10);
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        padding-left: 26rem;

        .sub-img {
          position: absolute;
          top: 0;
          left: 0;
          width: calc(@subTitleImgWidtht / 10);
          height: calc(@subTitleImgHeight / 10);

          img {
            width: 100%;
            height: 100%;
          }
        }

        .img-contain {
          width: 50rem;
          height: 50rem;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .text {
          font-size: 18rem;
        }
      }

      .row2 {
        display: flex;
        align-items: center;

        .img-contain {
          img {
            width: calc(512rem / 9);
            height: calc(512rem / 9);
          }

          margin-right: 10rem;
        }

        .text {
          flex: 1;
          font-size: 17rem;
        }
      }

      .row3 {
        margin-right: -20rem;
        display: flex;
        justify-content: flex-end;

        .text {
          text-align: end;
          font-size: 17rem;
          padding: 0 30rem;
          width: max-content;
          border-bottom: 1px solid @titleColor;
        }
      }
    }
  }
}

#nav6 {
  .content {
    .cipher {
      margin-left: 10rem;
      font-weight: bold;
    }

    .img-wrap {
      display: flex;
      justify-content: center;
      padding-top: 30rem;
      width: calc(100% - 50rem);
    }

    .img-contain {
      width: 100rem;
      height: 100rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text {
      width: 90%;

      a {
        word-wrap: break-word;
      }
    }
  }
}
</style>
