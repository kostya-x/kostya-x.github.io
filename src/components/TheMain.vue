<template>
  <main class="main">
    <router-view />
  </main>
</template>

<style lang="scss">
@import "../scss/_variables.scss";

.main {
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  background-image: url(../assets/bg.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  &__conteiner {
    width: 100%;
  }
  &__title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 32px;
    letter-spacing: -0.02em;
    color: #fff;
  }
  &__content {
    display: flex;
    justify-content: center;
  }
  &__contact {
    width: fit-content;
    display: block;
    margin-top: 64px;
    padding: 16px;
    font-size: 32px;
    font-weight: 300;
    text-decoration: none;
    color: $color-accent;
    border: 1px solid $color-accent;
    background-color: transparent;
  }
  &__text {
    max-width: 600px;
    color: #fff;
  }
  &__link {
    color: $color-accent;
    text-decoration: underline;
    cursor: pointer;
  }
  &__list {
    padding-left: 16px;
    color: #fff;
  }
  &__item {
    &--padding:not(:first-child) {
      padding-top: 32px;
    }
  }
}

.contacts__list {
  padding-left: 0;
  list-style: none;
}

@media screen and (min-width: 375px) {
  .main {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media screen and (min-width: 768px) {
  .main {
    padding-left: 64px;
    padding-right: 64px;
    &__conteiner {
      margin-top: 128px;
    }
    &__title {
      font-size: 64px;
    }
    &__text {
      font-size: 24px;
    }
    &__list {
      padding-left: 32px;
      font-size: 32px;
    }
    .contacts__list {
      padding-left: 0;
    }
  }
}

@media screen and (min-width: 1024px) {
  .main {
    padding-left: 128px;
    &__title {
      font-size: 96px;
    }
    &__conteiner {
      margin-top: 0;
    }
  }
}

@media screen and (max-width: 767px) and (orientation: landscape) {
  .main {
    padding-top: 96px;
  }
}
</style>
