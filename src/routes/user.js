const express = require('express')
const UserController = require('../controllers/user')
const userController = new UserController()
const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    userController.register(req.body)
      .then(() => {
        res.status(200).send('User created')
      })
      .catch((error) => {
        res.status(400).send({ error: `Registration failed with error: ${error}` })
      })
  } catch (error) {
    return res.status(400).send({ error: `Registration failed ${error}` })
  }
})

router.put('/update', async (req, res) => {
  try {
    userController.update(req.body)
      .then(() => {
        res.status(200).send('User Updated')
      })
      .catch((error) => {
        res.status(400).send({ error: `Update failed with error ${error}` })
      })

  } catch (error) {
    res.status(400).send({ error: `Update failed with error ${error}` })
  }
})

router.delete('/delete', (req, res) => {
  try {
    userController.delete(req.body)
      .then(() => {
        res.status(200).send('User deleted successfully')
      })
      .catch((error) => {
        res.status(404).send({ error: `Delete failed with error ${error}` })
      })
  } catch (error) {

  }
})

module.exports = app => app.use('/user', router)