const router = require('express').Router()

const pedidoController = require('../controller/pedido.controller')
const authMiddleware = require('../middleware/auth.mid')
const {validaPedido, validaIdParams, validaProdutoCarrinhoPedido } = require('../middleware/validacao.middleware')
const paginacao = require('../middleware/paginacao.middleware')

router.get("/findById/:id", authMiddleware, validaIdParams, pedidoController.findPedidoByIdController)
router.get("/findAll/", authMiddleware, paginacao, pedidoController.findAllPedidosController)

router.post("/createPedido/", authMiddleware, validaProdutoCarrinhoPedido, validaPedido, pedidoController.createPedidoController)

router.patch("/updateStatus/:id", authMiddleware, validaIdParams, validaPedido, pedidoController.updateStatusPedidoController)
router.delete("/delete/:id", authMiddleware, validaIdParams, pedidoController.deletePedidoController)

module.exports = router