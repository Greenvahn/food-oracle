<template>
  <div>
    <b-card
      :header="day"
      header-text-variant="white"
      header-tag="header"
      header-bg-variant="dark"
      :title="cardTitle != null ? cardTitle : randomMeal(dataCards.length, dataCards)"
      style="max-width: 20rem;"
      bg-variant="light"
      class="mb-4 text-center"
    >
      <LabelList :labels="labels" />
      <div>
        <b-form>
          <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-3 mt-3"
            :options="[{ text: 'Choose...', value: null }, ...dataCards]"
            :value="null"
            @change="onChange($event)"
          />
        </b-form>
      </div>
      <b-button href="#" variant="primary">
        Ramdom
      </b-button>
    </b-card>
  </div>
</template>

<script>
// import { ref, onBeforeMount, onMounted } from '@vue/composition-api'
import { ref } from '@nuxtjs/composition-api'
import LabelList from '@/components/labelList.vue'
import randomMeal from '@/utils/random-meal'

export default {
  components: {
    LabelList
  },
  props: {
    day: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    },
    dataCards: {
      type: Array,
      default () {
        return []
      }
    },
    labelsPool: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup (props) {
    const cardTitle = ref(null)
    const labels = ref(null)
    // const route = useRoute()

    const getLabels = (value) => {
      if (value) {
        // filter by card name
        const labelArray = props.labelsPool.filter(item => item.card === value)
        const [{ label }] = labelArray
        labels.value = label
      }
    }

    const onChange = (value) => {
      cardTitle.value = value
      getLabels(value)
    }

    return { cardTitle, onChange, labels, randomMeal }
  }
}
</script>
