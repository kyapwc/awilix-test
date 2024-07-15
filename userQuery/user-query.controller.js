class UserQueryController {
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
}

module.exports = UserQueryController
