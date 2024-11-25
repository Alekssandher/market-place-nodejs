const router = require('express').Router()

const pedidoController = require('../controller/pedido.controller')
const authMiddleware = require('../middleware/auth.mid')

router.get("/findById/:id", authMiddleware, pedidoController.findPedidoByIdController)
router.get("/findAll/", authMiddleware, pedidoController.findAllPedidosController)

router.post("/createPedido/", authMiddleware, pedidoController.createPedidoController)

router.patch("/updateStatus/:id", authMiddleware, pedidoController.updateStatusPedidoController)
router.delete("/delete/:id", authMiddleware, pedidoController.deletePedidoController)

module.exports = router