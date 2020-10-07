const UserService = require('../services/user')
const userService = new UserService()

class User {
  delete(body) {
    return new Promise(async (resolve, reject) => {
      try {
        let userSchema = await userService.bindSchema(body)

        let usuarioCadastrado = await userService.findByCPF(userSchema.cpf)

        if (!usuarioCadastrado)
          reject('User not found')

        userService.delete(userSchema)
          .then((response) => resolve(response))
          .catch((error) => reject(error))

      } catch (error) {
        reject(error)
      }
    })
  }

  get() {
    return new Promise(async (resolve, reject) => {
      try {
        userService.findAll()
          .then(usersList => {
            console.log(usersList.length)
            if(usersList.length >= 0)
              resolve(usersList)
            else
              resolve(`No users found`)
          })
          .catch(error => reject(error))

      } catch (error) {

      }
    })
  }

  getByName(name) {
    return new Promise((resolve, reject) => {
      try {
        userService.findByName(name)
          .then(userList => resolve(userList))
          .catch(error => reject(error))

      } catch (error) {
        reject(error)
      }
    })
  }

  register(body) {
    return new Promise(async (resolve, reject) => {
      try {
        let userSchema = await userService.bindSchema(body)

        let usuarioCadastrado = await userService.findByCPF(userSchema.cpf)

        if (usuarioCadastrado)
          reject('User already exists.')
        else {
          userService.create(userSchema)
            .then((response) => resolve.status(response))
            .catch((error) => reject(error))
        }

      } catch (error) {
        reject(error)
      }
    })
  }

  update(body) {
    return new Promise(async (resolve, reject) => {
      try {
        let userSchema = await userService.bindSchema(body)

        let usuarioValido = await userService.findByCPF(userSchema.cpf)

        if (!usuarioValido)
          reject.status(404).send({ error: 'User not found' })

        userService.update(userSchema)
          .then((response) => resolve(response))
          .catch((error) => reject(error))

      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = User;