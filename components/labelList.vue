<template>
  <div class="d-flex flex-row justify-content-center">
    <div v-for="(label, indexLabel) in labels" :key="indexLabel">
      <b-badge :class="label.color" class="mr-1 ml-1">
        {{ label.name }}
      </b-badge>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    labels: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-group {
  box-shadow: none;
}
.badge {
  &.orange {
    background-color: #ff6a07;
  }
  &.green {
    background-color: #055510;
  }
  &.lime {
    background-color: #51e898;
  }
  &.pink {
    background-color: #ff78cb;
  }
  &.blue {
    background-color: #0079bf;
  }
  &.yellow {
    background-color: #f2d600;
  }
  &.red {
    background-color: #eb5a46;
  }
  &.black {
    background-color: #344563;
  }
}
</style>
