const router = require('express').Router()
const authMiddleWare = require('../middleware/auth.mid')
const carrinhoController = require('../controller/carrinho.controller')
const { validaCarrinho, validaIdParams, validaProdutoCarrinhoPedido } = require('../middleware/validacao.middleware')
const paginacao = require('../middleware/paginacao.middleware')

router.get("/findById/:id", authMiddleWare, validaIdParams, carrinhoController.findCarrinhoByIdController)
router.get("/findAll/", authMiddleWare, paginacao, carrinhoController.findAllCarrinhoController)

router.post("/create/", authMiddleWare, validaProdutoCarrinhoPedido, validaCarrinho, carrinhoController.createCarrinhoController)

router.put("/update/:id", authMiddleWare, validaIdParams, validaCarrinho, carrinhoController.updateCarrinhoController)

router.delete("/delete/:id", authMiddleWare, validaIdParams, carrinhoController.deleteCarrinhoController)

module.exports = router