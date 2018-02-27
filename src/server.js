const express = require('express')
const bodyParser = require('body-parser')

// Controllers
const User = require('./user/userController')
const Role = require('./roles/roleController')

const app = express()

// bodyParser setup for express
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.post('/createUser', (req, res) => {
  const user = req.body

  // Creates user using the user data
  User.createUser(user)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(400).json(err))
})

module.exports = app
