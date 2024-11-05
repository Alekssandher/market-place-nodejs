const Usuario = require('../model/Usuario')
const jwt = require('jsonwebtoken')
require('dotenv').config

const loginService = (email) => Usuario.findOne({email: email}).select('senha')
const generateToken = (userId) => jwt.sign({id: userId}, process.env.SECRET)

module.exports = {
    loginService,
    generateToken
}