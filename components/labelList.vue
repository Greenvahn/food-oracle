<template>
  <b-list-group horizontal="md">
    <div v-for="(label, indexLabel) in labels" :key="indexLabel">
      <b-badge :class="label.color" class="mr-1 ml-1">
        {{ label.name }}
      </b-badge>
    </div>
  </b-list-group>
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
}
</style>
