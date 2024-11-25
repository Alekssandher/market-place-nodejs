const express = require('express')
const router = express.Router()
const usuarioController = require('../controller/usuario.controller')

const authmiddleware = require('../middleware/auth.mid')
const { validaUsuario } = require('../middleware/validacao.middleware')
// GET
router.get('/findById/:id', authmiddleware, usuarioController.findUserByIdController)
router.get('/findAll', authmiddleware, usuarioController.findAllUsersController)

// POST
router.post('/create', validaUsuario, usuarioController.createUserController)
router.post('/addAddress/:id', authmiddleware, usuarioController.addUserAddressController)
router.post('/addFavProduct/:id', authmiddleware, usuarioController.addUserFavProductController)

// PUT
router.put('/update/:id', validaUsuario, usuarioController.updateUserController)

// DELETE
router.delete('/remove/:id', authmiddleware, usuarioController.removeUserController)
router.delete('/removeAddress/', authmiddleware, usuarioController.removeAddressController)
router.delete('/removeFavProduct/:id', authmiddleware, usuarioController.removeUserFavProductController)

module.exports = router
