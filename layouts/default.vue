<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/navaBar.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>
@import "bootswatch\dist\sandstone\bootstrap.min.css";
</style>
