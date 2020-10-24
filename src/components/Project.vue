<template>
  <div class="project" v-on:click="childInfo">
    <h2 class="project__title">{{ element.name }}</h2>
    <img
      class="project__img"
      v-bind:src="element.img[0]"
      v-bind:alt="element.name"
    />
  </div>
</template>

<script>
export default {
  props: ["element", "parentInfo"],
  methods: {
    childInfo() {
      console.info("child");
      this.$emit("parentInfo", true);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.project {
  position: relative;
  height: 320px;
  min-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: $color-light;
  cursor: pointer;
  &:hover:after {
    z-index: 1;
    content: url(../assets/project_icons/eye.png);
    position: relative;
  }
  &:hover &__title {
    height: 100%;
  }
  &__title {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    color: $color-text;
    background-color: rgba(7, 7, 7, 0.8);
  }
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
