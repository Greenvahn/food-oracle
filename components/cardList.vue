<template>
  <div>
    <b-card-group deck class="justify-content-sm-center">
      <div v-for="(day, index) in days" :key="index" class="ml-3 mr-3">
        <CardApp :day="day" :data-cards="recipes" />
      </div>
    </b-card-group>
  </div>
</template>
<script>
import CardApp from '@/components/UI/cardApp.vue'

export default {
  components: {
    CardApp
  },
  props: {
    days: {
      type: Array,
      default () {
        return []
      }
    },
    recipes: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
