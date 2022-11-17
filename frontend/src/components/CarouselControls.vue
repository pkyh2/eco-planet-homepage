<template>
  <div class="carousel-control">
    <img class="left" src="@/assets/images/img_icon_arrow_left.png" @click="$emit('prev')"/>
    <div class="pagination">
      <span class="current-page">{{currentSlide+1}}</span>
      <span class="divider">|</span>
      <span class="total-page">{{slides.length}}</span>
    </div>
    <img class="right" src="@/assets/images/img_icon_arrow_right.png" @click="$emit('next')"/>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ["slides", "currentSlide"],
  emits: ['prev', 'next'],
  data: () => ({}),
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>

<style lang='less'>
.carousel-control {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90%;
  left:50%;
  .left {
    margin-right: 10px;
    cursor: pointer;
  }
  .right {
    margin-left: 10px;
    cursor: pointer;
  }
  .pagination {
    display:flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    .divider {
      display: flex;
      align-items: center;
      justify-content: center;
      margin:10px;
    }
  }
}
</style>