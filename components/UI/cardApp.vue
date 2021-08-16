<template>
  <div>
    <b-card
      :header="day"
      header-text-variant="white"
      header-tag="header"
      header-bg-variant="dark"
      :title="cardTitle != null ? cardTitle : `Meal ${index + 1}`"
      style="max-width: 20rem;"
      bg-variant="light"
      class="mb-4 text-center"
    >
      <b-card-text>
        With supporting text below as a natural lead-in to additional content.
      </b-card-text>

      <div>
        <b-form>
          <label
            class="mr-sm-2"
            for="inline-form-custom-select-pref"
          >Preference</label>
          <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-3"
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
import { reactive, ref } from '@vue/composition-api'
export default {
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
    }
  },
  setup (props) {
    const dropOptions = reactive(['option 1', 'option 2', 'option 3'])
    const cardTitle = ref(null)

    // const newMap = props.days.map(item => reactive([`cardTitle${item}`]))

    const onChange = (value) => {
      cardTitle.value = value
    }
    return { dropOptions, cardTitle, onChange }
  }
}
</script>
