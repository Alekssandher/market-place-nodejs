const express = require('express')
const router = express.Router()
const usuarioController = require('../controller/usuario.controller')

const authmiddleware = require('../middleware/auth.mid')

// GET
router.get('/findById/:id', authmiddleware, usuarioController.findUserByIdController)
router.get('/findAll', authmiddleware, usuarioController.findAllUsersController)

// POST
router.post('/create', usuarioController.createUserController)
router.post('/addAddress/:id', usuarioController.addUserAddressController)
router.post('/addFavProduct/:id', usuarioController.addUserFavProductController)

// PUT
router.put('/update/:id', usuarioController.updateUserController)

// DELETE
router.delete('/remove/:id', usuarioController.removeUserController)
router.delete('/removeAddress/', usuarioController.removeAddressController)
router.delete('/removeFavProduct/:id', usuarioController.removeUserFavProductController)

module.exports = router
