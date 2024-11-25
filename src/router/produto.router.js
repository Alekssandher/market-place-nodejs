const router = require('express').Router()

const produtoController = require('../controller/produto.controller')
const authMiddleware = require('../middleware/auth.mid')
const { validaProduto } = require('../middleware/validacao.middleware')

router.get("/find/:id", authMiddleware, produtoController.findProductByIdController)
router.get("/findAll/", authMiddleware, produtoController.findAllProductController)

router.post("/createProduct/", authMiddleware, validaProduto, produtoController.createProductController)
router.post("/addProdutoCategoria/:id", authMiddleware, produtoController.addCategoriaProdutoController)

router.put("/update/:id", authMiddleware, validaProduto, produtoController.updateProductController)

router.delete("/delete/:id", authMiddleware, produtoController.deleteProductController)
router.delete("/deleteCategoria/:id", authMiddleware, produtoController.removeCategoriaProdutoController)
module.exports = router