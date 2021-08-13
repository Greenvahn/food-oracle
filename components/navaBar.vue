<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <b-navbar-brand href="/" class="mx-auto">
        MEAL PLANNER
      </b-navbar-brand>

      <div id="navbarColor02">
        <b-nav>
          <b-nav-item active>
            Active
          </b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>
            Disabled
          </b-nav-item>
        </b-nav>
      </div>
    </nav> -->
    <b-navbar type="dark" variant="dark" class="flex-column navbar-dark bg-dark">
      <b-navbar-brand href="/" class="mx-auto">
        MEAL PLANNER
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

<style scoped>
.nav-link:hover {
  color: white;
}
</style>
