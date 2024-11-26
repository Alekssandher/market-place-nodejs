const router = require('express').Router()

const pedidoController = require('../controller/pedido.controller')
const authMiddleware = require('../middleware/auth.mid')
const {validaPedido} = require('../middleware/validacao.middleware')

router.get("/findById/:id", authMiddleware, pedidoController.findPedidoByIdController)
router.get("/findAll/", authMiddleware, pedidoController.findAllPedidosController)

router.post("/createPedido/", authMiddleware, validaPedido, pedidoController.createPedidoController)

router.patch("/updateStatus/:id", authMiddleware, validaPedido, pedidoController.updateStatusPedidoController)
router.delete("/delete/:id", authMiddleware, pedidoController.deletePedidoController)

module.exports = router