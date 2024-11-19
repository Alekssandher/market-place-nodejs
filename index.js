const express = require('express')
require('dotenv').config

const connectToDatabase = require('./src/database/database')



const authRouter = require('./src/router/auth.router')
const usuario = require('./src/router/usuario.router')
const produtoRouter = require('./src/router/produto.router')
const categoriaRouter = require('./src/router/categoria.router')
const carrinhoRouter = require('./src/router/carrinho.router')

const app = express()

const port = 3000

app.use(express.json())

connectToDatabase()

app.use('/usuario', usuario)
app.use('/auth', authRouter)
app.use('/produto', produtoRouter)
app.use('/categoria', categoriaRouter)
app.use('/carrinho/', carrinhoRouter)

app.get('/', (req, res) => {
    res.send({message: 'rodando'})
})

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost:${port}`)
})