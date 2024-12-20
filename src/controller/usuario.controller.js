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

       
        const { q, limit, offset } = req.query;

        const filters = {};

        if (q) {
            filters.nome = { $regex: q, $options: 'i' }; 
        }

        return res.status(200).send(await userService.findAllUsersService(filters, limit, offset))

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

        console.log(deletedUser)
        if (deletedUser == null) {
            
            return res.status(404).send({message: 'usuario não encontrado'})
        } else {
       
            return res.status(200).send(deletedUser)
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

        if (!endereco) {
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

        console.log("Recebido: ", req.body)
        const endereco = await userService.removeAddressService(req.body.id, req.body.addressId)

        if(!endereco) return res.status(400).send({message: 'Endereço não encontrado'})

        const found = endereco.enderecos.some(endereco => endereco._id.toString() === req.body.addressId);
        console.log("Encontrado? ", found)

        if (found) {
            res.status(200).send(endereco)
        }else {

            res.status(400).send({message: 'Endereço não encontrado'})
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
        console.log(req.body)
        return res.status(200).send(await userService.removeFavProductService(req.params.id, req.body))
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