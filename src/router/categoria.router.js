const router = require('express').Router()
const authMiddleWare = require('../middleware/auth.mid')
const categoriaController = require('../controller/categoria.controller')
const { validaCategoria, validaId } = require('../middleware/validacao.middleware')
const paginacao = require('../middleware/paginacao.middleware')

router.get('/findById/:id', authMiddleWare, validaId, categoriaController.findCategoriaByIdController)
router.get('/findAll/', authMiddleWare, paginacao, categoriaController.findAllCategoriaController)

router.post('/create/', authMiddleWare, validaCategoria, categoriaController.createCategoriaController)

router.put('/update/:id', authMiddleWare, validaId, validaCategoria, categoriaController.updateCategoriaController)

router.delete('/delete/:id', authMiddleWare, validaId, categoriaController.deleteCategoriaController)

module.exports = router