<template>
  <div class="projects">
    <div class="main__conteiner">
      <project-popup v-bind:isShowPopup="value" v-bind:element="element" />
      <div class="projects__container">
        <project
          v-for="element in projects"
          v-bind:key="projects.indexOf(element)"
          v-bind:element="element"
          v-bind:data-id="projects.indexOf(element)"
          v-on:parentInfo="parentInfo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project";
import ProjectPopup from "../components/ProjectPopup";

export default {
  components: {
    Project,
    ProjectPopup
  },
  data() {
    return {
      element: "",
      value: false,
      projects: [
        {
          name: "Snake",
          img: [
            "./projects/snake-game-screenshot-1.png",
            "./projects/snake-game-screenshot-2.png"
          ],
          source: "https://github.com/kostya-x/snakejs",
          look: "https://kostya-x.github.io/snake/"
        },
        {
          name: "Rick and Morty",
          img: ["./projects/rick-and-morty.png"],
          source: "https://github.com/kostya-x/hillel-pro-rickandmorty-api",
          look: "https://kostya-x.github.io/rick-and-morty/"
        },
        {
          name: "TODO LIST",
          img: ["./projects/todo.png"],
          source: "https://github.com/kostya-x/hillel-pro-todo-api",
          look: "https://kostya-x.github.io/todo/"
        }
      ]
    };
  },
  methods: {
    parentInfo(value) {
      this.value = value;
      console.info("Parent " + this.value);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.projects {
  &__container {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 64px;
    left: 0;
  }
}

@media screen and (min-width: 1024px) {
  .projects__container {
    top: 0;
    left: 64px;
  }
}
</style>
