const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)

const motor = require('../api/models/motorModels.js')
const pecas = require('../api/models/pecasModels')

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida!')
}

motor.init(conexao)
pecas.init(conexao)

motor.associate(conexao.models)
pecas.associate(conexao.models)

module.exports = conexao;

