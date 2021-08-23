<template>
  <div>
    <h3 class="text-center mt-5 p-3">
      Your meal plan
    </h3>
    <!-- <div class="mt-2">
      {{ response }}
    </div> -->
    <CardList :days="days" :recipes="recipesList" :labels-pool="labelsPool" />
  </div>
</template>

<script>
import { toRefs, reactive } from '@vue/composition-api'
import CardList from '~/components/cardList.vue'
import getData from '@/utils/fetch-data'
import weekDays from '@/utils/weekDays'

export default {
  components: {
    CardList
  },
  setup () {
    const state = reactive({
      response: [],
      recipesList: [],
      labelsPool: [],
      error: null,
      fetching: true,
      days: weekDays
    })

    const generateData = () => {
      getData(
        `https://api.trello.com/1/boards/${process.env.TR_BOARD_ID}/cards?key=${process.env.TR_API_KEY}`,
        state
      )
    }

    // Generate data - manual trigger
    generateData()

    return { ...toRefs(state) }
  }
}
</script>
