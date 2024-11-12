const categoriaService = require('../service/categoria.service');

const findCategoriaByIdController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.findCategoriaByIdService(req.params.id))
    } catch (error) {
        console.log(`Erro no findCategoriaByIdController: ${error}`)
        return res.status(500).send({message: "Erro inesperado, tente novamente"})
    }
}

const findAllCategoriaController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.findAllCategoriaService())
    } catch (error) {
        console.log(`Erro no findAllCategoriaController: ${error}`)
        return res.status(500).send({message: "Erro inesperado, tente novamente"})
    }
}   

const createCategoriaController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            createdAt: new Date()
        }
        res.status(201).send(await categoriaService.createCategoriaService(corpo))
    } catch (error) {
        console.log(`Erro no createCategoriaController: ${error}`)
        return res.status(500).send({message: "Erro inesperado, tente novamente"})
    }
 
}

const updateCategoriaController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.updateCategoriaService(req.params.id, req.body))
        console.log(req.params.body)
    } catch (error) {
        console.log(`Erro no updateCategoriaController: ${error}`)
        
        return res.status(500).send({message: "Erro inesperado, tente novamente"})
    }
}

const deleteCategoriaController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.deleteCategoriaService(req.params.id))
    } catch (error) {
        console.log(`Erro no deleteCategoriaController: ${error}`)
        return res.status(500).send({message: "Erro inesperado, tente novamente"})
    }
}

module.exports = {
    findCategoriaByIdController,
    findAllCategoriaController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController

}