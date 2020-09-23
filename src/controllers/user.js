const UserService = require('../services/user')
const userService = new UserService()

class User {
  register(body) {
    return new Promise(async (resolve, reject) => {
      try {
        let usuarioJaCadastrado = await userService.get(body)

        if (usuarioJaCadastrado)
          reject.status(400).send("Usuário já cadastrado")

        let userSchema = await userService.bindSchema(body)
        
        await userService.create(userSchema)
        
        resolve.status(200).send("Usuário cadastrado com sucesso")
        
      } catch (error) {
        reject.error(400).send(error)
      }
    })
  }
}

Module.exports = User;