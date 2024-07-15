/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 */

class UserRepoService {
  constructor() {}

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
