const router = require('express').Router()
const authMiddleWare = require('../middleware/auth.mid')
const carrinhoController = require('../controller/carrinho.controller')
const {validaCarrinho} = require('../middleware/validacao.middleware')

router.get("/findById/:id", authMiddleWare, carrinhoController.findCarrinhoByIdController)
router.get("/findAll/", authMiddleWare, carrinhoController.findAllCarrinhoController)

router.post("/create/", authMiddleWare, validaCarrinho, carrinhoController.createCarrinhoController)

router.put("/update/:id", authMiddleWare, validaCarrinho, carrinhoController.updateCarrinhoController)

router.delete("/delete/:id", authMiddleWare, carrinhoController.deleteCarrinhoController)

module.exports = router