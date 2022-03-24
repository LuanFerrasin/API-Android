//Importa o módulo do Sequelize
const sequelize = require('sequelize');

/**CRIA UMA CONEXAO COM O BANCO DE DADOS 
 PARAMETROS:
 
 1-NOME DO BANCO DE DADOS 
 2-USUARIO DO BANCO DE DADOS 
 3-SENHA DO BANCO DE DADOS
 4-OBJETO JSON QUE DETERMINA O LOCAL DO BANCO DE DADOS (localhost:3306 )E O TIPO DE BANCO DE DADOS(mysql)
  **/

 const conexao = new sequelize(
     'libri',
     'root',
     '12345678',
     {
         host: 'localhost',
         dialect: 'mysql'
         
     }
 );

 module.exports = conexao;