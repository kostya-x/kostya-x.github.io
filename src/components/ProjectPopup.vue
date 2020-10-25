<template>
  <transition name="modal" v-if="isShowPopup">
    <div class="project-popup">
      <button
        class="project-popup__close"
        v-on:click="isShowPopup = false"
      ></button>
      <button class="project-popup__left"></button>
      <button class="project-popup__right"></button>
      <div class="project-popup__slide">
        <img
          class="project-popup__img"
          v-bind:src="object.img[slide]"
          v-bind:alt="object.name"
        />
      </div>
      <div class="project-popup__footer">
        <div class="project-popup__footer-container">
          <a
            class="project-popup__source"
            v-bind:href="object.source"
            target="_blank"
          ></a>
          <a
            class="project-popup__look"
            v-bind:href="object.look"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["object", "isShowPopup"],
  data() {
    return {
      slide: 0
    };
  }
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.project-popup {
  z-index: 100000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $color-light;
  &--show {
    display: block;
  }
  &__close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    width: 64px;
    height: 64px;
    background-color: transparent;
    border: 0;
    // background-image: url(./icons/project/close-btn.png);
    cursor: pointer;
    &:hover {
      // background-image: url(./icons/project/close-btn-active.png);
    }
  }
  &__left {
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    padding: 0;
    width: 32px;
    height: 64px;
    background-color: transparent;
    border: 0;
    background-image: url(./icons/project/left-btn.png);
    cursor: pointer;
    &:hover {
      background-image: url(./icons/project/left-btn-active.png);
    }
  }
  &__right {
    position: absolute;
    top: 50%;
    right: 2px;
    transform: translateY(-50%);
    padding: 0;
    width: 32px;
    height: 64px;
    background-color: transparent;
    border: 0;
    // background-image: url(./icons/project/right-btn.png);
    cursor: pointer;
    &:hover {
      // background-image: url(./icons/project/right-btn-active.png);
    }
  }
  &__content {
    margin-bottom: 64px;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  &__slide {
    height: 100%;
    padding-bottom: 64px;
    display: flex;
    justify-content: center;
  }
  &__img {
    height: 100%;
  }
  &__footer {
    position: absolute;
    height: 64px;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    background-color: $color-dark;
    &-container {
      min-width: 320px;
      max-width: 320px;
      display: flex;
      justify-content: space-between;
    }
  }
  &__source {
    width: 64px;
    height: 64px;
    display: block;
    // background-image: url(icons/project-icons/source.png);
    &:hover {
      // background-image: url(./icons/project/source-active.png);
    }
  }
  &__look {
    z-index: 1;
    width: 64px;
    height: 64px;
    display: block;
    // background-image: url(./icons/project/look-at.png);
    &:hover {
      // background-image: url(./icons/project/look-at-active.png);
    }
  }
}
</style>
