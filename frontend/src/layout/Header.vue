<template>
  <div class="header">
    <div class="in-container">
      <div class="left">
        <img src="@/assets/images/img_eco-planet_logo.png" alt="eco-planet-logo"/>
        <div class="menu">
          <span v-for="m in menu" :key="m" @click="goToPage(m)">{{$t('header.' + m.name)}}</span>
        </div>
      </div>
      <div class="right">
        <div class="select-box">
          <select v-model="$i18n.locale">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{locale}}</option>
          </select>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>

export default {
  name: {},
  components: {},
  data: () => ({
    menu: [
      { name: "header1"},
      { name: "header2"},
      { name: "header3"},
      { name: "header4"},
      { name: "header5"},
    ],
    hoverColor: "#3d6fe3",
  }),
  methods: {
    goToPage(menu) {
      if (menu == "gallery") {
        this.$router.push({path:'/gallery'})
      } else {
        this.$router.push({path:'/'})
      }
    }
  },
}
</script>

<style lang="less">
@import url("../assets/fonts/NotoSans.css");

.header {
  font-family: 'Roboto';
  position: fixed;
  background: #fff;
  width:100%;
  display: flex;
  justify-content: center;
  z-index:5;
  box-shadow: 0px 3px 5px 1px hsl(0deg 0% 42% / 16%);
  .in-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1240px;
    height: 80px;
    .left {
      display: flex;
      align-items: center;
      .menu {
        margin-left: 30px;
        span {
          font-weight: bold;
          margin-left: 40px;
          cursor: pointer;
        }
        span:hover {
          color: #3d6fe3;
          cursor: pointer;
        }
      }
    }
    .right {
      .select-box {
        select {
          font-family: 'Roboto';
          font-weight: bold;
          font-size: 16px;
          border: 0px;
          cursor: pointer;
        }
        select:hover { 
          color: #3d6fe3;
          font-weight: bold;
        }
      }
    }
  }
}
</style>