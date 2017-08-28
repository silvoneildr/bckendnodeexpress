const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//process.env.PROD_MONGODB || 'mongodb://localhost/db_finance'
//mongodb://<dbuser>:<dbpassword>@ds161860.mlab.com:61860/pessoasdb

module.exports = mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost/db_pessoa',
    { useMongoClient: true }
)

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!"

