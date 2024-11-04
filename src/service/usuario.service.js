const { trusted } = require('mongoose')
const Usuario = require('../model/Usuario')

const findUserByIdService = (id) => {

    return Usuario.findById(id)
}

const findAllUsersService = () => {

    return Usuario.find()
}

const createUserService = (body) => {

    return Usuario.create(body)
}

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, {returnDocument: 'after'})
}

const removeUserService = (id) => {
    return Usuario.findByIdAndDelete(id)
}

const addUserAddressService = (id, address) => {
    return Usuario.findOneAndUpdate({
        _id: id
    },
    {
        $push: {
            enderecos: address
        }
    },
    {
        includeResultMetadata: true,
        new: true
    }
)
}

const removeAddressService = (id, addressId) => {

    return Usuario.findOneAndUpdate({
        _id: id
    },
    {
        $pull: {
            enderecos: {
                _id: addressId
            },
        }
    },
    {
        rawResult: true,
    
    }
   
)
}

const addFavProductService = (id, product) => {

}

const removeFavProductService = () => {

}

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    updateUserService,
    removeUserService,
    addUserAddressService,
    removeAddressService,
    addFavProductService,
    removeFavProductService

}