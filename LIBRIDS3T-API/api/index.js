/** Importa o Pacote Express**/ 
const express = require('express');

/** Instancia o Pacote Express**/
const app = express();

//Importa os arquivos de Model 

const usuario = require('./model/usuario');


/**SERVIDOR AUTO-CONTIDO DO EXPRESS.RECEBE AS REQUISIÇÕES E DEVOLVE AS REPOSTAS
 

    PARAMETROS DE LISTEN:
    1-PORTA LOGICA
    2-CALLBACK
 
 **/

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO NA URL: http://localhost:3000');
    console.log('TESTE2');

});