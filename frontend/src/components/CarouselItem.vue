<template>
  <transition :name="transitionEffect">
    <div class="carousel-item" v-show="currentSlide === index" @mouseenter="$emit('mouseenter')" @mouseout="$emit('mouseout')">
      <img :src="require(`@/assets/images/${slide}`)"/>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction"],
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-in" : "slide-out"
    }
  }
}
</script>

<style lang="less">
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    display: block;
    width: 1920px;
    height: 600px;
  }
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 0.3s ease-in-out
}
.slide-in-enter-from {
  transform: translateX(100%)
}
.slide-in-leave-to {
  transform: translateX(-100%);
}
.slide-out-enter-from {
  transform: translateX(-100%)
}
.slide-out-leave-to {
  transform: translateX(100%);
}
</style>