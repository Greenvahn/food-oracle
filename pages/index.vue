<template>
  <div>
    <p class="text-center mt-5 p-3">
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>

    <div class="text-center">
      <ButtonApp variant="primary" btn-style="mt-1" @click="onGenerate">
        Do something
      </ButtonApp>
      <div v-show="!fetching" class="mt-2">
        {{ response }}
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from '@vue/composition-api'
import ButtonApp from '@/components/UI/buttonApp.vue'
import getData from '@/utils/fetch-data'

export default {
  components: {
    ButtonApp
  },
  setup () {
    const state = reactive({
      response: [],
      error: null,
      fetching: true
    })
    const onGenerate = () => {
      getData('https://geolocation-db.com/json/', state)
    }

    // const onGenerate = async () => {
    //   try {
    //     const res = await fetch('https://geolocation-db.com/json/')
    //     const json = await res.json()
    //     state.response = json
    //   } catch (error) {
    //     state.error = error
    //   } finally {
    //     state.fetching = false
    //   }
    // }
    return { ...toRefs(state), onGenerate }
  }
}
</script>
