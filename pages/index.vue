<template>
  <div>
    <p class="text-center p-3 intro-text">
      Lady Onions could tell you about your next love but instead will tell you about what will you eat the next week!
    </p>

    <p class="text-center mt-3 jp-robot-font">
      Lady Onions is here to help!
    </p>

    <div class="text-center mb-5">
      <ButtonApp variant="primary" btn-style="rounded-2" @click="onGenerate">
        Show my future meals!
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

<style lang="scss" scoped>
.intro-text {
  display: flex;
  max-width: 700px;
  margin: 30px auto 0 auto;
}
</style>
