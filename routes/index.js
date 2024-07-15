const express = require('express')
const container = require('../container')

const router = express.Router()

/** @type {import('../userQuery/user-query.controller.js')}  */
const userQueryController = container.resolve('userQueryController')

/** @type {import('../userCommand/user-command.controller.js')}  */
const userCommandController = container.resolve('userCommandController')

router.get('/users/:id', (req, res) => userQueryController.getUser(req, res))
router.get('/db/users/:id', (req, res) => userQueryController.getUserFromDatabase(req, res))
router.get('/db/users', (req, res) => userQueryController.getUsers(req, res))
// router.get('/users/:id', userQueryController.getUser)

router.post('/users', (req, res) => userCommandController.createUser(req, res))
router.post('/db/users', (req, res) => userCommandController.createUserInDatabase(req, res))

module.exports = router
