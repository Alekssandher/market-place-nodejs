const router = require('express').Router()
const authMiddleWare = require('../middleware/auth.mid')
const carrinhoController = require('../controller/carrinho.controller')

router.get("/findById/:id", authMiddleWare, carrinhoController.findCarrinhoByIdController)
router.get("/findAll/", authMiddleWare, carrinhoController.findAllCarrinhoController)

router.post("/create/", authMiddleWare, carrinhoController.createCarrinhoController)

router.put("/update/:id", authMiddleWare, carrinhoController.updateCarrinhoController)

router.delete("/delete/:id", authMiddleWare, carrinhoController.deleteCarrinhoController)

module.exports = router