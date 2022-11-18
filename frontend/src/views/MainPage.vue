<template>
  <div class="home">
    <div class="home-banner">
      <Carousel v-if="$i18n.locale == 'Korean'" :slides="slides.kor"/>
      <Carousel v-else :slides="slides.eng"/>
    </div>
    <div class="in-container">
      <div class="eco-planet">
        <div class="title">
          <span id="big" v-motion="motions.mainTitle">{{$t('ecoPlanet.title')}}</span>
          <span id="small" v-motion="motions.subTitle">{{$t('ecoPlanet.sub_title')}}</span>
        </div>
        <div class="subject">
          <span v-motion="motions.text1">{{$t('ecoPlanet.ecoDesc1')}}</span>
          <span v-motion="motions.text2">{{$t('ecoPlanet.ecoDesc2')}}</span>
          <span v-motion="motions.text3">{{$t('ecoPlanet.ecoDesc3')}}</span>
        </div>
      </div>

      <div class="eco-box">
        <div class="defi">
          <img src="@/assets/images/img_logo_eco1.png" v-motion="motions.box1"/>
          <div class="text" v-motion="motions.box2">{{$t('ecoPlanet.ecoBox')}}</div>
        </div>
      </div>

      <div class="eco-planet">
        <div class="title">
          <span id="big" v-motion="motions.mainTitle_v">{{$t('ourService.title')}}</span>
          <span id="small" v-motion="motions.subTitle_v">{{$t('ourService.sub_title')}}</span>
        </div>
        <div class="subject">
          <span v-motion="motions.text1">{{$t('ourService.service1')}}</span>
          <span v-motion="motions.text2">{{$t('ourService.service2')}}</span>
          <span v-motion="motions.text3">{{$t('ourService.service3')}}</span>
        </div>
      </div>

      <div class="diagram">
        <div v-if="$i18n.locale == 'Korean'" class="image">
          <img src="@/assets/images/img_diagram1.png" v-motion="motions.dia1" />
          <img src="@/assets/images/img_diagram2.png" v-motion="motions.dia2" />
          <img src="@/assets/images/img_diagram3.png" v-motion="motions.dia3" />
        </div>
        <div v-else class="image">
          <img src="@/assets/images/img_diagram1_eng.png" v-motion="motions.dia1" />
          <img src="@/assets/images/img_diagram2_eng.png" v-motion="motions.dia2" />
          <img src="@/assets/images/img_diagram3_eng.png" v-motion="motions.dia3" />
        </div>
      </div>

      <div class="circle-diagram">
        <div class="circle" v-motion="motions.cir1">
          <div class="circle-img">
            <img src="@/assets/images/img_icon_circle1.png"/>
            <span>{{$t('cirDiagram.title1')}}</span>
          </div>
          <div class="circle-text1">{{$t('cirDiagram.enterpriseNFT')}}</div>
        </div>
        <div class="circle" v-motion="motions.cir2">
          <div class="circle-text2">{{$t('cirDiagram.brandNFT')}}</div>
          <div class="circle-img">
            <img src="@/assets/images/img_icon_circle2.png" />
            <span>{{$t('cirDiagram.title2')}}</span>
          </div>
        </div>
        <div class="circle" v-motion="motions.cir3">
          <div class="circle-img">
            <span>{{$t('cirDiagram.title3')}}</span>
            <img src="@/assets/images/img_icon_circle3.png" />
          </div>
          <div class="circle-text1">{{$t('cirDiagram.localTourismNFT')}}</div>
        </div>
      </div>

      <div class="eco-planet">
        <div class="title">
          <span id="big" v-motion="motions.mainTitle_v">{{$t('portfolio.title')}}</span>
          <span id="small" v-motion="motions.subTitle_v">{{$t('portfolio.sub_title')}}</span>
        </div>
      </div>
      <div class="portfolio">
        <PortFolio></PortFolio>
      </div>

      <div class="eco-planet">
        <div class="title">
          <span id="big" v-motion="motions.mainTitle_v">{{$t('partners.title')}}</span>
          <span id="small" v-motion="motions.subTitle_v">{{$t('partners.sub_title')}}</span>
        </div>
      </div>
      <div class="partners">
        <div class="partners-item" v-for="item in partners" :key="item.id">
          <img 
            v-if="item.id <= 4 || item.id > 8"
            v-motion
            :initial="{x:0, opacity:0}"
            :visibleOnce="{x:0, opacity:1, transition:{delay: `${(partners.length -item.id+1)*100}`}}"
            :src="require(`@/assets/images/${item.image}`)"
            />
          <img 
            v-else
            v-motion
            :initial="{x:0, opacity:0}"
            :visibleOnce="{x:0, opacity:1, transition:{delay: `${(item.id+1)*100}`}}"
            :src="require(`@/assets/images/${item.image}`)"
            />
        </div>
      </div>

      <div class="contact-us">
        <div class="eco-planet">
          <div class="title">
            <span id="big" v-motion="motions.mainTitle_v">{{$t('contact.title')}}</span>
            <span id="small" v-motion="motions.subTitle_v">{{$t('contact.sub_title')}}</span>
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
              <span>{{$t('contact.' + contact[index])}}</span>
            </div>
            <input type="text"
              :v-model="value"
              :placeholder="`${$t('contact.' + contact[index+contact.length/2])}`"
              v-motion
              :initial="{x:200, opacity:0}"
              :visibleOnce="{x:0, opacity:1, transition:{delay: `${(index+1)*100}`}}"
              required>
          </div>
        </div>
        <div class="text-form">
          <div class="text-form-title" v-motion="motions.contact_t6">
            <img src="@/assets/images/img_icon_contact.png" />
            <span>{{$t('contact.inquiry')}}</span>
          </div>
          <textarea v-model="message" :placeholder="`${$t('contact.enter_inquiry')}`" cols="30" rows="10" v-motion="motions.contact6"></textarea>
        </div>
        <div class="contact-bottom">
          <div class="check-box">
            <input type="checkbox" @click="checkBox($event)">
            <span>{{$t('contact.agree')}}</span>
          </div>
          <div v-if="this.checked == true" class="send-button-true" @click="sendEmail()">
              <span>{{$t('contact.send')}}</span>
          </div>
          <div v-else class="send-button-false">
              <span>{{$t('contact.send')}}</span>
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
// import { useMotion } from '@vueuse/motion'
// import { ref } from 'vue'

export default {
  components: { Carousel, PortFolio },
  data: () => ({
    slides: {
      kor: ["main_img1.png", "main_img2.png", "main_img3.png"],
      eng: ["main_img1_eng.png", "main_img2_eng.png", "main_img3_eng.png"]
    },
    diagram: {
      kor: ["img_diagram1.png", "img_diagram2.png", "img_diagram3.png"],
      eng: ["img_diagram1_eng.png", "img_diagram2_eng.png", "img_diagram3_eng.png"]
    },

    state: {
      name: '',
      company: '',
      phone: '',
      email: '',
      title: '',
    },
    contact:["subject", "name", "co_name", "phone", "email", "enter_subject", "enter_name", "enter_co_name", "enter_phone", "enter_email"],
    partners: [
      {
        id: 1,
        image: "img_partners_WaltonChain.png"
      },
      {
        id: 2,
        image: "img_partners_prix.png"
      },
      {
        id: 3,
        image: "img_partners_KPOWER.png"
      },
      {
        id: 4,
        image: "img_partners_pingstone.png"
      },
      {
        id: 5,
        image: "img_partners_wmu.png"
      },
      {
        id: 6,
        image: "img_partners_ecomagic.png"
      },
      {
        id: 7,
        image: "img_partners_F1soft.png"
      },
      {
        id: 8,
        image: "img_partners_Dcoin.png"
      },
      {
        id: 9,
        image: "img_partners_SKYplay.png"
      },
      {
        id: 10,
        image: "img_partners_ENPGAMES.png"
      },
      {
        id: 11,
        image: "img_partners_AniAsso.png"
      },
      {
        id: 12,
        image: "img_partners_TETERU.png"
      },
    ],
    checked: false
  }),
  setup() { return { motions } },
  mounted() {
    const smtp = document.createElement('script')
    smtp.setAttribute('src', 'https://smtpjs.com/v3/smtp.js')
    document.head.appendChild(smtp)
  },
  methods: {
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
          font-size: 16px;
          color: #333333;
          margin-right: 40px;
        }
        img {margin: 50px; width: 350px}
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
      .circle {
        margin-top: 100px;
        width: 1240px;
        height: 150px;
        border-radius: 150px;
        box-shadow: 0 3px 12px hsl(0deg 0% 42% / 48%);
        background: #f3f3f3;
        display: flex;
        &-img {
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            position: absolute;
            font-size: 30px;
            font-weight: bold;
            color: #fff;
          }
        }
        &-text1 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin: 28px;
        }
        &-text2 {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          margin-left: 60px;
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
            display: flex;
            align-items: center;
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
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-title {
          display: flex;
          align-items: center;
          span {
            font-size: 16px;
            font-weight: bold;
          }
          img { margin-right:10px;}
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