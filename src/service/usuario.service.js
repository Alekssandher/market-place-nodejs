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
    return Usuario.findByIdAndRemove(id)
}

const addUserAddressService = (id, address) => {

}

const removeAddressService = (id) => {

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