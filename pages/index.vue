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
