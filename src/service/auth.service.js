const Usuario = require('../model/Usuario')
const jwt = require('jsonwebtoken')

const loginService = (email) => Usuario.findOne({email: email}).select('senha')
const generateToken = (userId) => jwt.sign({id: userId}, ',Lf~u:v.54!RT{^${Kw.Ob<F12]O<jlA/-/KeIf4XqL\UR#xabbh3e>')

module.exports = {
    loginService,
    generateToken
}