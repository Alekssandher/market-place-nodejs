const router = require('express').Router()

const produtoController = require('../controller/produto.controller')
const authMiddleware = require('../middleware/auth.mid')
const { validaProduto, validaId } = require('../middleware/validacao.middleware')
const paginacao = require('../middleware/paginacao.middleware')

router.get("/find/:id", authMiddleware, validaId, produtoController.findProductByIdController)
router.get("/findAll/", authMiddleware, paginacao, produtoController.findAllProductController)

router.post("/createProduct/", authMiddleware, validaProduto, produtoController.createProductController)
router.post("/addProdutoCategoria/:id", authMiddleware, validaId, produtoController.addCategoriaProdutoController)

router.put("/update/:id", authMiddleware, validaId, validaProduto, produtoController.updateProductController)

router.delete("/delete/:id", authMiddleware, validaId, produtoController.deleteProductController)
router.delete("/deleteCategoria/:id", authMiddleware, validaId, produtoController.removeCategoriaProdutoController)
module.exports = router