const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    email: { type: String, unique: true, required: true},
    senha: { type: String, required: true},
    imagem: { type: String, required: true},
    enderecos: [
        { 
            rua: { type: String, required: true},
            numero: { type: String, required: true},
            complemento: { type: String, required: false},
            cep: { type: String, required: true},
            createdAt: { type: Date, requried: true}
        }
    ],
    createdAt: {type: Date, required: true},
    favoriteProducts: [
        {
            id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: 'produtos' },
            createdAt: { type: Date, requried: true}
        }
    ],
    admin: {type: Boolean, required: true, default: false}
})

const usuario = mongoose.model('usuarios', usuarioSchema)

module.exports = usuario