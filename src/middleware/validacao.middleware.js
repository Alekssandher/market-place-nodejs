const validaUsuario = (req, res, next) => {
    const requiredFields = ['nome', 'email', 'senha', 'imagem'];
    const erros = requiredFields.filter(field => !req.body[field]);

    const errosLength = erros.length

    switch (true) {
        case errosLength === 0:
            return next()

        case errosLength === 1:
            
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido`})

        case errosLength > 1:
            
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchido`})

        default:

            return res.status(500).send({ message: 'Erro inesperado tente novamente' })
    }
    
    
}

const validaProduto = (req, res, next) => {
    const requiredFields = ['nome', 'descricao', 'precoUnitario', 'imagem', 'codigoBarra'];
    const erros = requiredFields.filter(field => !req.body[field]);

    const errosLength = erros.length

    switch (true) {
        case errosLength === 0:
            return next()

        case errosLength === 1:
            
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido`})

        case errosLength > 1:
            
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchido`})

        default:

            return res.status(500).send({ message: 'Erro inesperado tente novamente' })
    }
    
    
}

const validaCategoria = (req, res, next) => {
    if (req.body.nome) return res.status(400).send({message: "O campo nome precisa ser preenchido"})

    return next()
}

const validaPedido = (req, res, next) => {
    

    const requiredFields = ['precoTotal', 'frete'];
    let erros = requiredFields.filter(field => !req.body[field]);

    if (req.body.concluido == undefined) erros.push('concluido')

    const errosLength = erros.length

    switch (true) {
        case errosLength === 0:
            return next()

        case errosLength === 1:
            
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido`})

        case errosLength > 1:
            
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchido`})

        default:

            return res.status(500).send({ message: 'Erro inesperado tente novamente' })
    }
}

const validaCarrinho = (req, res, next) => {
    const requiredFields = ['precoTotal', 'frete'];
    const erros = requiredFields.filter(field => !req.body[field]);

    const errosLength = erros.length

    switch (true) {
        case errosLength === 0:
            return next()

        case errosLength === 1:
            
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido`})

        case errosLength > 1:
            
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchido`})

        default:

            return res.status(500).send({ message: 'Erro inesperado tente novamente' })
    }
}

const ObjectId = require('mongoose').Types.ObjectId

const validaId = (req, res, next) => {
    if (ObjectId.isValid(req.params.id)) {
        return next()
    } else {
        return res.status(400).send({message: 'O id passado não corresponde ao padrão necessário.'})
    }
}

const validaLogin = (req, res, next) => {

    if (Object.keys(req.body).length > 2) return res.status(400).send({message: 'Você está passando parâmetros demais, são esperados apenas dois.'})
    
    const requiredFields = ['email', 'senha'];
    const erros = requiredFields.filter(field => !req.body[field]);

    const errosLength = erros.length

    switch (true) {
        case errosLength === 0:
            return next()

        case errosLength === 1:
            
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido`})

        case errosLength > 1:
            
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchido`})

        default:

            return res.status(500).send({ message: 'Erro inesperado tente novamente' })
    }
}
module.exports = {
    validaUsuario,
    validaProduto,
    validaCategoria,
    validaPedido, 
    validaCarrinho,
    validaId,
    validaLogin
}