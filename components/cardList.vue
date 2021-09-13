<template>
  <div>
    <b-card-group class="d-flex flex-row justify-content-center">
      <div v-for="(day, index) in days" :key="index" class="ml-3 mr-3">
        <CardApp :day="day" :data-cards="recipes" :labels-pool="labelsPool" />
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
    },
    labelsPool: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
