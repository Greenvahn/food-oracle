<template>
  <div>
    <p class="text-center mt-5 p-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <div class="text-center mb-5">
      <ButtonApp variant="primary" btn-style="mt-1" @click="onGenerate">
        Show me the future!
      </ButtonApp>
    </div>
  </div>
</template>

<script>
import { useRouter } from '@nuxtjs/composition-api'
import ButtonApp from '@/components/UI/buttonApp.vue'

export default {
  components: {
    ButtonApp
  },
  setup () {
    const router = useRouter()

    const onGenerate = () => {
      router.push('/future-meals/')
    }
    return { onGenerate }
  }
}
</script>
