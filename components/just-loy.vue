<template>
  <client-only>
    <div
      class="gallery"
      ref="gallery"
      :style="{ 
      height : `${GetjustifiedLayout.containerHeight}px`, 
      width : `${wc}px`}"
    >
      <div id="canvas" ref="canvas"></div>
      <div
        v-for="image in GetjustifiedLayout.boxes"
        class="v-for"
        :key="image.name"
        :style="{
                  transform: `translate(${Math.floor(image.left + Math.random() * nw/100*1)}px, ${ Math.floor(image.top +Math.random() * nw/100*2)}px)`,
                  width : `${Math.floor(image.width + Math.random() * nw/100*3)}px`, 
                  height : `${Math.floor(image.height + Math.random() * nh/100*2)}px`,
                       }"
      >
        <lazyPicture ref="for" :FileName="image.name" :width="image.width"/>
      </div>
    </div>
  </client-only>
</template>

<script>
import { Curtains } from "curtainsjs";
import { vertex, fragment } from "~/assets/shader2.js";
import justifiedLayout from "justified-layout";
import { debounce } from "lodash";
export default {
  data() {
    return {
      isVisible: false,
      nw: null,
      nh: null,
      wc: null
    };
  },
  props: {
    JLObject: {
      type: Object
    }
  },
  components: {
    lazyPicture: () => import("~/components/lazy-picture.vue")
  },
  computed: {
    container() {
      return this.$refs.canvas;
    },
    GetjustifiedLayout() {
      let layout = justifiedLayout(this.JLObject.JLAspect, {
        fullWidthBreakoutRowCadence: 3,
        targetRowHeight: (this.nh / 100) * 55,
        containerWidth: this.wc,
        containerPadding: {
          top: 100,
          right: 0,
          bottom: 100,
          left: 0
        },
        boxSpacing: {
          horizontal: (this.nw / 100) * 4,
          vertical: (this.nh / 100) * 8
        }
      });
      layout.boxes.forEach((element, index) => {
        element.name = this.JLObject.JLName[index];
      });
      return layout;
    }
  },

  methods: {
    curtain() {
      var curtains = new Curtains({
        container: this.container
      });
      var planes = [];
      var planeElements = document.getElementsByClassName("plane");
      const params = {
        vertexShader: vertex,
        fragmentShader: fragment,
        uniforms: {
          time: {
            name: "uTime", // uniform name that will be passed to our shaders
            type: "1f", // this means our uniform is a float
            value: 0
          }
        }
      };
      // debugger;
        console.log(planeElements);

      for (var i = 0; i < planeElements.length; i++) {
        planes.push(curtains.addPlane(planeElements[i], params));
        handlePlanes(i);
      }
      function handlePlanes(index) {
        var plane = planes[index];
        console.log(plane);
        plane &&
          plane.onRender(function() {
            plane.uniforms.time.value++;
          });
      }
    },
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    },
    resize() {
      this.nw = window.innerWidth;
      this.nh = window.innerHeight;
      if (this.nw / this.nh < 1) {
        this.wc = (this.nw / 100) * 90;
      } else {
        this.wc = (this.nw / 100) * 75;
      }
    }
  },

  beforeMount() {
    this.resize();
    window.addEventListener("resize", debounce(this.resize, 200));
  },
  mounted() {
    this.$nextTick(() => this.curtain());
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  margin: auto;
}
.v-for {
  position: absolute;
  overflow: hidden;
  border-radius: 4px;
  transition: transform 1s;
  box-shadow: inset 0px 0px 0px 1px #03a9f4;
}
</style>
