<template>
  <div id="app">
    <the-header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/skills">Skills</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/contacts">Contacts</router-link>
    </div>
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
