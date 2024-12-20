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

const validaEndereco = (req, res, next) => {
    const requiredFields = ['rua', 'numero', 'cep'];
    const erros = requiredFields.filter(field => !req.body[field]);

    const errosLength = erros.length

    console.log(req.body)
    
    switch (true) {
        case errosLength === 0:
            return next()

        case errosLength === 1:
            
            return res.status(400).send({message: `O campo ${erros} de enderecos precisa ser preenchido`})

        case errosLength > 1:
            
            return res.status(400).send({message: `Os campos ${erros} de enderecos precisam ser preenchido`})

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

const validaIdParams = (req, res, next) => {

    if (ObjectId.isValid(req.params.id)) {

        return next()

    } else {

        return res.status(400).send({message: 'O id passado não corresponde ao padrão necessário.'})

    }
}

const validaIdBody = (req, res, next) => {

    if (ObjectId.isValid(req.body.id)) {

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

const validaProdutoCarrinhoPedido = (req, res, next) => {
    
    const produtos = req.body.produtos;
    
    if (!Array.isArray(produtos) || produtos.length === 0) {
        return res.status(400).send({ message: "Nenhum produto fornecido" });
    }

    let erros = [];

    produtos.forEach((produto, index) => {
        if (!produto._id) {
            erros.push(`${index + 1} - _id está ausente`);
        } else if (!ObjectId.isValid(produto._id)) {
            erros.push(`${index + 1} - _id inválido (${produto._id})`);
        }

        if (!produto.quantidade) {
            erros.push(`${index + 1} - quantidade está ausente`);
        }
    });

    if (erros.length === 0) {
        return next();
    }

    const message =
        erros.length > 1
            ? `Os campos ${erros.join(', ')} precisam ser preenchidos!`
            : `O campo ${erros[0]} precisa ser preenchido!`;

    return res.status(400).send({ message });

}

module.exports = {
    validaUsuario,
    validaProduto,
    validaCategoria,
    validaPedido, 
    validaCarrinho,
    validaIdParams,
    validaIdBody,
    validaLogin,
    validaEndereco,
    validaProdutoCarrinhoPedido
}