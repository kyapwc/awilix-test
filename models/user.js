const { Model, DataTypes } = require('sequelize')

const sequelize = require('./db')

/**
 * @typedef UserAttributes
 * @property {number} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {number} age
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Pick<UserAttributes, 'firstName' | 'lastName' | 'age'>} UserCreationAttributes
 */

class User extends Model {
  /**
  * @param {UserCreationAttributes} [data]
  * @param {import('sequelize').BuildOptions} [options]
  */
  constructor(data, options) {
    super(data, options)


    /** @type {UserAttributes['id']} */ this.id
    /** @type {UserAttributes['firstName']} */ this.firstName
    /** @type {UserAttributes['lastName']} */ this.lastName
    /** @type {UserAttributes['age']} */ this.age
    /** @type {UserAttributes['createdAt']} */ this.createdAt
    /** @type {UserAttributes['updatedAt']} */ this.updatedAt
  }

  /**
   * Returns plain user without sequelizes' metadata
   * @returns {User}
   */
  display() {
    return {
      ...this.get({ plain: true }),
      createdAt: this.createdAt?.toISOString(),
      updatedAt: this.updatedAt?.toISOString(),
    }
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'Users',
})

module.exports = User
