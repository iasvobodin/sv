<template>
  <nav class="navigation">
    <nuxt-link class="navigation__link" to="/">Главная</nuxt-link>
    <nuxt-link class="navigation__link" to="/Portfolio">Портфолио</nuxt-link>
    <nuxt-link class="navigation__link" to="/photoseries">Фотосерии</nuxt-link>
    <nuxt-link class="navigation__link" to="/about">О себе</nuxt-link>
    <nuxt-link class="navigation__link" to="/price">Цены</nuxt-link>
    <nuxt-link class="navigation__link" to="/test">test</nuxt-link>
  </nav>
</template>


<style lang="scss">
@import "~/assets/scss/var.scss";
.navigation {
  z-index: 3;
  position: fixed;
  transform: rotate(-90deg) translateY(-100vh);
  transform-origin: right top;
  width: 100vh;
  display: flex;
  justify-content: flex-end;
  &__link {
    font-size: 22px;
    color: $mainColor;
    line-height: 20px;
    font-weight: 300;
    padding-right: 20px;
    padding-bottom: 10px;
    align-self: center;
  }
}
</style>

