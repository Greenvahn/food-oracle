require('dotenv').config()
const path = require('path')
const fs = require('fs')
const fetch = require('node-fetch')

const pathFile = path.join(__dirname, '../data/master_data.json')

const getData = async (url) => {
  try {
    const res = await fetch(url)
    const json = await res.json()
    const data = json.reduce((result, card) => {
      // TR_EXCLUDING_CARD - if true, excludes recipes with the word defined in .env
      if (
        !process.env.TR_EXCLUDING_CARD ||
        !card.name.includes(process.env.TR_EXCLUDING_CARD)
      ) {
        result.push({
          title: card.name,
          label: card.labels.map(item => ({ name: item.name, color: item.color }))
        })
      }
      return result
    }, [])

    fs.writeFileSync(pathFile, JSON.stringify(data), { enconding: 'utf-8' })
  } catch (error) {
    // eslint-disable-next-line
    console.log(`Something went wrong --> ${error}`)
  }
}

getData(
  `https://api.trello.com/1/boards/${process.env.TR_BOARD_ID}/cards?key=${
    process.env.TR_USER_API_KEY
  }${
    process.env.TR_PRIVATE_AUTH_TOKEN
      ? `&token=${process.env.TR_PRIVATE_AUTH_TOKEN}`
      : ''
  }`
)
