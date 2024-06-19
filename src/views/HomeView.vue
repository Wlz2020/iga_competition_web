<script setup>
import { onMounted } from 'vue'
import ismobile from '@/utils/ismobile'
import NavBar from '@/components/navBar.vue'
import SlideShow from '@/components/slideShow.vue'
import PageFooter from '@/components/pageFooter.vue'
import containWidth from '@/utils/page-contain-width'
import mainTitleImg from '@/assets/img/main_title_bg.png'
import subTitleImg from '@/assets/img/sub_title_bg.png'
import ImgSponsorUrl from '@/assets/img/copyright/sponsor.png'

import award1Img from '@/assets/img/award1.png'
import award2Img from '@/assets/img/award2.png'
import award3Img from '@/assets/img/award3.png'
import award4Img from '@/assets/img/award4.png'
import award5Img from '@/assets/img/award5.png'
import award6Img from '@/assets/img/award6.png'
import award7Img from '@/assets/img/award7.png'
import awardWukongImg from '@/assets/img/award-wukong.png'

import imgReviewPerson1 from '@/assets/img/reviewPerson1.png'
import imgReviewPerson2 from '@/assets/img/reviewPerson2.png'
import imgReviewPerson3 from '@/assets/img/reviewPerson3.png'
import imgReviewPerson4 from '@/assets/img/reviewPerson4.png'

import feishuQRImg from '@/assets/img/feishu_qr.png'
import qqGroupImg from '@/assets/img/qq_group.png'

onMounted(() => {
  const eleList = document.querySelectorAll('.box-wrap')
  eleList.forEach((ele) => {
    ele.style.width = containWidth
  })
})

const nav1Content =
  '本次大赛旨在创建一个鼓励海内外年轻独立游戏开发者群体勇敢表达创意，探索玩法，享受游戏开发魅力的交流平台，欢迎任何专业或非专业的独立游戏爱好者报名参加，除了完成度，此次赛事同样注重创意表达与玩法设计，在赛事期间主办方也会尽最大努力给开发者提供各种各样的帮助，组委会也为优秀的作品提供后续孵化支持。'

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
    title: '评审团队',
    list: [
      {
        img: imgReviewPerson1,
        position: 'IGA Studio创始人',
        name: '李肇文（Brad）'
      },
      {
        img: imgReviewPerson2,
        position: '独立之光副总裁',
        name: '熊Tony'
      },
      {
        img: imgReviewPerson3,
        position: '南京艺术学院传媒学院院长',
        name: '薛峰'
      },
      {
        img: '',
        position: '聂俊Gamker',
        name: '聂俊Gamker',
        position1: ' '
      },
      {
        img: '',
        position: '资深独立游戏人',
        name: '张大伟',
        position1: ' '
      },
      {
        img: imgReviewPerson4,
        position: '国际游戏开发者协会（igda）',
        position1: '前执行董事',
        name: 'Renee Gittins'
      }
    ]
  }
]

const nav3List = [
  {
    title: '作品开发要求',
    list: [
      {
        text: '在提交截止日期(8月31日)前，选手可自由进行作品开发。'
      },
      {
        text: '原则上选手可以使用一年内正在开发的项目参加比赛。'
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
        text: '在提交截止日期前(8月31日)前，选手可在任意时段提交作品，提交时需要重新填写作品信息表。选手可以个人或队伍身份提交作品，个人身份提交需承担80%以上的作品内容开发。一个队伍只需要队伍负责人提交作品，其他选手无需重复提交。'
      },
      {
        text: '每个选手/负责人只能申报/参与一项作品。'
      },
      {
        text: '提交的作品需达到至少30%完成度，能通过demo展示核心玩法循环。'
      },
      {
        signal: 'email',
        email: 'tigindie@126.com',
        text1: '作品提交打包上传至赛事邮箱:',
        text2:
          '，填写作品信息表，包含必传材料:运行文件;宣传材料:开发Vlog/Plog，其他游戏介绍视频/文档/PPT。缺失任一必传材料视为无效参赛。'
      },
      {
        text: '作品提交后在截止日期前可以进行修改并重新提交到邮箱。'
      }
    ]
  },
  {
    title: '参赛须知',
    list: [
      {
        text: '队伍负责人先添加活动负责人微信，进入队长通知群，在官网页面点击【我要参赛】查看详情。'
      },
      {
        signal: 'submitContent',
        content: '提交时一并提交队伍信息表格。',
        text: '在提交截止日期前（8月31日）前，选手可在任意时段提交作品。'
      },
      {
        text: '选手可以个人或队伍身份提交作品，个人身份提交需承担80%以上的作品内容开发。'
      },
      {
        text: '一个队伍只需要队伍负责人提交作品，其他选手无需重复提交。'
      },
      {
        text: '每个选手/负责人只能申报/参与一项作品。提交的作品需达到至少40%完成度，能通过demo展示核心玩法循环。'
      },
      {
        text: '作品提交后在截止日期前可以进行修改并重新提交到网站。'
      }
    ]
  }
]

const nav4List = [
  {
    img: award1Img,
    name: '大赛优胜作品',
    desc: '授予在游戏创意、画面、叙事、技术等多方面综合表现最强的作品。同时该作品需在游戏玩法及创作角度上具备新颖性，同时游戏体验流畅，内容丰富且具有较高的迭代潜力。',
    award: '奖品: 5000元'
  },
  {
    img: award3Img,
    name: '最佳创新作品',
    desc: '授予在关卡设计、核心玩法设计、游戏流程设计等方面表现最具创新性的作品。',
    award: '奖品: 5000元'
  },
  {
    img: award2Img,
    name: '最佳创意画面作品 ',
    desc: '授予在游戏美术风格、画面表现力、场景结构、特效等视觉表现方面最具创意的作品。',
    award: '奖品: 3000元'
  },
  {
    img: award7Img,
    name: '最佳创意用户体验作品',
    desc: '授予在游戏交互界面，用户反馈等方面表现最独特且游戏体验流畅的作品。',
    award: '奖品: 3000元'
  },
  {
    img: award4Img,
    name: '最佳音频创意作品',
    desc: '授予在游戏音频设计上进行创新，并且为玩家带来符合游戏核心玩法，拥有沉浸式体验的作品。',
    award: '奖品: 3000元'
  },
  {
    img: award5Img,
    name: '最佳学生作品',
    desc: '授予由学生团队开发，在学生提交作品中综合表现最强的作品。该作品需具备完善且富有创意的核心玩法，并提供流畅的整体游戏体验。',
    award: '奖品: 2000元'
  },
  {
    img: award6Img,
    name: '创意潜力作品奖',
    desc: '授予现阶段表现虽不最突出，但在创意玩法、设计、画面、音频、动效等某一方面有出色表现，并被业内评委认定具有迭代潜力的作品。',
    award: ''
  }
]

const nav4List2 = [
  {
    name: '游戏玩法',
    desc: '此次大赛鼓励游戏机制的创新性和独特性，期望看到作品中有大胆尝试新的游戏规则和互动方式，为玩家带来耳目一新的体验。'
  },
  {
    name: '画面设计',
    desc: '不仅仅是画面的美观度，我们也同样重视觉风格的独特性和创意。评审将关注作品在视觉艺术方面的独特表达和艺术风格。'
  },
  {
    name: '用户体验（UX）',
    desc: '优秀的用户体验是成功游戏的重要因素，我们期待参赛作品能在界面设计、操作流程等方面给玩家带来全新且流畅的体验。'
  },
  {
    name: '动效设计',
    desc: '动效不仅是视觉效果的提升，更是游戏互动体验的重要组成部分。我们希望看到在动效设计上有创意和巧思的作品。'
  },
  {
    name: '音频设计',
    desc: '音效和音乐是营造游戏氛围的重要元素。我们鼓励参赛作品在音频设计上进行创新，为玩家带来更为沉浸的体验。'
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
          <div class="main-title">赛事简介</div>
        </div>
        <div class="content">{{ nav1Content }}</div>
        <div class="desc">
          <div class="main-img-wrap">
            <img :src="ImgSponsorUrl" />
          </div>

          <div class="text">
            Triple iii Guild（3i独立游戏公会：indie innovation
            incubator）致力于连接国内外独立游戏开发者，推动创造性成长与行业革新。
          </div>
          <div class="text line2">
            我们定期策划各类活动，促进交流与合作，整合海内外行业资源，支持初创和独立游戏团队的成长与发展。
          </div>
        </div>
      </div>
    </div>

    <!-- 评审组织 -->
    <div id="nav2" class="nav">
      <div class="box-wrap">
        <div class="title">
          <div class="main-img">
            <img :src="mainTitleImg" />
          </div>
          <div class="main-title">评审组织</div>
        </div>
        <div class="content">
          <div class="list" v-for="item in nav2List" :key="item.title">
            <div class="sunb-title">
              <div class="sub-img">
                <img :src="subTitleImg" />
              </div>
              <div class="sub-title">{{ item.title }}</div>
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
              <div class="sub-title">{{ item.title }}</div>
            </div>
            <div class="item-box row">
              <div
                class="person-item"
                :class="ismobile ? 'person-item-mobile' : 'person-item-pc'"
                v-for="item2 in item.list"
                :key="item2.text"
              >
                <div class="img-container">
                  <img class="img" :src="item2.img" />
                </div>
                <div class="text line2">
                  {{ item2.position }}
                </div>
                <div class="text">
                  {{ item2.position1 }}
                </div>
                <div class="text">{{ item2.name }}</div>
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
          <div class="main-title">作品要求</div>
        </div>
        <div class="content">
          <div class="list" v-for="item in nav3List" :key="item.title">
            <div class="sunb-title">
              <div class="sub-img">
                <img :src="subTitleImg" />
              </div>
              <div class="sub-title">{{ item.title }}</div>
            </div>
            <div class="item" v-for="(item2, index2) in item.list" :key="item2.text">
              <div class="index-box">
                <div class="index">{{ index2 + 1 }}</div>
              </div>
              <div class="text">
                <template v-if="item2.signal && item2.signal === 'submitContent'">
                  <span> {{ item2.text }}</span
                  ><span class="submit-content">{{ item2.content }}</span>
                </template>

                <template v-if="item2.signal && item2.signal === 'email'">
                  <span>{{ item2.text1 }}</span>
                  <a :href="`mailto:${item2.email}`">{{ item2.email }}</a>
                  <span>{{ item2.text2 }}</span>
                </template>

                <template v-if="!item2.signal">
                  {{ item2.text }}
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 奖项设置评奖说明 -->
    <div id="nav4" class="nav">
      <div class="box-wrap">
        <div class="title">
          <div class="main-img">
            <img :src="mainTitleImg" />
          </div>
          <div class="main-title">奖项设置</div>
        </div>
        <div class="list list1">
          <div class="sub-title">
            <span class="un-select">- </span>评奖说明<span class="un-select"> -</span>
          </div>
          <div class="text">
            TIG独立游戏开发大赛的评审标准同样注重参赛作品的创新性，而不仅仅是游戏体量。参赛作品在具备基本的完成度和流畅的游戏体验的前提下，具备以下标准将会是加分项：
          </div>
          <div class="item" v-for="(item, index) in nav4List2" :key="item.name">
            <div class="index-box">
              <div class="index specail-index">{{ index + 1 }}</div>
            </div>
            <div class="text">
              <span class="specail-name">{{ item.name }}：</span>
              <span>{{ item.desc }}</span>
            </div>
          </div>
          <div>
            我们的评审团队将综合以上各方面的表现，评选出具有创新精神和独特魅力的独立游戏作品。希望每一位参赛者都能充分发挥自己的创意，带来精彩的游戏作品。
          </div>
        </div>
        <div class="list list2">
          <div class="sub-title">
            <span class="un-select">- </span>奖项设置<span class="un-select"> -</span>
          </div>
          <div class="item" v-for="item in nav4List" :key="item.name">
            <div class="img-contain">
              <img :src="item.img" />
            </div>
            <div class="name">{{ item.name }}</div>
            <div class="award">{{ item.award }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>

          <div class="tip">*获奖选手需自行承担奖金的意外所得税。</div>
        </div>
      </div>
    </div>

    <!-- 惊喜奖品 -->
    <div id="nav7" class="nav">
      <div class="box-wrap">
        <div class="title">
          <div class="main-img">
            <img :src="mainTitleImg" />
          </div>
          <div class="main-title">惊喜奖品</div>
        </div>

        <div class="content">
          <div class="img-view">
            <img :src="awardWukongImg" alt="" srcset="" />
          </div>

          <div class="nav7-top">
            <div>本次所有成功报名并提交作品</div>
            <div>的参赛队伍</div>
            <div>将有机会参与抽取</div>
            <div>国产游戏《黑神话 悟空》！！！</div>
          </div>
          <div class="nav7-bottom">
            *我们此次一共准备了100份《黑神话悟空》，其中80份将用于成功报名的队伍抽奖，20份将作为后续赛事活动中的奖品送出，后续请关注赛事官方公众号
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
          <div class="main-title">评审流程</div>
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
            <div class="item">
              <div class="item2-list">
                <div class="index-box">
                  <div class="index">1</div>
                </div>
                <div class="text">
                  由【团队负责人】登录官网按照要求提交作以及相关团队信息
                  <div class="link">
                    <a href="https://www.tig-indie.cn" target="_blank">https://www.tig-indie.cn</a>
                  </div>
                </div>
              </div>
              <div class="item2-list">
                <div class="index-box">
                  <div class="index">2</div>
                </div>
                <div class="text">
                  作品提交截止时间为<span class="deadtime">2024年8月31日 0:00 (GMT+8)</span>
                </div>
              </div>
              <div class="item2-list">
                <div class="index-box">
                  <div class="index">3</div>
                </div>
                <div class="text">
                  请在截止日期前将作品运行文件及移动端apk打包发送邮件至<span
                    ><a href="mailto:tigindie@126.com">tigindie@126.com</a></span
                  >
                  <div>
                    邮件标题命名格式“【TIG】+【队伍名称】+【作品名称】”，举例“TIG_艾吉欧_埃及大冒险”。
                  </div>
                </div>
              </div>
              <div class="item2-list">
                <div class="index-box">
                  <div class="index">4</div>
                </div>
                <div class="text">
                  请在截止日期前填写作品提交信息表格：
                  <div>
                    <a
                      target="_blank"
                      href="https://bwbokl51ry.feishu.cn/share/base/form/shrcnZMdS99n68h4eB4pbljG9Ke"
                      >https://bwbokl51ry.feishu.cn/share/base/form/shrcnZMdS99n68h4eB4pbljG9Ke</a
                    >
                  </div>
                  <div class="feishu_qr_img_wrap">
                    <div class="feishu_qr_img">
                      <img :src="feishuQRImg" alt="" />
                    </div>

                    <div class="qr_tip">也可扫描上方二维码填写作品提交信息</div>
                  </div>
                </div>
              </div>
              <div class="item2-list">
                <div class="index-box">
                  <div class="index">5</div>
                </div>
                <div class="text">
                  参赛选手和队长可扫描下方二维码或通过群号加入赛事官方交流群: 545769639
                  (入群暗号:iii)
                  <div class="qq_qr_img_wrap">
                    <div class="qq_qr_img">
                      <img :src="qqGroupImg" alt="" />
                    </div>
                  </div>
                </div>
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
}

.text {
  font-size: 12rem;

  .submit-content {
    font-weight: bold;
  }
}

.nav {
  margin: @contentMargin 0;
  position: relative;
  z-index: 1;

  .box-wrap {
    margin: 0 auto;
    font-size: @contentFontSize;
    padding: @contentPadding;
    padding-bottom: 60rem;
    background-color: rgba(000, 000, 000, 0.25);

    .title {
      position: relative;
      text-align: center;
      font-size: @titleFontSize;
      margin-bottom: 50rem;

      .main-img {
        position: absolute;
        top: -8rem;
        left: calc(50% - ((2200rem / 9) / 2));
        width: calc(2166rem / 9);
        height: calc(563rem / 9);

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .main-title {
        position: relative;
        z-index: 1;
      }
    }
  }
}

.nav {
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
        top: -18rem;
        left: -8rem;
        width: calc(1169rem / 7.5);
        height: calc(502rem / 7.5);

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .sub-title {
        z-index: 1;
        position: relative;
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
          text-align: center;
          border-radius: 100%;
          letter-spacing: 0;
        }

        .specail-index {
          margin-top: 7rem;
        }
      }

      .text {
        flex: 1;
        margin-left: 10rem;
        font-size: 18rem;
      }

      .specail-name {
        font-size: 19rem;
        font-weight: bold;
      }
    }
  }

  .person-list {
    .item-box {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    .person-item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      margin-bottom: 40rem;

      .img-container {
        width: 120rem;
        height: 120rem;
        margin-bottom: 10rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
          object-fit: cover;
        }
      }

      .text {
        margin-top: 10rem;
        text-align: center;
        width: 100%;
        font-size: 18rem;
      }
    }

    .person-item-mobile {
      width: 50%;
      .text {
        font-size: 17rem;
      }

      &:nth-child(3) {
        width: 100%;
      }

      &:nth-child(6) {
        width: 100%;
      }

      &:nth-child(5) {
        .line2 {
          height: 34rem;
          line-height: 60rem;
        }
      }
    }

    .person-item-pc {
      width: 33%;

      &:nth-child(4) {
        .line2 {
          margin-top: 40rem;
        }
      }

      &:nth-child(5) {
        .line2 {
          margin-top: 40rem;
        }
      }
    }
  }
}

#nav1 {
  .content {
    line-height: 40rem;
  }

  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .main-img-wrap {
      width: 200rem;
      margin: 0 auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .text {
      line-height: 40rem;
      font-size: 20rem;
    }

    .line2 {
      margin-top: 20rem;
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
  .list1 {
    .text {
      line-height: 40rem;
    }
  }
  .list2 {
    .item {
      flex-direction: column;
      margin-bottom: 50rem;

      &:nth-child(5) {
        .img-contain {
          width: 110rem;
          height: 110rem;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }

      .img-contain {
        width: 100rem;
        height: 100rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .name {
        margin: 10rem 0;
        font-size: 20rem;
      }

      .award {
        font-size: 19rem;
        margin-bottom: 10rem;
      }

      .desc {
        line-height: 40rem;
        font-size: 17rem;
      }
    }
  }

  .tip {
    font-size: 15rem;
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

  .item-list {
    line-height: 45rem;
    margin-left: 28rem;
    font-size: 22rem;
    margin-bottom: 20rem;
  }
  .item {
    flex-direction: column;
  }

  .item2-list {
    margin-bottom: 20rem;
    display: flex;

    .deadtime {
      font-weight: bold;
    }

    .feishu_qr_img_wrap {
      margin-top: 20rem;
      width: calc(100% - 54rem);
      text-align: center;

      .feishu_qr_img {
        width: calc(442rem / 3);
        margin: 0 auto;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .qr_tip {
        margin-top: 20rem;
        font-size: 14rem;
      }
    }

    .qq_qr_img_wrap {
      width: calc(100% - 54rem);
    }

    .qq_qr_img {
      width: calc(1284rem / 6);
      height: calc(2283rem / 6);
      margin: 0 auto;
      margin-top: 20rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

#nav7 {
  .img-view {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .nav7-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20rem 0 50rem;
  }

  .nav7-bottom {
    font-size: 16rem;
  }
}
</style>
