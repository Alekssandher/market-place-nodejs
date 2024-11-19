const router = require('express').Router()
const authMiddleWare = require('../middleware/auth.mid')
const carrinhoController = require('../controller/carrinho.controller')

router.get("/find/:id", authMiddleware, carrinhoController.findCarrinhoByIdController)
router.get("/findAll/", authMiddleware, carrinhoController.findAllCarrinhoController)

router.post("/createCarrinho/", authMiddleware, carrinhoController.createCarrinhoController)
router.post("/addCarrinho/:id", authMiddleware, carrinhoController.addCarrinhoController)

router.put("/update/:id", authMiddleware, carrinhoController.updateCarrinhoController)

router.delete("/delete/:id", authMiddleware, carrinhoController.deleteCarrinhoController)
router.delete("/deleteCarrinho/:id", authMiddleware, carrinhoController.removeCarrinhoController)
module.exports = router