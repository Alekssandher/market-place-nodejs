const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nome: {type: String, unique: true, required: true}
});

const Categoria = new mongoose.model("categorias", categoriaSchema);

module.exports = Categoria;
