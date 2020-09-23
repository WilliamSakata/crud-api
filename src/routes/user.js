const express = require('express')
const User = require('../controllers/user')
const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const user = await User.register(req.body)
    
    return res.send({user})
  } catch (error) {
    return res.status(400).send({error: `Registration failed ${error}`})
  }
})

module.exports = app => app.use('/user', router)