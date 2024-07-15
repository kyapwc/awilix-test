const awilix = require('awilix')

const UserQueryController = require('./userQuery/user-query.controller.js')
const UserCommandController = require('./userCommand/user-command.controller.js')
const UserRepoService = require('./userRepo/user-repo.service.js')

const { User: UserModel } = require('./models')

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
})

container.register({
  userQueryController: awilix.asClass(UserQueryController).singleton(),
  userCommandController: awilix.asClass(UserCommandController).singleton(),
  userRepoService: awilix.asClass(UserRepoService).singleton(),
  userModel: awilix.asValue(UserModel),
})

module.exports = container
