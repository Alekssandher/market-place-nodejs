const carrinhoService = require('../service/carrinho.service')


const findCarrinhoByIdController = async (req, res) => {
    try {
        res.status(200).send(await carrinhoService.findCarrinhoByIdService(req.params.id))
    } catch (error) {
        console.log("Deu erro no findCarrinhoByIdController")
        res.status(500).send({message: "Erro inesperado, tente novamente"})
    }
}

const findAllCarrinhoController = async (req, res) => {
    try {
        res.status(200).send(await carrinhoService.findAllCarrinhoService())
    } catch (error) {
        console.log("Deu erro no findAllCarrinhoController")
        res.status(500).send({message: "Erro inesperado, tente novamente"})
    }
}

const createCarrinhoController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId,
            createdAt: new Date()
        }
        res.status(201).send(await carrinhoService.createCarrinhoService(corpo))
    } catch (error) {
        console.log("Deu erro no createCarrinhoController")
        res.status(500).send({message: "Erro inesperado, tente novamente"})
    }
}

const updateCarrinhoController = async (req, res) => {
    try {
        res.status(200).send(await carrinhoService.updateCarrinhoService(req.params.id, req.body))
    } catch (error) {
        console.log("Deu erro no updateCarrinhoController")
        res.status(500).send({message: "Erro inesperado, tente novamente"})
    }
}

const deleteCarrinhoController = async (req, res) => {
    try {
        res.status(200).send(await carrinhoService.deleteCarrinhoService(req.params.id))
    } catch (error) {
        console.log("Deu erro no deleteCarrinhoController")
        res.status(500).send({message: "Erro inesperado, tente novamente"})
    }
}

module.exports = {
    findCarrinhoByIdController,
    findAllCarrinhoController,
    createCarrinhoController,
    updateCarrinhoController,
    deleteCarrinhoController
}