const restful = require('node-restful')
const mongoose = restful.mongoose
const uniqueValidator = require('mongoose-unique-validator')

const pessoa = new mongoose.Schema({
    nome: {
        type:String, 
        required: [true, "Campo obrigatório!"]
    },
    cpf: {
        type:String, 
        required: [true, "Campo obrigatório!"]
    },
    uf: {type:String},
    nasc: {type:Date},
    peso: {type:Number}
})
pessoa.plugin(uniqueValidator);

module.exports = restful.model('Pessoa', pessoa)