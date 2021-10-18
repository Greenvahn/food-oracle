const getData = async (url, options) => {
  try {
    const res = await fetch(url)
    const json = await res.json()
    options.response = json
    options.fullCardList = options.response.map(card => card.name) // creates an array with ALL card recipes
    options.recipesList = options.response.reduce((result, card) => { // creates an array excluding card recipes are not included in the food oracle.
      if (!card.name.includes('###no-food-oracle###')) {
        result.push(card.name)
      }
      return result
    }, [])
    options.labelsPool = options.response.map(card => ({
      card: card.name,
      label: card.labels
    })) // creates an array wth id card + label cards
  } catch (error) {
    options.error = error
  } finally {
    options.fetching = false
  }
}

export default getData
