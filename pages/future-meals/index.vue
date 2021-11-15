<template>
  <div>
    <h3 class="text-center mt-5 p-3">
      Your meal plan
    </h3>
    <CardList :days="days" :recipes="recipesList" />
  </div>
</template>

<script>
import { toRefs, reactive } from '@vue/composition-api'
import CardList from '~/components/cardList.vue'
import weekDays from '@/utils/weekDays'
import dataRecipes from '@/data/master_data'

export default {
  components: {
    CardList
  },
  setup () {
    const state = reactive({
      recipesList: [],
      days: weekDays
    })

    state.recipesList = dataRecipes

    return { ...toRefs(state) }
  }
}
</script>
