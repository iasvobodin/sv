<template>
  <section class="container">
    <nuxt-link :to="`/about/${selected}`">{{selected}}</nuxt-link>
    <button @click="SortingArray">Перемешать</button>
    <button @click="filterA">Анжелика</button>
    <button @click="filterB">Все фото</button>
    <client-only>
      <div class="gallery_wrap">
        <div
          class="gallery_item"
          ref="gallery"
          :style="{ height : `${GetjustifiedLayout.containerHeight}px`, width : `${widthWindow}px`}"
        >
          <template v-for="image in GetjustifiedLayout.boxes">
            <div
              class="image_wrap"
              :key="image.id"
              :style="{
                  transform: `translate(${image.left}px, ${image.top}px)`,
                  width : `${image.width}px`, 
                  height : `${image.height}px`,
                       }"
            >
              <lazy-load :arrayName="image"/>
            </div>
          </template>
        </div>
      </div>
    </client-only>
  </section>
</template>

<script>
import { debounce } from "lodash";
import justifiedLayout from "~/assets/justified-layout/index.js";
// var perfectLayout = require('perfect-layout');
// const getImage = () => import("~/data/data.json").then(m => m.default || m);
// const getImage = () => import("~/data/data.json");
// console.log(perfectLayout);

export default {
  data() {
    return {
      windowInnerHight: 0,
      windowInnerWidth: 0,
      pageYOffset: 0,
      sort: false,
      selected: "Анжелика",
      widthWindow: null,
      hightWindow: null
    };
  },

  components: {
    HoverEffect: () => import("~/components/hover-effect.vue"),
    lazyLoad: () => import("~/components/lazy-load.vue")
  },
  methods: {
    filterA() {
      this.$store.commit("SET", "Анжелика");
    },
    filterB() {
      this.$store.commit("SET", "Все фото");
    },
    throttleScroll() {
      this.pageYOffset = window.pageYOffset;
      this.windowInnerHight = window.innerHeight;
      this.windowInnerWidth = window.innerWidth;
    },
    showImage(top, height) {
      if (
        top + height < this.pageYOffset ||
        top > this.pageYOffset + this.windowInnerHight
      ) {
        return false;
      } else {
        return true;
      }
    },
    SortingArray() {
      let array = this.$store.state.list;
      array.sort(function() {
        return 0.5 - Math.random();
      });
    },
    GetActualWidth() {
      if (window.innerWidth / window.innerHeight < 1) {
        this.widthWindow = (window.innerWidth / 100) * 95;
      } else {
        this.widthWindow = (window.innerWidth / 100) * 65;
      }
      return this.widthWindow;
    },
    throttleChange(e) {
      this.hightWindow = window.innerHeight;
      this.GetActualWidth();
      this.throttleScroll();
      // requestAnimationFrame(() => {});
    }
  },

  // asyncData({ params }) {
  //   return { newJson };
  // },
  // async asyncData({ req }) {
  //   const asyncImage = await getImage();
  //   return { asyncImage };
  // },
  // async asyncdata({ $axios }) {
  //   const dataq = await $axios.$get("/new.json");
  //   return dataq;
  // },
  computed: {
    // dataz() {
    //   return this.$store.getters.getTodoBySelected(this.selected);
    // },
    // dataq11() {
    //   return this.dataq;
    // },
    // dataz2() {
    // return this.$store.dispatch("/todo.GET_TODO", this.selected);
    // },
    GetSelectedPhoto() {
      return this.$store.state.list;
      // return this.asyncImage.filter(image =>
      //   image.Keywords.includes(this.selected)
      // );
    },

    GetjustifiedLayout() {
      console.time("Array");
      let Layout = justifiedLayout(this.$store.state.list, {
        fullWidthBreakoutRowCadence: 3,
        targetRowHeight: this.hightWindow / 2,
        containerWidth: this.widthWindow,
        containerPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        boxSpacing: {
          horizontal: this.$Width / 150,
          vertical: this.$Height / 100
        }
      });
      console.timeEnd("Array");
      return Layout;
    }
    // keywordSlice() {
    //   let KeyWords = [];
    //   let DATA = this.asyncImage;
    //   DATA.forEach(el => {
    //     KeyWords.push(el.Subject);
    //   });
    //   let flat = [].concat.apply([], KeyWords);
    //   let KeyWordsResult = [...new Set(flat)];
    //   let xxx = [];
    //   KeyWordsResult.forEach((el, i) => {
    //     xxx.push({ id: i, keyword: el });
    //   });
    //   return xxx;
    // }
  },
  mounted() {
    this.filterA();
  },
  beforeMount() {
    this.throttleChange();
    window.addEventListener("scroll", debounce(this.throttleScroll, 200));
    window.addEventListener("resize", this.throttleChange);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", debounce(this.throttleScroll, 200));
    window.removeEventListener("resize", this.throttleChange);
  }
};
</script>



<style scoped>
* {
  box-sizing: border-box;
}
.image_wrap {
  position: absolute;
  overflow: hidden;
  border-radius: 3px;
  transition: transform 1s;
  /* border-style: solid;
  border-width: 1px;
  border-color: #03a9f4; */
  box-shadow: inset 0px 0px 0px 1px #03a9f4;
}

.gallery_item {
  position: relative;
}

.gallery_wrap {
  display: flex;
  justify-content: center;
  align-content: center;
}

.image {
  height: 100%;
}
</style>
