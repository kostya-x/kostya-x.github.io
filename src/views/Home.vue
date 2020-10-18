<template>
  <div class="home">
    <div class="main__conteiner">
      <h1 class="main__title">
        Hi,<br />
        I’m <span class="text--accent">K</span>ostya,<br />
        Front-End Developer
      </h1>
      <div class="main__content">
        <router-link class="main__contact" to="/contacts">
          CONTACT ME
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
