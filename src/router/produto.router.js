const router = require('express').Router()

const produtoController = require('../controller/produto.controller')
const authMiddleware = require('../middleware/auth.mid')

router.get("/find/:id", authMiddleware, produtoController.findProductByIdController)
router.get("/findAll/", authMiddleware, produtoController.findAllProductController)

router.post("/createProduct/", authMiddleware, produtoController.createProductController)
router.post("/update/:id", authMiddleware, produtoController.updateProductController)

router.delete("/delete/:id", authMiddleware, produtoController.deleteProductController)

module.exports = router