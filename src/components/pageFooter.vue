<script setup>
import ImgSponsorUrl from '@/assets/img/copyright/sponsor.png'
import ImgCoSponsor1Url from '@/assets/img/copyright/co-sponsor1.png'
import ImgCoSponsor2Url from '@/assets/img/copyright/co-sponsor2.png'
import ImgCoSponsor3Url from '@/assets/img/copyright/co-sponsor3.png'
import ImgCoSponsor4Url from '@/assets/img/copyright/co-sponsor4.png'
import ImgCoSponsor5Url from '@/assets/img/copyright/co-sponsor5.png'
</script>

<template>
  <footer class="footer-wrap">
    <div class="box-wrap">
      <div class="copy">*本赛事的最终解释权归主办单位所有</div>
      <div class="text">赛事主办方</div>
      <div class="medium">
        <div class="img-contain"><img :src="ImgSponsorUrl" alt="" srcset="" /></div>
      </div>
      <div class="text">赛事协办方</div>
      <div class="co-sponsor-box">
        <div class="co-sponsor-wrap">
          <div class="img-contain1">
            <img :src="ImgCoSponsor1Url" alt="" srcset="" />
          </div>
          <div class="img-contain2">
            <img :src="ImgCoSponsor2Url" alt="" srcset="" />
          </div>
        </div>

        <div class="co-sponsor-wrap">
          <div class="img-contain3">
            <img :src="ImgCoSponsor3Url" alt="" srcset="" />
          </div>
          <div class="img-contain4">
            <img :src="ImgCoSponsor4Url" alt="" srcset="" />
          </div>
          <div class="img-contain5">
            <img :src="ImgCoSponsor5Url" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
@titleColor: #fff;

* {
  color: @titleColor;
}

.footer-wrap {
  position: relative;

  .box-wrap {
    margin: 0 auto;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 160rem;
  }

  .copy {
    font-size: 16rem;
    margin-bottom: 20rem;
  }

  .text {
    margin-top: 50rem;
    font-size: 28rem;
    font-weight: bold;
  }

  .img-contain {
    width: calc(1108rem / 5);
    height: calc(1280rem / 5);
    margin-top: 30rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.co-sponsor-wrap {
  margin-top: 50rem;
  width: 1000rem;
  justify-content: center;
  display: flex;

  .img-contain1 {
    width: calc(813rem / 6);
    margin-right: 60rem;
  }

  .img-contain2 {
    width: calc(822rem / 5.5);
  }

  .img-contain3 {
    width: calc(400rem / 3);
  }

  .img-contain4 {
    width: calc(1280rem / 4);
    margin: 0 50rem;
  }

  .img-contain5 {
    width: calc(1280rem / 7);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
