<template>
  <div id="app">
    <the-header />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
</style>
