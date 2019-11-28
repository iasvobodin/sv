<template>
  <JustLoy :JLObject="JLObject"/>
</template>

<script>
export default {
  asyncData(context) {
    return {
      JLObject: context.store.getters.filterPH(context.params.route)
    };
  },
  components: {
    JustLoy: () => import("~/components/just-loy.vue")
  }
};
</script>