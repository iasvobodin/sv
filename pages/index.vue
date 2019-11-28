<template>
  <section class="container">
    <section class="block_start">
      <logo class="block_start_headline"></logo>
      <img
        class="block_start_img_1 block_start_img_anim_1"
        src="/img/14821-01-18.jpg"
        alt="утончённо"
      >
      <client-only>
        <HoverEffect
          :speed="0.02"
          image="img/15301-05-19.jpg"
          class="block_start_img_2 block_start_img_anim_2"
        />
        <HoverEffect
          :speed="0.04"
          image="img/169 01-05-19.jpg"
          class="block_start_img_3 block_start_img_anim_3"
        />
      </client-only>
      <h2 class="block_start_text head2">Фотография
        <br>как часть жизни
      </h2>
    </section>
    <section class="block_2">
      <div id="opas_1" class="img_1"></div>
      <div id="opas_2" class="img_2">
        <img
          class="image"
          id="o2"
          src="https://svobodinaphoto.ru/wp-content/uploads/DSC_5488.jpg"
          alt="лошадиные  горизонтальная"
        >
      </div>
      <div id="opas_3" class="img_3">
        <img
          id="o3"
          src="https://svobodinaphoto.ru/wp-content/uploads/1-31-of-35.jpg"
          alt="девочка и сумка"
        >
      </div>
      <div id="container1" class="text container">
        <h2 data-scroll data-scroll-speed="2" class="head2">Консультация
          <!-- С чего начать? -->
        </h2>
        <p ref="container1" class="texture1">
          Мы встречаемся в удобное для вас время и обсуждаем план фотосъёмки.
          <br>Обдумываем вместе
          стилистику, идеи для фотографий, личные пожелания и предпочтения.
          <br>Выбираем фотомаршрут и планируем время cвадебного дня.
        </p>
      </div>
      <div id="container2" class="text container">
        <h2 class="head2">Естественная фотография
          <!-- Как всё пройдёт? -->
        </h2>
        <p ref="container2" class="texture1">{{home.Description}}</p>
      </div>
      <div id="container3" class="text">
        <h2 class="head2">
          <!-- Правовое сопровождение -->
          Результат
        </h2>
        <span class="head2" id="01"></span>
        <p ref="container3" class="texture1">
          Вы получаете
          Мини серию для соцсетей в первые дни после свадьбы.
          <br>Отобранные фотографии с цветокоррекцией и ретушью.
          <br>Готовые снимки вы получите за 14 дней.
          <br>Это законно и eудобно.
        </p>
      </div>
    </section>
  </section>
</template>

<script>
// import LocomotiveScroll from 'locomotive-scroll';

import image from "../static/img/14821-01-18.jpg";
import image2 from "../static/img/15301-05-19.jpg";
import image3 from "../static/img/water.jpg";
const home = () => import("~/data/home.json");
// const scroll = new LocomotiveScroll();
export default {
  data() {
    return {
      r1: 0,
      r2: 0,
      r3: 0,
      isScrolling: false,
      img: image3,
      changeSlide: 0,
      home
    };
  },
  components: {
    VueDisplacementSlideshow: () => import("vue-displacement-slideshow"),
    Logo: () => import("~/components/Logo.vue"),
    HoverEffect: () => import("~/components/hover-effect.vue")
  },
  methods: {
    throttleScroll(e) {
      if (this.isScrolling === false) {
        window.requestAnimationFrame(() => {
          this.dealWithScrolling(e);
          this.isScrolling = false;
        });
      }
      this.isScrolling = true;
    },
    Container() {
      this.r1 = this.$refs.container1.getBoundingClientRect();
      this.r2 = this.$refs.container2.getBoundingClientRect();
      this.r3 = this.$refs.container3.getBoundingClientRect();
    },
    changeTop() {
      if (this.rect1.top < 0) {
        return (this.changetop = 1);
      } else {
        return (this.changetop = 0);
      }
    },

    doSome() {
      if (this.r1.bottom / this.r1.height < 0) {
        return (this.changeSlide = 1);
      } else {
        return (this.changeSlide = 0);
      }
    },
    dealWithScrolling(e) {
      this.Container();
      console.log(this.changeSlide);

      this.doSome();
    },
    clamp(val, min, max) {
      return val > max ? max : val < min ? min : val;
    }
  },
  computed: {
    images() {
      return [image, image2];
    }
  },

  // beforeMount() {
  //   window.addEventListener("scroll", this.throttleScroll, false);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.throttleScroll, false);
  // },
  mounted() {
    // this.init();
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/var.scss";
canvas {
  opacity: 1;
}
.info {
  position: fixed;
  left: 35vw;
  top: 0;
}
.info2 {
  position: fixed;
  left: 55vw;
  top: 0;
}
.texture1,
.texture2,
.texture3,
.texture4,
.texture5 {
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 3.1vw;
  line-height: 3.2vw;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 0px;
}

.block_2 {
  height: auto;
  display: grid;
  grid-template-columns: 5vw 30vw 30vw 30vw 1fr;
  grid-template-rows: 15vh 70vh 15vh auto 110vh auto 110vh auto 110vh;
}

.block_2 img {
  max-height: 100%;
}

.img_1 {
  grid-area: 2/2/3/4;
  position: -webkit-sticky;
  position: sticky;
  top: 15vh;
  z-index: -1;
  -webkit-transition-duration: 0.8s;
  transition-duration: 0.8s;
}
.img_1_active {
  position: -webkit-sticky;
  position: sticky;
  top: 15vh;
  z-index: -1;
  -webkit-transform: translatex(50%);
  transform: translatex(50%);
  opacity: 0;
  -webkit-transition-duration: 0.8s;
  transition-duration: 0.8s;
}
.img_2 {
  grid-area: 2/2/3/4;
  position: -webkit-sticky;
  position: sticky;
  top: 15vh;
  z-index: -1;
  opacity: 0;
  -webkit-transition-duration: 0.8s;
  transition-duration: 0.8s;
}
.img_2_active {
  position: -webkit-sticky;
  position: sticky;
  top: 15vh;
  z-index: -1;
  -webkit-transform: translatex(50%);
  transform: translatex(50%);
  opacity: 1;
  -webkit-transition-duration: 0.8s;
  transition-duration: 0.8s;
}
.img_3 {
  grid-area: 2/3/3/5;
  position: -webkit-sticky;
  position: sticky;
  top: 15vh;
  z-index: -1;
  opacity: 0;
  -webkit-transition-duration: 0.8s;
  transition-duration: 0.8s;
}
.img_3_active {
  position: -webkit-sticky;
  position: sticky;
  top: 15vh;
  z-index: -1;
  -webkit-transform: translatex(-50%);
  transform: translatex(-50%);
  opacity: 1;
  -webkit-transition-duration: 0.8s;
  transition-duration: 0.8s;
}

#container1 {
  grid-area: 4/3/5/5;
}
#container2 {
  grid-area: 6/2/7/4;
}
#container3 {
  grid-area: 8/3/9/5;
}

/* шрифты */

.texture1 {
  background-image: url(https://svobodinaphoto.ru/wp-content/uploads/copy_texture_1_large.jpg);
}

.texture2 {
  background-image: url(https://svobodinaphoto.ru/wp-content/uploads/copy_texture_2_large-1.jpg);
}

.texture3 {
  background-image: url(https://svobodinaphoto.ru/wp-content/uploads/copy_texture_3_large.jpg);
}

.texture4 {
  background-image: url(https://svobodinaphoto.ru/wp-content/uploads/copy_texture_4_large.jpg);
}

.texture5 {
  background-image: url(https://svobodinaphoto.ru/wp-content/uploads/copy_texture_5_large.jpg);
}

.block_start {
  height: 70vw;
  display: grid;
  grid-template-columns: 30px 7.5vw 35vw 7.5vw 10vw 30vw 1fr;
  grid-template-rows: repeat(10, 1fr);
}
.block_start_headline {
  grid-area: 3/3/4/7;
  z-index: 3;
}
.block_start_img_1 {
  grid-area: 1/2/8/5;
  max-width: 100%;
  align-self: end;
  padding-left: 30px;
}
.block_start_img_1 img {
}
.block_start_img_2 {
  grid-area: 3/3/10/4;
  z-index: 2;
  max-width: 100%;
  align-self: end;
  overflow: hidden;
  height: 100%;
}
.block_start_img_3 {
  grid-area: 2/6/8/7;
  z-index: 2;
  max-width: 100%;
  align-self: end;
  overflow: hidden;
  height: 100%;
}
.block_start_text {
  grid-area: 8/5/10/8;
  text-align: right;
  vertical-align: bottom;
  z-index: 3;
  padding-right: 2vw;
}
.head2 {
  font-size: 5vw;
  color: $mainColor;
  line-height: 5vw;
  font-weight: 100;
  margin-bottom: 1vw;
  margin-top: 1vw;
  text-overflow: clip;
}
.block_start_img_anim_1 {
  animation: block_start_img_anim_1 1s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}

@keyframes block_start_img_anim_1 {
  /* 0%{
		transform: translateX(-100%); opacity: 0;
	} */
  0% {
    transform: translateX(-100%);
    opacity: 01;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.block_start_img_anim_2 {
  animation: block_start_img_anim_2 1.2s 0.8s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}

@keyframes block_start_img_anim_2 {
  /* 0%{
		transform: translateX(-100%); opacity: 0;
	} */
  0% {
    transform: translateY(-105%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

.block_start_img_anim_3 {
  animation: block_start_img_anim_3 1.2s 0.8s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.47, 0, 0.18, 1);
}

@keyframes block_start_img_anim_3 {
  /* 0%{
		transform: translateX(-100%); opacity: 0;
	} */
  0% {
    transform: translateY(105%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
