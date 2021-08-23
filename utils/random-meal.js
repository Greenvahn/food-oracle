const randomMeal = (max, datalist) => {
  const randomNumber = Math.floor(Math.random() * max)
  datalist ? (datalist = datalist[randomNumber]) : (datalist = false)
  return datalist
}

export default randomMeal
