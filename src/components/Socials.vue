<template>
  <div class="socials">
    <ul class="socials__list">
      <li class="socials__item">
        <a
          class="socials__link socials__link--telegram"
          href="https://t.me/constantine_404"
          target="_blank"
        ></a>
      </li>
      <li class="socials__item">
        <a
          class="socials__link socials__link--facebook"
          href="https://facebook.com/constantine.404"
          target="_blank"
        ></a>
      </li>
      <li class="socials__item">
        <a
          class="socials__link socials__link--linkedin"
          href="https://linkedin.com/in/konstantin-mikhaylenko"
          target="_blank"
        ></a>
      </li>
      <li class="socials__item">
        <a
          class="socials__link socials__link--github"
          href="https://github.com/kostya-x"
          target="_blank"
        ></a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "../scss/_variables.scss";

.socials {
  width: 100%;
  &__list {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    display: flex;
    list-style: none;
  }
  &__item {
    display: flex;
    justify-content: center;
    height: 64px;
    width: 100%;
  }
  &__link {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 64px;
    text-decoration: none;
    color: $color-passive;
    background-repeat: no-repeat;
    background-position: center center;
    transition: background-image 0.5s;
    &--telegram {
      background-image: url(../assets/icons/socials/telegram.png);
      &:hover {
        background-image: url(../assets/icons/socials/telegram-hover.png);
      }
    }
    &--facebook {
      background-image: url(../assets/icons/socials/facebook.png);
      &:hover {
        background-image: url(../assets/icons/socials/facebook-hover.png);
      }
    }
    &--linkedin {
      background-image: url(../assets/icons/socials/linkedin.png);
      &:hover {
        background-image: url(../assets/icons/socials/linkedin-hover.png);
      }
    }
    &--github {
      background-image: url(../assets/icons/socials/github.png);
      &:hover {
        background-image: url(../assets/icons/socials/github-hover.png);
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .socials {
    width: auto;
  }
}

@media screen and (min-width: 1024px) {
  .socials {
    &__list {
      flex-direction: column;
    }
  }
}
</style>
