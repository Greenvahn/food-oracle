<template>
  <div>
    <h3 class="text-center mt-5 p-3">
      Your meal plan
    </h3>
    <div class="mt-2">
      {{ response }}
    </div>
    <DayCard :days="days" />
  </div>
</template>

<script>
import { toRefs, reactive } from '@vue/composition-api'
import DayCard from '@/components/dayCard.vue'
import getData from '@/utils/fetch-data'
import weekDays from '@/utils/weekDays'

export default {
  components: {
    DayCard
  },
  setup () {
    const state = reactive({
      response: [],
      error: null,
      fetching: true,
      days: weekDays
    })

    const generateData = () => {
      getData(
        `https://api.trello.com/1/boards/${process.env.TR_BOARD_ID}/lists?key=${process.env.TR_API_KEY}`,
        state
      )
    }

    // Generate data - manual trigger
    generateData()

    return { ...toRefs(state) }
  }
}
</script>
