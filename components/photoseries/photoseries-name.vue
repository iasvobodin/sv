<template>
  <h2>{{objectName.Name}}</h2>
</template>

<script>
export default {
  props: {
    objectName: {
      required: true,
      type: Object
    },
    // showName: {
    //   required: true,
    //   type: Boolean
    // },
    top: {
      required: true,
      type: Number
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
h2 {
  position: absolute;
  top: 0;
}
</style>
