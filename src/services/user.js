const UserModels = require('../models/user')
const userModels = new UserModels()

class User {
  bindSchema(usuario) {
    return new Promise((resolve, reject) => {
      try {
        let schema = require('schemaJSON').user

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
        reject(`Formato do body não correto`)
      }
    })
  }

  create(usuario) {
    return new Promise((resolve, reject) => {
      try {
        userModels.create(usuario)
          .then((user) => {
            resolve.status(200).send(`User ${JSON.stringify(user)} created successfully`)
          })
          .catch((error) => {
            reject(error)
          })

      } catch (error) {
        reject.error(400).send(error)
      }
    })
  }

  delete(usuario) {
    return new Promise((resolve, reject) => {
      try {
        userModels.delete(usuario)
          .then((user) => {
            resolve.status(200).send(`User ${JSON.stringify(user)} deleted successfully`)
          })
          .catch((error) => {
            reject(error)
          })
      } catch (error) {

      }
    })
  }

  findByCPF(cpf) {
    return new Promise((resolve, reject) => {
      try {
        const usuario = userModels.findOne({ cpf: cpf })
        resolve(usuario ? usuario.count : null)
      } catch (error) {
        reject(error)
      }
    })
  }

  update(usuario) {
    return new Promise((resolve, reject) => {
      try {
        userModels.updateOne(usuario)
          .then((response) => {
            resolve.status(200).send(`User ${JSON.stringify(response)} updated successfully`)
          })
          .catch((error) => {
            reject(error)
          })
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = User;
