const express = require('express')
const authController = require('../controller/auth.controller')
const authmiddleware = require('../middleware/auth.mid')
const router = express.Router()

router.post('/login',  authController.login)

module.exports = router