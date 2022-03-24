const sequelize = require('sequelize');

//Import o arquivo de conexao

const conexao = require('../database/database');

//Cria a representacao da tabela de usuarios seus campos, tipos e regras.
//Parametros:
//1-Nome da tabela
//2- Estrutura dos campos(nome do campo, tipo e regras). 
const Usuario =  conexao.define(
    'tbl_usuario',
    {
        cod_usuario:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        sobrenome:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        email:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        foto:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        login:{
            type: sequelize.STRING(50),
            allowNull: false
        },
        senha:{
            type: sequelize.STRING(50),
            allowNull: false
        }
    }
);

Usuario.sync({force:true});

module.exports = Usuario;