const router = require('express').Router()

const produtoController = require('../controller/produto.controller')
const authMiddleware = require('../middleware/auth.mid')
const { validaProduto, validaIdParams, validaIdBody } = require('../middleware/validacao.middleware')
const paginacao = require('../middleware/paginacao.middleware')

router.get("/find/:id", authMiddleware, validaIdParams, produtoController.findProductByIdController)
router.get("/findAll/", authMiddleware, paginacao, produtoController.findAllProductController)

router.post("/createProduct/", authMiddleware, validaProduto, produtoController.createProductController)
router.post("/addProdutoCategoria/:id", authMiddleware, validaIdParams, validaIdBody, produtoController.addCategoriaProdutoController)

router.put("/update/:id", authMiddleware, validaIdParams, validaProduto, produtoController.updateProductController)

router.delete("/delete/:id", authMiddleware, validaIdParams, produtoController.deleteProductController)
router.delete("/deleteCategoria/:id", authMiddleware, validaIdParams, produtoController.removeCategoriaProdutoController)
module.exports = router