const getData = async (url, options) => {
  try {
    const res = await fetch('https://geolocation-db.com/json/')
    const json = await res.json()
    options.response = json
  } catch (error) {
    options.error = error
  } finally {
    options.fetching = false
  }
}

export default getData
