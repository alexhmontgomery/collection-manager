const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  playerName: {type: String, required: true},
  teamName: {type: String, required: true},
  year: {type: Number, required: true},
  rookieCard: {type: Boolean, default: false},
  battingAvg: {type: Number},
  homeRuns: {type: Number},
  rbis: {type: Number},
  condition: {type: String, required: true}
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card
