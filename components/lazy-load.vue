<template>
  <div
    v-observe-visibility="{
                            callback: visibilityChanged,
                            throttle: 1000,
                            once: true
                          }"
    class="wrapper"
  >
    <transition name="fade">
      <div v-if="fullscreen" class="fullscreen">
        <img @click="fullscreen = !fullscreen" class="close__icon" src="icon/close.png" alt>
        <img
          :style="{ height: GetFulscreenSize().height, width: GetFulscreenSize().width }"
          class="fulscreen__img"
          :src="'https://svobodina.ru/wp-content/uploads/' + arrayName.FileName"
          alt
        >
      </div>
    </transition>
    <img
      v-if="isVisible"
      class="ph"
      :src="'https://svobodina.ru/wp-content/uploads/' +
            arrayName.FileName.slice(0, -4) +
            '-1.' +
            arrayName.FileTypeExtension"
      alt
    >
    <img
      v-if="isVisible"
      :style="{opacity: opacity}"
      class="original"
      @load="opacity = 1"
      :src="'https://svobodina.ru/wp-content/uploads/' + arrayName.FileName"
      alt
    >
    <img @click="fullscreen = !fullscreen" class="fullscreen__icon" src="/icon/fullscreen.png" alt>
    <div class="discription">
      <transition name="fade">
        <div class="discription__block" v-if="show">
          <p class="discription__text">
            ShutterSpeed : {{arrayName.ShutterSpeedValue}}
            <br>
            Aperture : {{arrayName.ApertureValue}}
            <br>
            FocalLength : {{arrayName.FocalLength}}
            <br>
          </p>
        </div>
      </transition>
      <svg
        style="enable-background:new 0 0 487.7 487.7; display: none; stroke:none; fill:#03a9f4"
        version="1.1"
        viewBox="0 0 487.7 487.7"
      >
        <symbol id="camera">
          <g>
            <path
              d="M480.5,151.65c-2-1.1-48.8-25.4-126.8-40.1l-3-12.8c-7.8-33.5-37.3-57-71.8-57h-70.1c-34.4,0-63.9,23.4-71.8,57l-3,12.8
			c-78,14.6-124.8,39-126.8,40.1c-4.4,2.3-7.2,6.9-7.2,11.9v159c0,63.7,51.8,115.6,115.6,115.6c7.5,0,13.5-6,13.5-13.5
			s-6-13.5-13.5-13.5c-48.8,0-88.6-39.7-88.6-88.6v-150.5c16.2-7.4,59-24.9,120.5-35.5c5.3-0.9,9.6-5,10.8-10.2l5-21.5
			c5-21.2,23.6-36.1,45.5-36.1h70.1c21.8,0,40.5,14.8,45.5,36.1l5,21.5c1.2,5.3,5.5,9.3,10.8,10.2c61.3,10.6,104.2,28.1,120.5,35.5
			v150.5c0,48.8-39.7,88.6-88.6,88.6c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5c63.7,0,115.6-51.8,115.6-115.6v-159
			C487.7,158.55,485,153.95,480.5,151.65z"
            ></path>
            <path
              d="M44.2,124.05c1.4,0,2.8-0.2,4.2-0.7c14.2-4.7,29.1-8.9,44.3-12.5c7.3-1.7,11.7-9,10-16.2c-1.7-7.3-9-11.7-16.2-10
			c-15.9,3.8-31.6,8.2-46.6,13.1c-7.1,2.3-10.9,10-8.6,17C33.3,120.45,38.6,124.05,44.2,124.05z"
            ></path>
            <path
              d="M243.9,135.05c-85.7,0-155.4,69.7-155.4,155.4s69.7,155.5,155.4,155.5s155.4-69.7,155.4-155.4S329.6,135.05,243.9,135.05z
			 M243.9,418.95c-70.8,0-128.4-57.6-128.4-128.4s57.6-128.5,128.4-128.5s128.4,57.6,128.4,128.4S314.7,418.95,243.9,418.95z"
            ></path>
          </g>
        </symbol>
      </svg>
      <svg
        class="discription__icon"
        @click="show = !show"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 487.7 487.7"
      >
        <use xlink:href="#camera"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arrayName: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      size: 200,
      fullscreen: false,
      show: false,
      onLoading: false,
      opacity: 0,
      isVisible: false
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    },
    getPictureSize() {
      this.size =
        this.arrayName.width < 480
          ? 480
          : this.arrayName.width < 720
          ? 720
          : this.arrayName.width < 1024
          ? 1024
          : this.arrayName.width < 1920
          ? 1920
          : 2560;
    },
    GetFulscreenSize() {
      if (window.innerWidth / window.innerHeight < 1) {
        return {
          width: "auto",
          height: "100%"
        };
      } else {
        return {
          width: "100%",
          height: "auto"
        };
      }
    }
    // load() {
    //   return (this.opacity = 1);
    // },
    // onLoadingImg() {
    //   return (this.onLoading = !this.onLoading);
    // }
  },
  mounted() {
    this.getPictureSize();
  }
};
</script>

<style scoped>
/* стиль для открытия на всё окно */
.fullscreen__icon {
  grid-area: 1/1/2/2;
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px;
  cursor: pointer;
}
.fullscreen {
  background-color: rgb(0, 0, 0);
  overflow-y: auto;
  overflow-x: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
}
.close__icon {
  cursor: pointer;
  position: fixed;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
}
.fulscreen__img {
  /* width: 100%; */
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.discription {
  /* width: 200px; */
  height: 105px;
  grid-area: 1/1/2/2;
  z-index: 2;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 5px;
}
.discription__text {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  padding: 6px;
  color: white;
  text-shadow: 0.075em 0.08em 0.1em rgba(0, 0, 0, 1);
  font-family: "Roboto Slab", serif;
  font-weight: 100;
  font-size: 15px;
  line-height: 15px;
  /* margin: 0; */
}
.discription__block {
  margin-bottom: 10px;
}
.discription__icon {
  fill: #03a9f4;
  cursor: pointer;
  position: absolute;
  margin-bottom: 5px;
  margin-top: 5px;
  bottom: 0px;
  width: 30px;
  height: 30px;
}
h1 {
  z-index: 2;
  grid-area: 1/1/2/2;
  color: aliceblue;
}
.ph,
.original {
  height: 101%;
  width: 101%;
  object-fit: cover;
  object-position: 50% 50%;
}
.original {
  grid-area: 1/1/2/2;
  transition: opacity 0.1s linear;
  z-index: 1;
}
.ph {
  grid-area: 1/1/2/2;
  filter: blur(10px);
  z-index: 0;
}
.wrapper {
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>


