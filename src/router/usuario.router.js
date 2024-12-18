const express = require('express')
const router = express.Router()
const usuarioController = require('../controller/usuario.controller')

const authmiddleware = require('../middleware/auth.mid')
const { validaUsuario, validaIdParams, validaIdBody, validaEndereco } = require('../middleware/validacao.middleware')

const paginacao = require('../middleware/paginacao.middleware')

// GET
router.get('/findById/:id', authmiddleware, validaIdParams, usuarioController.findUserByIdController)
router.get('/findAll', authmiddleware, paginacao, usuarioController.findAllUsersController)

// POST
router.post('/create', validaUsuario, usuarioController.createUserController)
router.post('/addAddress/:id', authmiddleware, validaIdParams, validaEndereco, usuarioController.addUserAddressController)
router.post('/addFavProduct/:id', authmiddleware, validaIdParams, validaIdBody, usuarioController.addUserFavProductController)

// PUT
router.put('/update/:id', validaUsuario, validaIdParams, usuarioController.updateUserController)

// DELETE
router.delete('/remove/:id', authmiddleware, validaIdParams, usuarioController.removeUserController)
router.delete('/removeAddress/', authmiddleware, usuarioController.removeAddressController)
router.delete('/removeFavProduct/:id', authmiddleware, validaIdParams, usuarioController.removeUserFavProductController)

module.exports = router
