const mongoose = require('mongoose')

const pedidoSchema = new mongoose.Schema({
    produtos: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: "produtos"},
            quantidade: {type: Number, required: true}
        },
    ],
    createdAt: {type: Date, required: true, default: Date.now},
    precoTotal: {type: Number, required: true},
    frete: {type: Number, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "usuarios"},
    concluido: {type: Boolean, required: true}
})

const Pedido = mongoose.model("pedidos", pedidoSchema)

module.exports = Pedido