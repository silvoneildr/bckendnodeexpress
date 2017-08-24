const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_pessoa',{ useMongoClient: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!"
mongoose.Error.messages.general.unique = "O CPF '{VALUE}' já existe!"
