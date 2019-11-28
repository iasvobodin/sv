<template>
  <div>
    <h2>{{dealWithScrolling()}}</h2>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isScrolling: false
    };
  },
  methods: {
    dealWithScrolling() {
      console.log(window.innerHeight + window.pageYOffset);
      return window.innerHeight + window.pageYOffset;
    },
    throttleScroll(e) {
      if (this.isScrolling === false) {
        window.requestAnimationFrame(function() {
          this.dealWithScrolling(e);
          this.isScrolling = false;
        });
      }
      this.isScrolling = true;
    }
  },
  computed: {},
  beforeCreate() {
    window.addEventListener("scroll", this.throttleScroll, false);
  },
  mounted() {
    // this.dealWithScrolling();
  }
};
</script>
<style>
</style>

