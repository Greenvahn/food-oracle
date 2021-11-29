<template>
  <div>
    <b-navbar
      type="light"
      variant="light"
      class="flex-column navbar-light bg-light"
    >
      <b-navbar-brand href="/" class="mx-auto">
        <img class="nav-bar-logo" src="~/static/food-oracle-logo.png" alt="food-oracle-logo">
      </b-navbar-brand>
      <b-nav id="navbarColor02">
        <b-nav-text class="nav-link">
          <a href="https://github.com/Greenvahn" target="_blank">
            Github
          </a>
        </b-nav-text>
        <b-nav-text class="nav-link">
          <a href="https://greenslash.dev/" target="_blank">
            Made by Greenvahn
          </a>
        </b-nav-text>
      </b-nav>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.nav-link {
  color: #1a2275;
  font-weight: bold;
  a {
    opacity: 0.5;
    color: #1a2275;
    text-decoration: none;
    &:hover {
    color: #1a2275 !important;
    opacity: 1;
    }
  }

}

.nav-bar-logo {
  max-width: 600px;
}

.navbar.bg-light {
    border: 1px solid rgba(0,0,0,.1);
}
</style>
