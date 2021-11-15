<template>
  <div>
    <b-card
      :header="day"
      header-text-variant="white"
      header-tag="header"
      header-bg-variant="dark"
      :title="cardTitle"
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
            :options="[{ text: 'Control your future ...', value: null }, ... getRecipeList()]"
            :value="null"
            @change="onChange($event)"
          />
        </b-form>
      </div>
      <b-button variant="info" @click="randomise">
        Ramdom
      </b-button>
    </b-card>
  </div>
</template>

<script>
/**
 * The card recipe basic component.
 * @displayName CardApp
 */

import { ref } from '@nuxtjs/composition-api'
import LabelList from '@/components/labelList.vue'
import randomMeal from '@/utils/random-meal'

export default {
  components: {
    LabelList
  },
  props: {
    /**
     * The day of the week
     * @values Monday ... Sunday
     */
    day: {
      type: String,
      default: ''
    },
    /**
     * All the recipes available from the trello board
     * @values Array of strings
     */
    dataCards: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup (props) {
    const cardTitle = ref(null)
    const labels = ref(null)
    /**
     * Get card labels by passing title
     */
    const getLabels = (value) => {
      if (value) {
        const labelArray = props.dataCards.filter(card => card.title === value)
        const [{ label }] = labelArray
        labels.value = label
      }
    }
    /**
     * Changes the title card based on dropdown selection
     * Updates label cards based on the title
     */
    const onChange = (value) => {
      cardTitle.value = value
      getLabels(value)
    }
    /**
     * Gets random title and updates card's label
     */
    const randomise = () => {
      const thisFood = randomMeal(props.dataCards.length, props.dataCards)
      cardTitle.value = thisFood
      getLabels(thisFood)
    }
    /**
     * Gets full list of recipes
     */
    const getRecipeList = () => {
      const list = props.dataCards.map(item => item.title)
      return list
    }

    /**
     * Manual randomise when loads the component.
     */
    randomise()

    return { cardTitle, onChange, labels, randomMeal, randomise, getRecipeList, getLabels }
  }
}
</script>
