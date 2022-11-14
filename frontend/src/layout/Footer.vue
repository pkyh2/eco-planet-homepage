<template>
  <div class="footer">
    <div class="in-container">
      <div class="left">
        <img class="logo" src="@/assets/images/img_footer_logo.png" alt="footer_logo">
      </div>

      <div class="middle">
        <div class="middle-text">
          <div class="name">주식회사 에코플레닛</div>
          <div class="sub">
            <div>서울특별시 서초구 서초중앙로 63, 5층(서초동, 리더스빌딩)</div>
            <div class="com-info">
              <div>사업자번호 : 706-88-02249</div>
              <div class="interval">대표전화 : 02-6101-9955</div>
              <div class="interval">이메일 : info@eco-planet.io</div>
            </div>
            <div>Copyright 2022 ECOPLANET All rights reserved.</div>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="logos">
          <a 
          v-for="item in logos"
          :class="['right-link', item.name]"
          :key="item.name"
          :href="item.href"
          target="_black"
          @click="clickLogo(item, $event)"
          >
            <!-- v-for의 logos리터럴 객체에서 item 인덱스를 하나씩 받아온다. -->
            <img class="logo" :src="item.src" @mouseenter="item.src = item.src_on" @mouseout="item.src = item.src_off"/>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    logos: [
      {
        name: "github",
        src: new URL("@/assets/images/sns01_off.png", import.meta.url).href,
        src_off: new URL("@/assets/images/sns01_off.png", import.meta.url).href,
        src_on: new URL("@/assets/images/sns01_on.png", import.meta.url).href,
        href: ""
      },
      {
        name: "twitter",
        src: new URL("@/assets/images/sns02_off.png", import.meta.url).href,
        src_off: new URL("@/assets/images/sns02_off.png", import.meta.url).href,
        src_on: new URL("@/assets/images/sns02_on.png", import.meta.url).href,
        href: "https://t.me/eco_global"
      },
      {
        name: "telegram",
        src: new URL("@/assets/images/sns03_off.png", import.meta.url).href,
        src_off: new URL("@/assets/images/sns03_off.png", import.meta.url).href,
        src_on: new URL("@/assets/images/sns03_on.png", import.meta.url).href,
        href: "https://twitter.com/esg_financial/"
      },
      {
        name: "blog",
        src: new URL("@/assets/images/sns04_off.png", import.meta.url).href,
        src_off: new URL("@/assets/images/sns04_off.png", import.meta.url).href,
        src_on: new URL("@/assets/images/sns04_on.png", import.meta.url).href,
        href: "https://blog.naver.com/eco-global"
      },
      {
        name: "kakao",
        src: new URL("@/assets/images/sns05_off.png", import.meta.url).href,
        src_off: new URL("@/assets/images/sns05_off.png", import.meta.url).href,
        src_on: new URL("@/assets/images/sns05_on.png", import.meta.url).href,
        href: "https://open.kakao.com/o/gOSs197c"
      },
      {
        name: "medium",
        src: new URL("@/assets/images/sns06_off.png", import.meta.url).href,
        src_off: new URL("@/assets/images/sns06_off.png", import.meta.url).href,
        src_on: new URL("@/assets/images/sns06_on.png", import.meta.url).href,
        href: "https://esgfinancial.medium.com/"
      },
    ]
  }),
  methods: {
    // github 클릭하면 반응없음.
    clickLogo(item, event) {
      if (item.name === 'github') {
        event.preventDefault();
      }
    }
  }

}
</script>

<style lang="less">
.footer {
  margin-top: 300px;
  background: #f5f5f5;
  box-shadow: 0px 6px 30px rgba(84, 102, 154, 0.1);
  display: flex;
  justify-content: center;
  
  @media screen and(max-width:1240px) {
    flex: 0 0 110px;
  }
  
  .in-container {
    width: 1240px;
    height: 180px;
    display: flex;
    align-items: center;

    .left {
      .logo {
        height: 26px;

        @media screen and(max-width:1240px) {
          display: none;
        }
      }
    }

    .middle {
      margin-left: 50px;
      &-text {
        // display: flex;
        // flex-direction: column;
        .name {
          font-family: "Noto Sans 500 KR", sans-serif;
          font-size: 16px;
          color: #767676;
        }
        .sub {
          font-family: "Noto Sans 300 KR", sans-serif;
          color: #9e9e9e;
          div {
            font-size: 12px;
            margin-top: 5px;
          }
          .com-info {
            margin-top: 0px;
            display: flex;
            .interval {
              margin-left: 30px;
            }
          }

        }
      }
    }
    

    .right {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: auto;

      @media screen and(max-width:1240px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
      }

      .logos {
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and(max-width:1240px) {
          width: 100%;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
        }
        
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 24px;

          @media screen and(max-width:1240px) {
            margin-left: 0;
            margin: 0 17px;
          }

          .logo {
            width: 36px;
            cursor: pointer;

            @media screen and(max-width:1240px) {
              height: 15px;
            }
          }
        }
      }
    }
  }
}
</style>