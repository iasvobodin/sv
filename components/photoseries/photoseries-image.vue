<template>
  <div
    class="photoseries__container"
    @mousemove="show = $event.isTrusted"
    @mouseleave="show = false"
  >
    <span
      class="photoseries__transparent"
      @mousemove="moveY = $event.offsetY"
      @mouseenter="$emit('color', objectName.Color)"
    />
    <div
      v-observe-visibility="{
                    callback: visibilityChanged,
                    throttle: 1000,
                      once: true
}"
      class="photoseries__wrapper"
    >
      <img
        v-if="isVisible"
        class="photoseries__img"
        :src="`https://svobodina.ru/wp-content/uploads/photoseries/${objectName.Id}.jpg`"
        alt
      >
    </div>
    <transition name="fade">
      <div v-if="show" class="name__wrapper" :style="{top: `calc(${moveY}px - 2.5vh)`}">
        <h2>{{objectName.Name}}</h2>
      </div>
    </transition>
  </div>
</template>



<script>
export default {
  props: {
    objectName: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      isVisible: false,
      show: false,
      moveY: 0
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }
  }
};
</script>

<style lang="scss">
.photoseries__wrapper {
  border-radius: 3px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}
.photoseries__container {
  width: 100%;
  height: 100%;
  position: relative;
}
.photoseries__transparent {
  width: 100%;
  height: 100%;
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
}
</style>


<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.name__wrapper {
  z-index: 3;
  text-align: center;
  width: 70vw;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -35vw;
  > h2 {
    margin: 0;
    font-size: 5vh;
    color: #03a9f4;
    font-weight: 100;
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 1);
  }
}
</style>




 

