const express = require('express')
const router = express.Router()
const usuarioController = require('../controller/usuario.controller')

const authmiddleware = require('../middleware/auth.mid')
const { validaUsuario, validaId } = require('../middleware/validacao.middleware')

const paginacao = require('../middleware/paginacao.middleware')

// GET
router.get('/findById/:id', authmiddleware, validaId, usuarioController.findUserByIdController)
router.get('/findAll', authmiddleware, paginacao, usuarioController.findAllUsersController)

// POST
router.post('/create', validaUsuario, usuarioController.createUserController)
router.post('/addAddress/:id', authmiddleware, validaId, usuarioController.addUserAddressController)
router.post('/addFavProduct/:id', authmiddleware, validaId, usuarioController.addUserFavProductController)

// PUT
router.put('/update/:id', validaUsuario, validaId, usuarioController.updateUserController)

// DELETE
router.delete('/remove/:id', authmiddleware, validaId, usuarioController.removeUserController)
router.delete('/removeAddress/', authmiddleware, usuarioController.removeAddressController)
router.delete('/removeFavProduct/:id', authmiddleware, validaId, usuarioController.removeUserFavProductController)

module.exports = router
