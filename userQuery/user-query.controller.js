class UserQueryController {
  /**
   * @param {{
   * userRepoService: import('../userRepo/user-repo.service.js');
   * }}
   */
  constructor({ userRepoService }) {
    this.userRepoService = userRepoService
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async getUser(req, res) {
    const { id } = req.params
    const user = await this.userRepoService.getUser(id)
    return res.status(200).json(user)
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async getUserFromDatabase(req, res) {
    const { id } = req.params
    const user = await this.userRepoService.getUserFromDatabase(id)

    if (!user) {
      return res.status(404).json({ message: 'User not found...' })
    }

    return res.status(200).json(user)
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async getUsers(req, res) {
    const users = await this.userRepoService.getUsersFromDatabase()
    return res.json(users)
  }
}

module.exports = UserQueryController
