const express = require('express')
const mustache = require('mustache-express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const homepageRoutes = require('./routes/homepage')
const cardsRoutes = require('./routes/cards')

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/baseballcards')

app.listen(3000, function () {
  console.log('Server is ON! Go to 0.0.0.0:3000')
})

app.use(homepageRoutes)
app.use(cardsRoutes)
// app.use(cardsRoutes)
