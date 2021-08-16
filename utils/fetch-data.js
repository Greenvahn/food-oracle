const getData = async (url, options) => {
  try {
    const res = await fetch(url)
    const json = await res.json()
    options.response = json
    options.recipesList = options.response.map(card => card.name) // creates an array with recipes
  } catch (error) {
    options.error = error
  } finally {
    options.fetching = false
  }
}

export default getData
