const userService = require('../service/usuario.service')

const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id)

        if (!user) {
            return res.status(404).send({message: "user not found, try again later"})
        }

        return res.status(200).send(user)

    }catch(error) {

        if (error.kind == 'ObjectId') {
            console.log(error.kind == 'ObjectId')
            return res.status(400).send({message: 'ID incorreto'})
        }

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const findAllUsersController = async (req, res) => {
    try {

        return res.status(200).send(await userService.findAllUsersService(req.query.limit, req.query.offset))

    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const createUserController = async (req, res) => {
    try {
        const body = req.body
        if (!body.nome) {
            return res.status(400).send({message: 'campo nome está faltando'})
        }

        return res.status(201).send(await userService.createUserService(body))

    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const updateUserController = async (req, res) => {
    try {
        return res.status(202).send(await userService.updateUserService(req.params.id, req.body))


    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const removeUserController = async (req, res) => {
    try {

        const deletedUser = await userService.removeUserService(req.params.id)
        
        if (deletedUser == null) {
            
            return res.status(404).send({message: 'usuario não encontrado'})
        } else {
       
            return res.status(200).send({message: 'usuario deletado'})
        }

    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const addUserAddressController = async (req, res) => {
    try {
       
        const endereco = await userService.addUserAddressService(req.params.id, req.body)

        console.log(endereco)

        if (endereco) {
            res.status(400).send({message: 'endereço não adicionado, algo deu errado'})
           
        }else {
            res.status(201).send({message: 'endereço adicionado com sucesso'})
        }
    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const removeAddressController = async (req, res) => {
    try {

        
        const endereco = await userService.removeAddressService(req.body.id, req.body.addressId)
        console.log(endereco)
        const found = endereco.enderecos.some(endereco => endereco._id.toString() === req.body.addressId);

        if (found) {
            res.status(200).send({message: 'endereço removido com sucesso'})
        }else {

            res.status(400).send({message: 'endereço não encontrado'})
        }

    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const addUserFavProductController = async (req, res) => {
    try {
        res.status(201).send(await userService.addFavProductService(req.params.id, req.body))
    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const removeUserFavProductController = async (req, res) => {
    try {
        res.status(201).send(await userService.removeFavProductService(req.params.id, req.body))
    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeAddressController,
    addUserFavProductController,
    removeUserFavProductController
}