<template>
  <button class="burger-menu" @click="toggleNavigation">
    <span class="burger-menu__line"></span>
    <span class="burger-menu__line"></span>
    <span class="burger-menu__line"></span>
  </button>
</template>

<script>
export default {
  methods: {
    toggleNavigation() {
      const navigation = document.querySelector(".navigation");
      navigation.classList.toggle("navigation--show");
    }
  }
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.burger-menu {
  min-width: 64px;
  width: 64px;
  height: 64px;
  box-sizing: border-box;
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &__line {
    width: 32px;
    height: 4px;
    border-radius: 2px;
    background-color: #fff;
    transition: background-color 0.2s;
  }
  &:focus &__line {
    background-color: $color-accent;
  }
}

@media screen and (min-width: 768px) {
  .burger-menu {
    display: none;
  }
}
</style>
