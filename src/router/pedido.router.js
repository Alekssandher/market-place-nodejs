const router = require('express').Router()

const pedidoController = require('../controller/pedido.controller')
const authMiddleware = require('../middleware/auth.mid')
const {validaPedido, validaId} = require('../middleware/validacao.middleware')
const paginacao = require('../middleware/paginacao.middleware')

router.get("/findById/:id", authMiddleware, validaId, pedidoController.findPedidoByIdController)
router.get("/findAll/", authMiddleware, paginacao, pedidoController.findAllPedidosController)

router.post("/createPedido/", authMiddleware, validaPedido, pedidoController.createPedidoController)

router.patch("/updateStatus/:id", authMiddleware, validaId, validaPedido, pedidoController.updateStatusPedidoController)
router.delete("/delete/:id", authMiddleware, validaId, pedidoController.deletePedidoController)

module.exports = router