<template>
  <main class="__layouts">
    <Navigation class="__navigation"/>
    <nuxt class="__nuxt"/>
  </main>
</template>

<script>
// import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    Navigation: () => import("~/components/Navigation.vue")
  }
};
</script>

<style lang="scss">
/* .__nuxt {
  width: 100%;
  height: 100vh;
  overflow-x: auto;
} */
</style>
