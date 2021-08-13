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
/* Loads bootswatch them here */
@import 'bootswatch\dist\zephyr\bootstrap.min.css';
</style>
