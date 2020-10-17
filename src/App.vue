<template>
  <div id="app">
    <the-header />
    <the-main />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMain
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

body {
  margin: 0;
}

#app {
  height: 100vh;
  min-width: 320px;
  font-family: Roboto, sans-serif;
  background-color: #1d1d1d;
}
</style>
