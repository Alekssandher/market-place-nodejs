const express = require('express')
require('dotenv').config

const connectToDatabase = require('./src/database/database')



const authRouter = require('./src/router/auth.router')
const usuario = require('./src/router/usuario.router')
const produtoRouter = require('./src/router/produto.router')
const categoriaRouter = require('./src/router/categoria.router')
const carrinhoRouter = require('./src/router/carrinho.router')
const pedidoRouter = require('./src/router/pedido.router')
const docs = require('./src/router/docs.router')
const app = express()

const cors = require('cors')

const port = 3000

app.use(express.json())
app.use(cors(
    {
        origin: "localhost:3001",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true
    }
))

connectToDatabase()

app.use('/usuario', usuario)
app.use('/auth', authRouter)
app.use('/produto', produtoRouter)
app.use('/categoria', categoriaRouter)
app.use('/carrinho/', carrinhoRouter)
app.use('/pedido', pedidoRouter)
app.use('/docs', docs)

app.get('/', (req, res) => {
    res.send({message: 'rodando'})
})

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost:${port}`)
})

module.exports = app