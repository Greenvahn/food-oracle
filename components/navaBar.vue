<template>
  <div>
    <b-navbar
      type="dark"
      variant="dark"
      class="flex-column navbar-dark bg-dark"
    >
      <b-navbar-brand href="/" class="mx-auto">
        FOOD ORACLE
      </b-navbar-brand>
      <b-nav id="navbarColor02">
        <b-nav-item active>
          Active
        </b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>
          Disabled
        </b-nav-item>
      </b-nav>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.nav-link {
  &:hover {
    color: white;
  }
}
</style>
