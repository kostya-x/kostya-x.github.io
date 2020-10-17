<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link class="navigation__link" to="/">
          HOME
        </router-link>
        <img
          class="navigation__img"
          alt="home"
          v-if="activePage === 'Home'"
          :src="navigationIcons.active.home"
        />
        <img
          class="navigation__img"
          alt="home"
          v-else
          :src="navigationIcons.regular.home"
        />
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/about">
          ABOUT
        </router-link>
        <img
          class="navigation__img"
          alt="about"
          v-if="activePage === 'About'"
          :src="navigationIcons.active.about"
        />
        <img
          class="navigation__img"
          alt="about"
          v-else
          :src="navigationIcons.regular.about"
        />
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/skills">
          SKILLS
        </router-link>
        <img
          class="navigation__img"
          alt="skills"
          v-if="activePage === 'Skills'"
          :src="navigationIcons.active.skills"
        />
        <img
          class="navigation__img"
          alt="skills"
          v-else
          :src="navigationIcons.regular.skills"
        />
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/projects">
          PROJECTS
        </router-link>
        <img
          class="navigation__img"
          alt="projects"
          v-if="activePage === 'Projects'"
          :src="navigationIcons.active.projects"
        />
        <img
          class="navigation__img"
          alt="projects"
          v-else
          :src="navigationIcons.regular.projects"
        />
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/contacts">
          CONTACTS
        </router-link>
        <img
          class="navigation__img"
          alt="contacts"
          v-if="activePage === 'Contacts'"
          :src="navigationIcons.active.contacts"
        />
        <img
          class="navigation__img"
          alt="contacts"
          v-else
          :src="navigationIcons.regular.contacts"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  watch: {
    $route() {
      this.activePage = this.$route.name;
    }
  },
  data() {
    return {
      activePage: this.$route.name,
      navigationIcons: {
        regular: {
          home: "./icons/navigation/home.png",
          about: "./icons/navigation/about.png",
          skills: "./icons/navigation/skills.png",
          projects: "./icons/navigation/projects.png",
          contacts: "./icons/navigation/contacts.png"
        },
        active: {
          home: "./icons/navigation/home-active.png",
          about: "./icons/navigation/about-active.png",
          skills: "./icons/navigation/skills-active.png",
          projects: "./icons/navigation/projects-active.png",
          contacts: "./icons/navigation/contacts-active.png"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.navigation {
  top: 64px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: $color-dark;
  margin-left: 100%;
  transition: margin-left 0.5s ease;
  z-index: 1;
  &__list {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    height: 100%;
    padding-left: 0;
    display: flex;
    list-style: none;
  }
  &__item {
    position: relative;
    width: 64px;
    font-size: 10px;
    &:hover .navigation__link {
      color: $color-accent;
    }
    &:hover .navigation__img {
      opacity: 0;
      z-index: -1;
    }
  }
  &__link {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: transparent;
    background-repeat: no-repeat;
    background-position: center center;
    transition: color 0.4s;
  }
  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.4s;
  }
  &--show {
    margin-left: 0;
    transition: margin-left 0.5s;
  }
}

@media screen and (min-width: 768px) {
  .navigation {
    margin-left: 0;
    top: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: auto;
    z-index: auto;
  }
}

@media screen and (min-width: 1024px) {
  .navigation {
    position: unset;
    top: unset;
    left: unset;
    margin-left: unset;
    width: unset;
    transform: inherit;
    &__list {
      flex-direction: column;
    }
  }
}
</style>
