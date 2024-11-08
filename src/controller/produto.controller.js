const produtoService = require('../service/Produto.service')

const findProductByIdController = async (req, res) => {
    try {
        res.send(await produtoService.findProductByIdService(req.params.id))
    } catch (error) {
        console.log("Deu erro no findProductByIdController: ", error)
        return res.status(500).send({message: "Algo inesperado aconteceu, tente novamente"})
    }
}

const findAllProductController = async (req, res) => {
    try {
        res.send(await produtoService.findAllProductService())
    } catch (error) {
        console.log("Deu erro no findAllProductController: ", error)
        return res.status(500).send({message: "Algo inesperado aconteceu, tente novamente"})
    }
}

const createProductController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId,
            createdAt: new Date()
        }
        res.send(await produtoService.createProductService(corpo))
    } catch (error) {
        console.log("Deu erro no createProductController: ", error)
        return res.status(500).send({message: "Algo inesperado aconteceu, tente novamente"})
    }
}

const updateProductController = async (req, res) => {
    try {
        res.send(await produtoService.updateProductService(req.params.id, req.body))
    } catch (error) {
        console.log("Deu erro no updateProductController: ", error)
        return res.status(500).send({message: "Algo inesperado aconteceu, tente novamente"})
    }
}

const deleteProductController = async (req, res) => {
    try {   
        res.send(await produtoService.deleteProductService(req.params.id))
    } catch (error) {
        console.log("Deu erro no deleteProductController: ", error)
        return res.status(500).send({message: "Algo inesperado aconteceu, tente novamente"})
    }
}

module.exports = {
    findProductByIdController,
    findAllProductController,
    createProductController,
    updateProductController,
    deleteProductController
}