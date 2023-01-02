<template>
  <div>
    <b-navbar
      class="flex-column navbar-light"
    >
      <b-navbar-brand href="/" class="mx-auto">
        <img class="nav-bar-logo" width="70%" src="~/static/food-oracle-banner.png" alt="food-oracle-logo">
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
  margin: 0 auto;
  display: flex;
}

.navbar.navbar-light {
    border: 1px solid #1a2275;
    background-color: #1a22751f;
}
</style>
