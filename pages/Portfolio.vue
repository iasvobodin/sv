<template>
  <client-only>
    <section
      :style="{ backgroundColor: bgColor }"
      @mousewheel="$refs.container.scrollLeft += $event.deltaY"
      ref="container"
      class="seriya"
    >
      <div :style="style().wrapper" class="seriya__wrapper">
        <div class="seriya__wrapper__img" v-for="seriya in photoseries" :key="seriya.ID">
          <photoseriesImage @color="bgColor = $event" :objectName="seriya"/>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script>
import photoseries from "~/static/photoseries.json";
export default {
  data() {
    return {
      nw: null,
      nh: null,
      hc: null,
      photoseries,
      bgColor: null,
      show: false
    };
  },
  components: {
    photoseriesImage: () =>
      import("~/components/photoseries/photoseries-image.vue")
  },
  methods: {
    resize() {
      this.nw = window.innerWidth;
      this.hc = (window.innerHeight / 2.7) * 2;
      this.nh = window.innerHeight;
    },
    style() {
      return {
        wrapper: {
          gridTemplateColumns: `repeat(${this.photoseries.length} , ${this.hc *
            0.66}px)`,
          gridTemplateRows: `${this.hc}px`,
          width: `${this.hc * 0.66 * this.photoseries.length +
            (this.nw / 100) * 5}px`,
          left: `${(this.$Width / 100) * 5}px`,
          top: `${(this.nh - this.hc) / 2}px`
        }
      };
    }
  },
  beforeMount() {
    this.resize();
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  }
};
</script>




<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
::-webkit-scrollbar-button {
  width: 1px;
  height: 1px;
}
.seriya {
  position: relative;
  transition: background-color 2s;
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  &__wrapper {
    display: grid;
    position: absolute;
    &__img {
      justify-self: center;
      align-self: center;
      &:nth-child(odd) {
        width: 103%;
        height: 103%;
      }
      &:nth-child(even) {
        width: 97%;
        height: 97%;
      }
    }
  }
}
</style>
