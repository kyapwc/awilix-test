const awilix = require('awilix')

const UserQueryController = require('./userQuery/user-query.controller.js')
const UserCommandController = require('./userCommand/user-command.controller.js')
const UserRepoService = require('./userRepo/user-repo.service.js')

const container = awilix.createContainer()

container.register({
  userQueryController: awilix.asClass(UserQueryController).singleton(),
  userCommandController: awilix.asClass(UserCommandController).singleton(),
  userRepoService: awilix.asClass(UserRepoService).singleton(),
})

module.exports = container