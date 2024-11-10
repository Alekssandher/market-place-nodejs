const mongoose = require('mongoose')

const ProdutoSchema = new mongoose.Schema ({
    nome: {type: String, unique: true, required: true},
    descricao: {type: String, unique: false, required: true},
    precoUnitario: {type: Number, unique: false, required: true},
    imagem: {type: String, unique: false, required: true},
    codigoBarra: {type: Number, unique: true, required: true}
    // categoria: [
    //     {
    //         _id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "categorias"},
    //         createdAt: {type: Date, unique: false, required: true}
    //     },
    // ],
})

const Produto = mongoose.model("produtos", ProdutoSchema)

module.exports = Produto