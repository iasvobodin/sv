<template>
  <vue-displacement-slideshow
    :images="images"
    :displacement="img"
    :intensity="0.1"
    :speedIn="1"
    :speedOut="1.4"
    ease="Expo.easeInOut"
    ref="slideshow"
  ></vue-displacement-slideshow>
</template>

<script>
import VueDisplacementSlideshow from "vue-displacement-slideshow";
import image from "../static/img/14821-01-18.jpg";
import image2 from "../static/img/15301-05-19.jpg";
import image3 from "../static/img/169 01-05-19.jpg";
export default {
  props: {
    changeSlide: {
      required: false,
      type: Number,
      default: 0
    }
  },
  computed: {
    images() {
      return [image, image2];
    },
    getChange() {
      if (this.changeSlide > 1) {
        return this.$refs.slideshow.next();
      }
      return 1;
    }
  },
  data() {
    return {
      img: image3
    };
  },
  components: {
    VueDisplacementSlideshow
  },
  methods: {
    clamp(val, min, max) {
      return val > max ? max : val < min ? min : val;
    },
    nextt() {
      console.log("click");

      this.$refs.slideshow.next();
    },
    init() {
      // console.log("Я больше нуляяяяяяяяяяяяяяяяяяя!!!!!");
      // if (this.getChange > 1) {
      //   alert("AAAAAAAAAAAA");
      //   // return this.$refs.slideshow.next();
      // }
      // We loop through all our images by calling the 'next' method of our component every 2 seconds
      // setInterval(() => {
      // }, 4000);
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style>
.vue-displacement-slideshow {
  height: 100vh;
}
canvas {
  display: block;
}
body {
  margin: 0;
}
</style>
