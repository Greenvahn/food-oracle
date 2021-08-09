<template>
  <div>
    <p class="text-center mt-5 p-3">
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>

    <div class="text-center">
      <ButtonApp variant="primary" btn-style="mt-1">
        Do something
      </ButtonApp>
    </div>
  </div>
</template>

<script>
import ButtonApp from '@/components/UI/buttonApp.vue'
export default {
  components: {
    ButtonApp
  }
}
</script>
