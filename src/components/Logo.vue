<template>
  <div class="logo">
    <router-link class="logo__link" to="/">
      <span class="logo__k">K</span>
      <span class="logo__kostya">Kostya</span>
    </router-link>
  </div>
</template>

<style lang="scss">
@import "../scss/_variables.scss";

.logo {
  min-width: 64px;
  width: 64px;
  height: 64px;
  background-color: #070707;
  &__link {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    text-decoration: none;
  }
  &__k {
    font-size: 36px;
    font-weight: bold;
    color: $color-accent;
  }
  &__kostya {
    font-size: 12px;
    font-weight: 300;
    color: #fff;
  }
}
</style>
