class UserCommandController {
  /**
   * @param {{
   * userRepoService: import('../userRepo/user-repo.service.js');
   * }}
   */
  constructor({ userRepoService }) {
    this.userRepoService = userRepoService
  }

  async createUser(req, res) {
    const user = await this.userRepoService.createUser('Hussein')

    return res.json(user)
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async createUserInDatabase(req, res) {
    const { firstName, lastName, age } = req.body
    const user = await this.userRepoService.createUserInDatabase({
      firstName,
      lastName,
      age,
    })

    if (!user) {
      return res.status(500).json({
        message: 'Failed to create user',
      })
    }

    return res.status(202).json({
      message: 'Successfully created user',
      user,
    })
  }
}

module.exports = UserCommandController
