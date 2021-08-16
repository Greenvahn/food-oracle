<template>
  <div>
    <b-card-group class="d-flex flex-row justify-content-center">
      <div v-for="(day, index) in days" :key="index" class="ml-3 mr-3">
        <CardApp :day="day" :index="index" :data-cards="recipes" />
      </div>
    </b-card-group>
  </div>
</template>
<script>
import { reactive, ref } from '@vue/composition-api'
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
  },
  setup (props) {
    const dropOptions = reactive(['option 1', 'option 2', 'option 3'])
    const cardTitle = ref(null)

    // const newMap = props.days.map(item => reactive([`cardTitle${item}`]))

    const onChange = (value) => {
      cardTitle.value = value
    }
    return { dropOptions, cardTitle, onChange }
  }
}
</script>
