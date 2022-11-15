<template>
  <div class="portfolio">
    <div class="in-container">
      <div class="contents">
        <div class="item" v-motion="motions.port1" @mouseenter="upHere1 = true" @mouseout="upHere1 = false">
          <div v-if="upHere1" class="link">
            <img src="@/assets/images/img_link_ecodefi.png" />
            <div class="link-btn">Eco DeFi</div>
            <div class="link-back"></div>
          </div>
          <img v-else src="@/assets/images/img_link_ecodefi.png" />
          <span>ECO DeFi</span>
        </div>
        <div class="item" v-motion="motions.port2" @mouseenter="upHere2 = true" @mouseout="upHere2 = false">
          <div v-if="upHere2" class="link">
            <img src="@/assets/images/img_link_econft.png" />
            <div class="link-btn">Eco NFT</div>
            <div class="link-back"></div>
          </div>
          <img v-else src="@/assets/images/img_link_econft.png" />
          <span>ECO NFT</span>
        </div>
        <div class="item" v-motion="motions.port3" @mouseenter="upHere3 = true" @mouseout="upHere3 = false">
          <div v-if="upHere3" class="link">
            <img src="@/assets/images/img_link_teteru.png" />
            <div class="link-btn">Teteru NFT</div>
            <div class="link-back"></div>
          </div>
          <img v-else src="@/assets/images/img_link_teteru.png" />
          <span>Teteru</span>
        </div>
        <div class="item" v-motion="motions.port6" @mouseenter="upHere4 = true" @mouseout="upHere4 = false">
          <div v-if="upHere4" class="link">
            <img src="@/assets/images/img_link_wmu.png" />
            <div class="link-btn">WMU NFT</div>
            <div class="link-back"></div>
          </div>
          <img v-else src="@/assets/images/img_link_wmu.png" />
          <span>World Miss University</span>
        </div>
        <div class="item" v-motion="motions.port5" @mouseenter="upHere5 = true" @mouseout="upHere5 = false">
          <div v-if="upHere5" class="link">
            <img src="@/assets/images/img_link_ecointree.png" />
            <div class="link-btn">ECO-In Tree NFT</div>
            <div class="link-back"></div>
          </div>
          <img v-else src="@/assets/images/img_link_ecointree.png" />
          <span>Eco-In tree NFT</span>
        </div>
        <div class="item" v-motion="motions.port4" @mouseenter="upHere6 = true" @mouseout="upHere6 = false">
          <div v-if="upHere6" class="link">
            <img src="@/assets/images/img_link_teteru.png" />
            <div class="link-btn">ENP Games NFT</div>
            <div class="link-back"></div>
          </div>
          <img v-else src="@/assets/images/img_link_enpgames.png" />
          <span>ENP Games PtoE</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { motions } from '../motions'
const motions = require("../motions")

export default {
  setup() { return {motions} },
  data: () => ({
    upHere1: false,
    upHere2: false,
    upHere3: false,
    upHere4: false,
    upHere5: false,
    upHere6: false,
  })
  
}
</script>

<style lang="less">
@import url("../assets/fonts/NotoSans.css");
.portfolio {
  .in-container {
    width: 100%;
    height: 900px;
    margin-top: 40px;
    box-shadow: 0 0px 20px hsl(0deg 0% 42% / 48%);
    .contents {
      width: 1300px;
      display: flex;
      flex-wrap: wrap;
      .item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
        font-family: "Noto Sans 500 KR";
        .link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          &-btn {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 50px;
            margin-top: 140px;
            background: #18c050;
            border-radius: 10px;
            color: #fff;
            font-size: 20px;
            z-index: 2;
            transform: translateY(-70px);
            cursor: pointer;
          }
          &-back {
            position: absolute;
            width: 377px;
            height: 330px;
            background: black;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 20px;
            opacity: 0.7;
            z-index: 1;
          }
        }
        img {
          border: 1px solid #c9c9c9;
          border-radius: 20px;
          width: 377px;
          height: 330px;
          box-shadow: 5px 5px 5px hsl(0deg 0% 10% / 48%);
        }
        span {
          margin-top:10px;
          font-size:20px;
        }
      }
    }
  }
}
</style>