const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
            createdAt: { type: Date, required: true, default: Date.now()}
        }
    ],
    createdAt: {type: Date, required: true, default: Date.now()},
    favoriteProducts: [
        {
            id: {type: mongoose.Schema.Types.ObjectId, unique: true, ref: 'produtos' },
            createdAt: { type: Date, required: true, default: Date.now()}
        }
    ],
    admin: {type: Boolean, required: true, default: false}
})
usuarioSchema.pre('save', async function(next){
    if (this.senha){
        this.senha = await bcrypt.hash(this.senha, 10)
    }
    next()
})
const usuario = mongoose.model('usuarios', usuarioSchema)

module.exports = usuario