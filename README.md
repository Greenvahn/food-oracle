# 🍜 food-oracle 
<p>A simple meal planner using Trello boards with recipes. 

This project is still under developent.</p>

## 🎢 Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work with Nuxt.js (Vue), check out the [documentation](https://nuxtjs.org).

---

## 🌠 Trello Boards - Setup
This app uses the Trello API to fecth information directly from the trello boards with recipes.In order to connect any board with this app you will need:

* <b>A trello user API</b>. 
    * <i>* You will need to be registered and logged in Trello in order to get one</i>.
* <b>A trello board ID</b>. 
    * It is visible as part of the any board URL

 After the intial installation, you will find an `.env.sample` file at the root project folder. Rename it to `.env`

## .env
```bash
TR_USER_API_KEY = yourTrelloAPIgoeshere
TR_PRIVATE_AUTH_TOKEN = privateBoardToken
TR_BOARD_ID = boardID
```
> ⚠️ The `TR_AUTH_TOKEN` is only required if the board is private!

---

## 🥑 Private Trello Boards
<p>An user authorization is required from the trello board's owner if you are accessing a private board.</p>

<p>Request a token granting <b>read-only access forever</b> :</p>

```bash 
https://trello.com/1/authorize?key=substitutewithyourapplicationkey&name=My+Application&expiration=never&response_type=token
```

### Trello API documentation
Please refer to http://www.trello.org/help.html to know how to get an API KEY for development between other things.
