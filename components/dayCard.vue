<template>
  <div>
    <b-card-group deck class="text-center">
      <div v-for="(day, index) in days" :key="index">
        <b-card
          :header="day"
          header-text-variant="white"
          header-tag="header"
          header-bg-variant="dark"
          :title="`Meal ${index + 1}`"
          style="max-width: 20rem;"
          bg-variant="light"
          class="mb-4"
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
