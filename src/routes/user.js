const express = require('express')
const UserController = require('../controllers/user')
const userController = new UserController()
const router = express.Router()

router.delete('/delete', (req, res) => {
  try {
    userController.delete(req.body)
      .then(() => {
        res.status(200).send('User deleted successfully')
      })
      .catch(error => {
        res.status(404).send({ error: `Delete failed with error ${error}` })
      })
  } catch (error) {
    res.status(400).send({ error: `Error while trying to delete user ${error}` })
  }
})

router.get('/list', (req, res) => {
  try {
    userController.get()
      .then(result => {
        res.status(200).send(result)
      })
      .catch(error => {
        res.status(400).send({ error: `Bad request, not possible to list the users ${error}` })
      })
  } catch (error) {
    res.status(400).send({ error: `Error while trying to list the users ${error}` })
  }
})

router.get('/filter/:name', (req, res) => {
  try {
    userController.getByName(req.params.name)
      .then(result => res.status(200).send(result))
      .catch(error => res.status(400).send({ error: `Error while trying to filter the users by name ${error}` }))
  } catch (error) {
    res.status(400).send({ error: `Error while trying to filter the users by name ${error}` })
  }
})

router.post('/register', async (req, res) => {
  try {
    userController.register(req.body)
      .then(() => {
        res.status(200).send('User created')
      })
      .catch(error => {
        res.status(400).send({ error: `${error}` })
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

module.exports = app => app.use('/user', router)