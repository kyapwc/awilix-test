class UserCommandController {
  constructor({ userRepoService }) {
    this.userRepoService = userRepoService
  }

  async createUser(req, res) {
    const user = await this.userRepoService.createUser('Hussein')

    return res.json(user)
  }
}

module.exports = UserCommandController
