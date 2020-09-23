
const userSchema = require('../models/user')
const schemaJSON = require('schemaJSON').user
const UserModels = require('../models/user')
const userModels = new UserModels()

class User {
  get(cpf) {
    return new Promise((resolve, reject) => {
      try {
        const usuario = userSchema.findOne({ cpf: cpf })
        resolve(usuario ? usuario.count : null)
      } catch (error) {
        reject(error)
      }
    })
  }

  create(usuario){
    return new Promise((resolve, reject) => {
      try {
        userModels.create(usuario)
        .then((user) => {
          resolve.status(200).send(`Usuário ${JSON.stringify(user)} criado com sucesso`)
        })
        
      } catch (error) {
        reject.error(400).send(error)
      }
    })
  }

  bindSchema(usuario){
    return new Promise((resolve, reject) => {
      try {
        let schema = new schemaJSON()

        schema.name.first = usuario.nome
        schema.name.last = usuario.sobrenome
        schema.email = usuario.email
        schema.password = usuario.senha
        schema.sexo = usuario.sexo
        schema.idade = usuario.idade
        schema.hobby = usuario.hobby
        schema.dataNascimento = usuario.dataNascimento
        schema.cpf = usuario.cpf
        
        resolve(schema)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = User;
