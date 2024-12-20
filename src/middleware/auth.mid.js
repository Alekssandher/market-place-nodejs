require('dotenv')
const jwt = require('jsonwebtoken')
const {findUserByIdService} = require('../service/usuario.service')

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader){
        return res.status(401).send({message: 'token não informado'})
    }

    const parts = authHeader.split(' ')

    if (parts.length != 2) {
        console.log('lenght: ', parts.length)
        return res.status(401).send({message: 'token invalido'})
    }

    const [schema, token] = parts

    if (!/^Bearer$/i.test(schema)){
        console.log('problema no bearer')
        return res.status(401).send({message: 'token malformado'})
    }

    jwt.verify(token, process.env.SECRET, async (error, decoded) => {
        
        if (error) {
            if (error.name == 'TokenExpiredError') {
                return res.status(401).send({message: 'token expirado'})
            }
            console.log(`erro: ${error}`)
            return res.status(401).send({message: 'token invalido'})
        }

        const user = await findUserByIdService(decoded.id)

        if (!user ){
            console.log('problema na ultima verificação')
            return res.status(401).send({message: 'token invalido'})
        }
        req.userId = decoded.id

        return next()
    })
}