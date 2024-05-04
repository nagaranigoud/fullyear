const express = require('express')
const app = express()

app.get('/', (request, response) => {
  const dateTime = new Date()
  response.send('${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}')
})

module.exports = app
