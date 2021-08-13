<template>
  <div>
    <b-card-group class="d-flex flex-row justify-content-center">
      <div v-for="(day, index) in days" :key="index" class="ml-3 mr-3">
        <b-card
          :header="day"
          header-text-variant="white"
          header-tag="header"
          header-bg-variant="dark"
          :title="`Meal ${index + 1}`"
          style="max-width: 20rem;"
          bg-variant="light"
          class="mb-4 text-center"
        >
          <b-card-text>
            With supporting text below as a natural lead-in to additional
            content.
          </b-card-text>
          <b-button href="#" variant="primary">
            Custom
          </b-button>
          <b-button href="#" variant="primary">
            Ramdom
          </b-button>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>
<script>
export default {
  props: {
    days: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
