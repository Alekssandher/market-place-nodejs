const validaUsuario = (req, res, next) => {
    
    let erros = []
    if (!req.body.nome) {
        erros.push('nome')
    }

    if (!req.body.email){
        erros.push('email')
    }

    if (!req.body.senha){
        erros.push('senha')
    }

    if (!req.body.imagem){
        erros.push('imagem')
    }
    
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
    
    let erros = []
    if (!req.body.nome) {
        erros.push('nome')
    }

    if (!req.body.descricao){
        erros.push('descricao')
    }

    if (!req.body.precoUnitario){
        erros.push('precoUnitario')
    }

    if (!req.body.imagem){
        erros.push('imagem')
    }
    if (!req.body.codigoBarra){
        erros.push('codigoBarra')
    }
    
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
    let erros = []

    if (!req.body.precoTotal) erros.push('precoTotal')
    if (!req.body.frete) erros.push('frete')
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
    let erros = []

    if (!req.body.precoTotal) erros.push('precoTotal')
    if (!req.body.frete) erros.push('frete')
        
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
    validaCarrinho
}