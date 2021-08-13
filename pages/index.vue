<template>
  <div>
    <p class="text-center mt-5 p-3">
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>

    <div class="text-center mb-5">
      <ButtonApp variant="primary" btn-style="mt-1" @click="onGenerate">
        Do something
      </ButtonApp>
      <div v-show="!fetching" class="mt-2">
        {{ response }}
      </div>
    </div>

    <DayCard :days="days" />
  </div>
</template>

<script>
import { toRefs, reactive, ref } from '@vue/composition-api'
import ButtonApp from '@/components/UI/buttonApp.vue'
import DayCard from '@/components/dayCard.vue'
import getData from '@/utils/fetch-data'
import weekDays from '@/utils/weekDays'

export default {
  components: {
    ButtonApp,
    DayCard
  },
  setup () {
    const state = reactive({
      response: [],
      error: null,
      fetching: true
    })

    const days = ref(weekDays)
    const onGenerate = () => {
      getData('https://geolocation-db.com/json/', state)
    }
    return { ...toRefs(state), days, onGenerate }
  }
}
</script>
