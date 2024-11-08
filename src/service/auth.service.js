const Usuario = require('../model/Usuario')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const { SECRET } = process.env;

const loginService = (email) => Usuario.findOne({email: email}).select('senha')
const generateToken = (userId) => jwt.sign({id: userId}, SECRET)

module.exports = {
    loginService,
    generateToken
}