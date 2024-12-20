
const Usuario = require('../model/Usuario')
const bcrypt = require('bcrypt')

const findUserByIdService = (id) => {

    return Usuario.findById(id)
}

const findAllUsersService = (filters, limit, offset) => {

    return Usuario.find(filters).limit(limit).skip(offset)
}

const createUserService = (body) => {

    return Usuario.create(body)
}

const updateUserService = async (id, body) => {
    if (body.senha) {
        body.senha = await bcrypt.hash(body.senha, 10);
    }
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

const addFavProductService = (id, produto) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                favoriteProducts: {
                    _id: produto.id
                }
            }
        },
        {
            includeResultMetadata: true,
            new: true
        }
    )
}

const removeFavProductService = (id, produto) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id
        },
        {
            $pull: {
                favoriteProducts: {
                    _id: produto.id
                }
            }
        },
        {
            includeResultMetadata: true,
            new: true
        }
    )
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