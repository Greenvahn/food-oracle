<template>
  <b-button
    :variant="variant"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </b-button>
</template>

<script>
export default {
  name: 'ButtonApp',
  props: {
    variant: {
      type: String,
      required: true
    },
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>
