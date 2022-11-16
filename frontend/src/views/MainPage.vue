<template>
  <div class="home">
    <div class="home-banner">
      <Carousel :slides="slides"/>
    </div>
    <div class="in-container">
      <div class="eco-planet">
        <div class="title">
          <span id="big" v-motion="motions.mainTitle">ECO PLANET</span>
          <span id="small" v-motion="motions.subTitle">ECO Planet은?</span>
        </div>
        <div class="subject">
          <span v-motion="motions.text1">ECO PLANET은 ESG Financial 프로젝트를 진행하고 있는 블록체인 개발 전문 기업입니다.</span>
          <span v-motion="motions.text2">ESG Financial 프로젝트는 ECO DeFi, ECONFT, 두가지 플렛폼을 개발하고 서비스하고 있습니다.</span>
          <span v-motion="motions.text3">ECO DeFi는 Lending DeFi 서비스로 바이낸스 기반으로 개발되었고, ECONFT는 이더리움 기반으로 개발된 NFT플렛폼 입니다.</span>
        </div>
      </div>

      <div class="eco-box">
        <div class="defi">
          <img src="@/assets/images/img_logo_eco1.png" v-motion="motions.box1"/>
          <div class="text" v-motion="motions.box2">
            <span>신재생에너지 NFT의 발행과 판매, 환경관련 컨텐츠 판매 및 다양한 NFT 판매를 통한 수익의</span>
            <span>일부를 환경단체에 기부하거나 환경보호 관련 활동에 기여할 수 있는 economy를 가진</span>
            <span>NFT 마켓 플레이스 입니다.</span>
          </div>
        </div>
      </div>

      <div class="eco-planet">
        <div class="title">
          <span id="big" v-motion="motions.mainTitle_v">OUR SERVICE</span>
          <span id="small" v-motion="motions.subTitle_v">ECO Planet에서 제공하는 Service를 확인하세요.</span>
        </div>
        <div class="subject">
          <span v-motion="motions.text1">ECO PLANET은 토큰 발행 부터 Wallet개발, DEX, Defi, NFT등 블록체인 비즈니스에 필요한 모든 개발 서비스를 제공하고 있습니다.</span>
          <span v-motion="motions.text2">이더리움, 클레이튼, BNB, 솔라나, 폴리곤 등 다양한 메인넷 위에 Dapp을 제작해서 온보딩 할 수 있습니다.</span>
          <span v-motion="motions.text3">PtoE 게임부터 NtoE 서비스까지 개발 기획 및 설계를 진행해 드립니다.</span>
        </div>
      </div>

      <div class="diagram">
        <div class="image">
          <img src="@/assets/images/img_diagram1.png" v-motion="motions.dia1" />
          <img src="@/assets/images/img_diagram2.png" v-motion="motions.dia2" />
          <img src="@/assets/images/img_diagram3.png" v-motion="motions.dia3" />
        </div>
      </div>

      <div class="circle-diagram">
        <div class="circle1" v-motion="motions.cir1">
          <img src="@/assets/images/img_icon_circle1.png"/>
          <span id=cir1>기업 NFT</span>
          <div class="circle1-text1">
            <span>기업 전용 NFT는 회사 홈페이지의 회원 증명 NFT, 기업의 임직원 NFT 등 다양한 NFT를 기획 발행하고 있습니다.</span>
            <span>마케팅용으로 고객과의 소통을 위한 NFT를 활용하여 고객 데이터의 주권을 고객에게 제공하고</span>
            <span>기업과 고객이 상생하는 생태계를 조성할 수 있도록 설계 및 개발을 진행하고 있습니다.</span>
          </div>
        </div>
        <div class="circle1" v-motion="motions.cir2">
          <div class="circle1-text2">
            <span>브랜드 마케팅을 위한 NFT의 발행은 중요한 이슈로 떠오르고 있습니다. 브랜드의 가치를 NFT화 하여</span>
            <span>주요 고객들에게 소유할 수 있도록 하거나, 타 브랜드와 콜라보에서도 NFT를 활용하고 있습니다.</span>
            <span>메타버스 안에서의 브랜드 NFT는 더욱 폭발적인 브랜드의 힘을 갖게 할 것 입니다.</span>
          </div>
          <span id=cir2>브랜드 NFT</span>
          <img src="@/assets/images/img_icon_circle2.png" />
        </div>
        <div class="circle1" v-motion="motions.cir3">
          <span id=cir3>지역관광 NFT</span>
          <img src="@/assets/images/img_icon_circle3.png" />
          <div class="circle1-text1">
            <span>지역 관광 활성화를 위한 NFT 생태계의 설계 및 발행에 대해서 컨설팅부터 개발 및 발행까지</span>
            <span>블록체인의 모든 서비스를 지원해 드립니다.</span>
          </div>
        </div>
      </div>

      <div class="eco-planet">
        <div class="title">
          <span id="big" v-motion="motions.mainTitle_v">PORTFOLIO</span>
          <span id="small" v-motion="motions.subTitle_v">ECO Planet의 PortFolio를 확인하세요.</span>
        </div>
      </div>
      <div class="portfolio">
        <PortFolio></PortFolio>
      </div>

      <div class="eco-planet">
        <div class="title">
          <span id="big" v-motion="motions.mainTitle_v">PARTNER</span>
          <span id="small" v-motion="motions.subTitle_v">ECO Planet과 함께하는 Partner사 입니다.</span>
        </div>
      </div>
      <div class="partners">
        <div class="partners-item" v-for="(item, index) in partners" :key="index">
          <img 
            v-if="index <= 3 || index >= 8"
            v-motion
            :initial="{x:0, opacity:0}"
            :visibleOnce="{x:0, opacity:1, transition:{delay: `${(index+1)*100}`}}"
            :src="require(`@/assets/images/${item}`)"
            />
          <img 
            v-else
            v-motion
            :initial="{x:0, opacity:0}"
            :visibleOnce="{x:0, opacity:1, transition:{delay: `${(partners.length - index+1)*100}`}}"
            :src="require(`@/assets/images/${item}`)"
            />
        </div>
      </div>

      <div class="contact-us">
        <div class="eco-planet">
          <div class="title">
            <span id="big" v-motion="motions.mainTitle_v">CONTACT US</span>
            <span id="small" v-motion="motions.subTitle_v">문의 및 제휴 요청</span>
          </div>
        </div>

        <div class="inquire-form">
          <div class="form" v-for="(name, value, index) in state" :key="index" :value="value">
            <div class="form-title"
              v-motion
              :initial="{ x: 0, opacity: 0 }"
              :visibleOnce="{x:0, opacity:1, transition:{delay: `${(index+1)*100}`}}"
            >
              <img src="@/assets/images/img_icon_contact.png" />
              <span>{{contact[index]}}</span>
            </div>
            <input type="text"
              :v-model="value"
              :placeholder="`${contact[index]}을 입력하세요.`"
              v-motion
              :initial="{x:200, opacity:0}"
              :visibleOnce="{x:0, opacity:1, transition:{delay: `${(index+1)*100}`}}"
              required>
          </div>
          <!-- <div class="form">
            <div class="form-title">
              <img src="@/assets/images/img_icon_contact.png" />
              <span>이름</span>
            </div>
            <input type="text" v-model="name" placeholder="이름을 입력하세요." v-motion="motions.contact1" required>
          </div> -->
          <!-- <div class="form">
            <div class="form-title">
              <img v-motion="motions.contact_t2" src="@/assets/images/img_icon_contact.png" />
              <span v-motion="motions.contact_t2">업체명</span>
            </div>
            <input type="text" v-model="company" placeholder="업체명을 입력하세요." v-motion="motions.contact2" required>
          </div>
          <div class="form">
            <div class="form-title">
              <img v-motion="motions.contact_t3" src="@/assets/images/img_icon_contact.png" />
              <span v-motion="motions.contact_t3">연락처</span>
            </div>
            <input type="text" v-model="phone" placeholder="연락처을 입력하세요." v-motion="motions.contact3" required>
          </div>
          <div class="form">
            <div class="form-title">
              <img v-motion="motions.contact_t4" src="@/assets/images/img_icon_contact.png" />
              <span v-motion="motions.contact_t4">이메일</span>
            </div>
            <input type="text" v-model="email" placeholder="이메일을 입력하세요." v-motion="motions.contact4" required>
          </div>
          <div class="form">
            <div class="form-title">
              <img v-motion="motions.contact_t5" src="@/assets/images/img_icon_contact.png" />
              <span v-motion="motions.contact_t5">제목</span>
            </div>
            <input type="text" v-model="title" placeholder="제목을 입력하세요." v-motion="motions.contact5" required>
          </div> -->
        </div>
        <div class="text-form">
          <img v-motion="motions.contact_t6" src="@/assets/images/img_icon_contact.png" />
          <span v-motion="motions.contact_t6">내용</span>
          <textarea v-model="message" placeholder="내용을 입력하세요." cols="30" rows="10" v-motion="motions.contact6"></textarea>
        </div>
        <div class="contact-bottom">
          <div class="check-box">
            <input type="checkbox" @click="checkBox($event)">
            <span>개인정보 처리방침에 동의합니다.</span>
          </div>
          <div v-if="this.checked == true" class="send-button-true" @click="sendEmail()">
              <span>SAND</span>
          </div>
          <div v-else class="send-button-false">
              <span>SAND</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const motions = require("../motions")
import Carousel from '@/components/Carousel.vue';
import PortFolio from '@/components/PortFolio.vue';
import { useMotion } from '@vueuse/motion'
// import { ref } from 'vue'

export default {
  components: { Carousel, PortFolio },
  data: () => ({
    slides: ["main_img1.png", "main_img2.png", "main_img3.png"],
    state: {
      name: '',
      company: '',
      phone: '',
      email: '',
      title: '',
    },
    contact:["이름", "업체명", "연락처", "이메일", "제목"],
    partners: [
      "img_partners_WaltonChain.png",
      "img_partners_prix.png",
      "img_partners_KPOWER.png",
      "img_partners_pingstone.png",
      "world_miss_university_logo.png",
      "img_partners_F1soft.png",
      "img_partners_ecomagic.png",
      "img_partners_Dcoin.png",
      "img_partners_SKYplay.png",
      "img_partners_ENPGAMES.png",
      "img_partners_AniAsso.png",
      "img_partners_TETERU.png"
    ],
    checked: false
  }),
  setup() { return { motions } },
  mounted() {
    this.partLength()
    const smtp = document.createElement('script')
    smtp.setAttribute('src', 'https://smtpjs.com/v3/smtp.js')
    document.head.appendChild(smtp)
  },
  methods: {
    partLength() {
      console.log(this.partners.length)
      console.log(this.partners[0])
      console.log(this.partners[4])
      console.log(this.state.name)
    },
    sendEmail() {
      Email.send({
        SecureToken: "9a8c5133-2ae7-4a7a-bae4-1c3069a9fa51",
        To: 'info@eco-planet.io',
        Name: this.state.name,
        Company: this.state.company,
        Phone: this.state.phone,
        From: 'info@eco-planet.io',
        Subject: this.state.title,
        Body: `[Name:${this.state.name}][Company:${this.state.company}][Phone:${this.state.phone}]`
      }).then(
        message => alert(message)
      );
    },
    checkBox(e) {
      if (e.target.checked) {
        this.checked = true
      } else {
        this.checked = false
      }
    }
  }
}
</script>
<style lang="less">
@import url("../assets/fonts/NotoSans.css");

.home {
  display: flex;
  flex-direction: column;

  .in-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .eco-planet {
      margin-top: 150px;
      .title {
        font-family: "Noto Sans 500 KR";
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span#big {
          font-size: 60px;
          font-weight: 900;
          color: #333333;
        }
        span#small{color:#666666}
      }
      .subject {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight:600;
        font-size: 20px;
        color: #333333;
        span {margin-top:5px;}
      }
    }

    .eco-box {
      margin-top: 60px;
      width: 1140px;
      height: 250px;
      background: #f3f3f3;
      border-radius: 30px;
      box-shadow: 0 3px 12px hsl(0deg 0% 42% / 48%);
      display: flex;
      justify-content: center;
      .defi {
        display: flex;
        align-items: center;
        justify-content: center;
        .text {
          font-family: "Noto Sans 400 KR";
          display: flex;
          flex-direction: column;
          justify-content: center;
          span {
            font-size: 16px;
            color: #333333
          }
        }
        img {margin-right: 25px; width: 350px}
      }
    }

    .diagram {
      display: flex;
      align-items: center;
      justify-content: center;
      
      margin-top: 60px;
      background: url(@/assets/images/img_banner_diagram.png) no-repeat 50% 50%;
      background-attachment: fixed;
      height: 560px;
      width: 100%;
      .image {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .circle-diagram {
      font-family: 'Noto sans 400 KR';
      position: relative;
      .circle1 {
        margin-top: 100px;
        width: 1240px;
        height: 150px;
        border-radius: 150px;
        box-shadow: 0 3px 12px hsl(0deg 0% 42% / 48%);
        background: #f3f3f3;
        display: flex;
        &-text1 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin-right: auto;
          margin-left: 10px;
        }
        &-text2 {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          margin-left: auto;
          margin-right: 10px;
        }
        span {font-size: 18px; font-weight: 400;}
        span#cir1{
          position: absolute;
          font-size: 35px;
          font-weight: bold;
          color: #fff;
          transform: translate(50%, 88%);
        }
        span#cir2{
          position: absolute;
          font-size: 35px;
          font-weight: bold;
          color: #fff;
          transform: translate(585%, 88%);
        }
        span#cir3{
          position: absolute;
          font-size: 35px;
          font-weight: bold;
          color: #fff;
          transform: translate(20%, 88%);
        }
        img {height:100%}
      }
    }

    .portfolio {
      width: 100%;
      height: 900px;
    }

    .partners {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1240px;
      flex-wrap: wrap;
      &-item {
        display: flex;
        img {
          width: 150px;
          margin:50px;
        }
      }
    }

    .contact-us {
      margin-top: 150px;
      font-family: 'Noto sans 400 KR';
      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span#big {
          font-size: 50px;
          font-weight: 900
        }
        span#small {font-weight: bold;}
      }
      .inquire-form {
        margin-top: 50px;
        .form {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          &-title {
            span {
              font-size: 16px;
              font-weight: bold;
            }
            img { margin-right:10px;}
          }
          input {
            margin-left: 30px;
            width: 600px !important;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
            border-bottom: 1px solid gray;
          }
        }
      }
      .text-form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 100px;
        span {
          font-size: 16px;
          font-weight: bold;
        }
        textarea {
          margin-left: 30px;
          width: 600px !important;
          border-top: 0px;
          border-left: 0px;
          border-right: 0px;
          border-bottom: 1px solid gray;
        }
      }
      .contact-bottom {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        .check-box {
          display: flex;
          align-items: center;
          justify-content: center;
          input[type="checkbox"] {
            margin-right: 5px;
            width: 20px;
            height: 20px;
          }
        }
        .send-button-true {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #D953BC;
          width: 150px;
          height: 40px;
          font-size: 18px;
          border-radius: 10px;
          color: #f3f3f3;
          margin-left: auto;
          cursor: pointer;
        }
        .send-button-false {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #696969;
          width: 150px;
          height: 40px;
          font-size: 18px;
          border-radius: 10px;
          color: #f3f3f3;
          margin-left: auto;
        }
      }
    }
  }
}
</style>