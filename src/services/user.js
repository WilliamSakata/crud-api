const UserModels = require('../models/user')

class User {
  bindSchema(usuario) {
    return new Promise((resolve, reject) => {
      try {
        let schema = require('../schemas.json').user
        schema.firstName = usuario.nome
        schema.lastName = usuario.sobrenome
        schema.email = usuario.email
        schema.password = usuario.senha
        schema.sexo = usuario.sexo
        schema.idade = usuario.idade
        schema.hobby = usuario.hobby
        schema.cpf = usuario.cpf.replace(/\D/g, '')

        resolve(schema)
      } catch (error) {
        reject(`Formato do body não correto ${error}`)
      }
    })
  }

  create(usuario) {
    return new Promise((resolve, reject) => {
      try {
        UserModels.create(usuario)
          .then(user => resolve(`User ${JSON.stringify(user)} created successfully`))
          .catch(error => reject(error))

      } catch (error) {
        reject(error)
      }
    })
  }

  delete(usuario) {
    return new Promise((resolve, reject) => {
      try {
        UserModels.delete(usuario)
          .then(user => resolve(`User ${JSON.stringify(user)} deleted successfully`))
          .catch(error => reject(error))
      } catch (error) {

      }
    })
  }

  findAll() {
    return new Promise((resolve, reject) => {
      try {
        UserModels.find({})
          .then(usersList => resolve(usersList))
          .catch(error => reject(error))
      } catch (error) {
        reject(error)
      }
    })
  }

  findByCPF(cpf) {
    return new Promise((resolve, reject) => {
      try {
        UserModels.findOne({ cpf: cpf })
          .then(user => resolve(user))
          .catch(error => reject(error))

      } catch (error) {
        reject(error)
      }
    })
  }

  findByName(name) {
    return new Promise((resolve, reject) => {
      try {
        UserModels.find({ name: {$regex: new RegExp(name), $options: 'i'} })
          .then(user => resolve(user))
          .catch(error => reject(error))

      } catch (error) {
        reject(error)
      }
    })
  }

  update(usuario) {
    return new Promise((resolve, reject) => {
      try {
        UserModels.updateOne(usuario)
          .then((response) => resolve(`User ${JSON.stringify(response)} updated successfully`))
          .catch((error) => reject(error))
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = User;
