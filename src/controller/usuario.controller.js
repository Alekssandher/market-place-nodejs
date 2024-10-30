
const findUserByIdController = async (req, res) => {
    try {


    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const findAllUsersController = async (req, res) => {
    try {


    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const createUserController = async (req, res) => {
    try {


    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const updateUserController = async (req, res) => {
    try {


    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const removeUserController = async (req, res) => {
    try {


    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const addUserAddressController = async (req, res) => {
    try {


    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const removeAddressController = async (req, res) => {
    try {


    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const addUserFavProductController = async (req, res) => {
    try {


    }catch(error) {

        console.log(`erro: ${error.message}`)
        return res.status(500).send({message: 'internal error'})
        
    }
}

const removeUserFavProductController = async (req, res) => {
    try {


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