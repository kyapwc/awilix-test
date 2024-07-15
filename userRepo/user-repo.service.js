const { User } = require('../models')

class UserRepoService {
  /**
   * @param {{
   * userModel: import('../models/user.js');
   * }}
   */
  constructor({ userModel }) {
    this.userModel = userModel
  }

  /**
   * Get a user from existing sqlite database
   * @param {number} id
   * @returns {Promise<User>}
   */
  async getUserFromDatabase(id) {
    try {
      const user = await this.userModel.findOne({ where: { id } })
      return user
    } catch (error) {
      console.log('Error: ', error)
      return null
    }
  }

  async getUsersFromDatabase() {
    const users = await this.userModel.findAll({
      limit: 100,
      offset: 0,
    })
    return users
  }

  /**
   * Just a random method to get a user
   * @param {number} id
   * @returns {Promise<User>}
   */
  async getUser(id) {
    const user = { id, name: 'Yap Wei Chun' }

    return new Promise((resolve) => {
      return setTimeout(() => {
        resolve(user)
      }, 1000)
    })
  }

  /**
   * Get a user from existing sqlite database
   * @param {{
   * firstName?: string;
   * lastName?: string;
   * age?: number;
   * }} createUserParams
   * @returns {Promise<User>}
   */
  async createUserInDatabase({ firstName, lastName, age }) {
    try {
      const user = await this.userModel.create({
        firstName,
        lastName,
        age: age || 18,
      })

      return user
    } catch (error) {
      console.log('Error: ', error)
      return null
    }
  }

  /**
   * Just a random method to create a fake user
   * @param {string} name
   * @returns {Promise<User>}
   */
  async createUser(name) {
    return new Promise((resolve) => {
      return setTimeout(() => {
        resolve({ name, id: 2 })
      }, 2000)
    })
  }
}

module.exports = UserRepoService
