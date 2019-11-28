<template>
  <div
    v-observe-visibility="{
                    callback: visibilityChanged,
                    throttle:400,
                    once: true
}"
    class="lazy__wrapper"
  >
    <div ref="plane" v-if="isVisible" class="plane">
      <picture class="lazy__original" :style="{opacity: opacity}">
        <source
          @load="opacity = 1"
          type="image/webp"
          :srcset="`https://svobodina.ru/wp-content/uploads/${FileName}`"
          alt="SvobodinaPhoto"
        >
        <source
          @load="opacity = 1"
          type="image/jpg"
          :srcset="`https://svobodina.ru/wp-content/uploads/${FileName}`"
          alt="SvobodinaPhoto"
        >
        <img
          @load="opacity = 1"
          :src="`https://svobodina.ru/wp-content/uploads/${FileName}`"
          alt="SvobodinaPhoto"
        >
      </picture>
      <img
        class="lazy__ph"
        :src="`https://svobodina.ru/wp-content/uploads/${FileName.slice(0, -4)}-1.jpg`"
        alt="SvobodinaPhoto"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    FileName: {
      required: true,
      type: String
    },
    width: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      size: null,
      opacity: 0,
      isVisible: false
    };
  },
  methods: {
    getImageSize() {
      this.size =
        this.width < 480
          ? 480
          : this.width < 720
          ? 720
          : this.width < 1024
          ? 1024
          : this.width < 1920
          ? 1920
          : 2560;
    },
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }
  }
};
</script>


<style lang="scss" scoped>
.lazy__ph,
.lazy__original,
.lazy__original > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
.lazy__original {
  grid-area: 1/1/2/2;
  transition: opacity 0.1s linear;
  z-index: 1;
}
.lazy__ph {
  grid-area: 1/1/2/2;
  filter: blur(10px);
  z-index: 0;
}
.plane {
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.lazy__wrapper {
  width: 100%;
  height: 100%;
}
</style>
