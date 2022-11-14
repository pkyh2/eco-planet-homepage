<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-item 
        v-for="(slide, index) in slides" 
        :key="index" 
        :slide="slide"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
      ></carousel-item>
      <!-- arrow numbering -->
      <carousel-controls
        v-if="controls"
        :slides="slides"
        :current-slide="currentSlide"
        @prev="prev"
        @next="next"
      ></carousel-controls>
    </div>
  </div> 
</template>

<script>
import CarouselItem from './CarouselItem.vue';
import CarouselControls from './CarouselControls.vue';

export default {
  name: "Carousel",
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right"
  }),
  props: {
    slides: {
      type: Array,
      required: true
    },
    controls: {
      type: Boolean,
      default: true
    },
  },
  components: { CarouselItem, CarouselControls },
  mounted() {
    this.startSlideTimer()
  },
  beforeUnmount() {
    this.stopSlideTimer()
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index
    },
    prev(step = -1) {
      const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length - 1;
      this.setCurrentSlide(index)
      this.direction = "left"
    },
    _next(step = 1) {
      const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + step : 0;
      this.setCurrentSlide(index)
      this.direction = "right"
    },
    next(step = 1) {
      this._next(step)
      this.startSlideTimer();
    },
    startSlideTimer() {
      this.stopSlideTimer()
      this.slideInterval = setInterval(() => {
        this._next();
      }, 3000)
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval)
    },
    switchSlide(index) {
      const step = index - this.currentSlide
      if (step > 0) {
        this.next(step)
      } else {
        this.prev(step)
      }
    }
  }
}
</script>

<style lang="less">
// .carousel {
//   &-inner {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     img {
//       width: 100%;
//       margin-top: 80px;
//     }
//   }
// }

.carousel {
  display: flex;
  justify-content: center;
  &-inner {
    margin-top: 80px;
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
  }
}
</style>