const express = require('express')

module.exports = function(server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    // rotas da API
    const pessoaService = require('../api/pessoa/pessoaService')
    pessoaService.register(router,'/pessoas')
}
/*
    router.route('/teste').get(function(req,res,next){
        res.send('asjdfhkjahfjkhsdjkfhdkjashfkjsdahfkjal')
    })*/