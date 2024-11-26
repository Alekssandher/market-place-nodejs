const express = require('express')
const authController = require('../controller/auth.controller')
const router = express.Router()
const { validaLogin } = require('../middleware/validacao.middleware')

router.post('/login',  validaLogin, authController.login)

module.exports = router