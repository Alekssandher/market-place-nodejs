const Produto = require('../model/Produto')

const findProductByIdService = (id) => {
    return Produto.findById(id)
} 

const findAllProductService = (limit, offset) => {
    return Produto.find().limit(limit).skip(offset)
}

const createProductService = (body) => {
    return Produto.create(body)
}

const updateProductService = (id, body) => {
    return Produto.findByIdAndUpdate(id, body, {returnDocument: "after"})
}

const deleteProductService = (id) => {
    return Produto.findByIdAndRemove(id)
}

const addCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                categorias: {
                    _id: categoria.id,
                    createdAt: categoria.createdAt
                }
            }
        },
        {
            includeResultMetadata: true,
            new: true
        }
    )
}

const deleteCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id,

        },
        {
            $pull: {
                categoria: {
                    _id: categoria.id,

                },
            },
        },
        {
            includeResultMetadata: true,
            new: true
        }
    )
}

module.exports = {
    findProductByIdService,
    findAllProductService,
    createProductService,
    updateProductService,
    deleteProductService,
    addCategoriaProdutoService,
    deleteCategoriaProdutoService
}