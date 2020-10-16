<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link class="navigation__link" to="/">
          HOME
        </router-link>
        <img
          class="navigation__img"
          src="../assets/icons/navigation/home.png"
          alt="home"
        />
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/about">
          ABOUT
        </router-link>
        <img
          class="navigation__img"
          src="../assets/icons/navigation/about-active.png"
          alt="about"
        />
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/skills">
          SKILLS
        </router-link>
        <img
          class="navigation__img"
          src="../assets/icons/navigation/skills.png"
          alt="skills"
        />
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/projects">
          PROJECTS
        </router-link>
        <img
          class="navigation__img"
          src="../assets/icons/navigation/projects.png"
          alt="projects"
        />
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/contacts">
          CONTACTS
        </router-link>
        <img
          class="navigation__img"
          src="../assets/icons/navigation/contacts.png"
          alt="contacts"
        />
      </li>
    </ul>
  </nav>
</template>

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
