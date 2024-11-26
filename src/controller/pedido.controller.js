const pedidoService = require('../service/pedido.service')

const findPedidoByIdController = async (req, res) => {
    try {
        res.status(200).send(await pedidoService.findPedidoByIdService(req.params.id))
    } catch (error) {
        console.log(`Deu erro no findPedidoByIdController: ${error}`)
        res.status(500).send({message: 'Algo deu errado no servidor, tente novamente.'})
    }
}

const findAllPedidosController = async (req, res) => {
    try {
        res.status(200).send(await pedidoService.findAllPedidosService(req.query.limit, req.query.offset))
    } catch (error) {
        console.log(`Deu erro no findAllPedidosController: ${error}`)
        res.status(500).send({message: 'Algo deu errado no servidor, tente novamente.'})
    }
}

const createPedidoController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId
        }

        res.status(201).send(await pedidoService.createPedidoService(corpo))
    } catch (error) {
        console.log(`Deu erro no createPedidoController: ${error}`)
        res.status(500).send({message: 'Algo deu errado no servidor, tente novamente.'})
    }
}

const deletePedidoController = async (req, res) => {
    try {
        res.status(200).send(await pedidoService.deletePedidoService(req.params.id))
    } catch (error) {
        console.log(`Deu erro no deletePedidoController: ${error}`)
        res.status(500).send({message: 'Algo deu errado no servidor, tente novamente.'})
    }
}

const updateStatusPedidoController = async (req, res) => {
    try {
        res.status(200).send(await pedidoService.updateStatusPedidoService(req.params.id))
    } catch (error) {
        console.log(`Deu erro no updateStatusPedidoController: ${error}`)
        res.status(500).send({message: 'Algo deu errado no servidor, tente novamente.'})
    }
}

module.exports = {
    findPedidoByIdController,
    findAllPedidosController,
    createPedidoController,
    deletePedidoController,
    updateStatusPedidoController
}