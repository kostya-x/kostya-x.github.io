<template>
  <header class="header">
    <logo />
    <navigation />
    <socials />
    <burger-menu />
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import Navigation from "./Navigation.vue";
import Socials from "./Socials.vue";
import BurgerMenu from "./BurgerMenu.vue";

export default {
  components: {
    Logo,
    Navigation,
    Socials,
    BurgerMenu
  }
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 64px;
  background-color: $color-dark;
  z-index: 2;
}

@media screen and (min-width: 1024px) {
  .header {
    width: 64px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
