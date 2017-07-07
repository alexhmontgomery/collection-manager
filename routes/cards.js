const express = require('express')
const router = express.Router()
const Card = require('../models/Card')

router.get('/cards/newcard', function (req, res) {
  res.render('./cards/newcard')
})

router.post('/cards', function (req, res) {
  const card = new Card()
  card.playerName = req.body.playerName
  card.teamName = req.body.teamName
  card.year = req.body.year
  card.rookieCard = req.body.rookieCard
  card.battingAvg = req.body.battingAvg
  card.homeRuns = req.body.homeRuns
  card.rbis = req.body.rbis
  card.condition = req.body.condition
  card.save()
  .then(function (card) {
    res.redirect('/')
  })
  .catch(function (validationError) {
    res.render('cards/newcard', {
      card: card,
      validationError: validationError
    })
    console.log(validationError.errors)
    console.log('Sorry sucker!')
  })
})

router.get('/cards/:id/edit', function (req, res) {
  Card.findOne({'_id': req.params.id})
  .then(function (card) {
    res.render('./cards/edit', {
      card: card
    })
  })
})

router.post('/cards/:id', function (req, res) {
  Card.findOne({'_id': req.params.id})
  .then(function (card) {
    card.playerName = req.body.playerName
    card.teamName = req.body.teamName
    card.year = req.body.year
    card.rookieCard = req.body.rookieCard
    card.battingAvg = req.body.battingAvg
    card.homeRuns = req.body.homeRuns
    card.rbis = req.body.rbis
    card.condition = req.body.condition
    card.save()
    .then(function (card) {
      res.redirect('/')
    })
  })
})

router.get('/cards/:id/delete', function (req, res) {
  Card.deleteOne({'_id': req.params.id})
  .then(function () {
    res.redirect('/')
  })
})

module.exports = router
