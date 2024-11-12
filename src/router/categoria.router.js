const router = require('express').Router()
const authMiddleWare = require('../middleware/auth.mid')
const categoriaController = require('../controller/categoria.controller')

router.get('/findById/:id', authMiddleWare, categoriaController.findCategoriaByIdController)
router.get('/findAll/', authMiddleWare, categoriaController.findAllCategoriaController)

router.post('/create/', authMiddleWare, categoriaController.createCategoriaController)

router.put('/update/:id', authMiddleWare, categoriaController.updateCategoriaController)

router.delete('/delete/:id', authMiddleWare, categoriaController.deleteCategoriaController)

module.exports = router