const Produto = require('../model/Produto')

const findProductByIdService = (id) => {
    return Produto.findById(id)
} 

const findAllProductService = () => {
    return Produto.find()
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
                categoria: {
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

const deleteCategoriaProdutoService = (categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: categoria.id,

        },
        {
            $pull: {
                categoria: {
                    _id: categoria.idCategoria,

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