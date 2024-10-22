import express from "express";

const host ='0.0.0.0';
const porta = 3000;
const app = express();

function PaginaInicial(requisição, resposta ){
    resposta.send(`<h1>Seja bem vindo</h1> 
                    <br>
                    <h2>Primeiros passos para desenvolvimento de aplicação web com Npde/JS,/h2>
                    <h3>Pagina inicial</h3>`);
}

app.get("/",PaginaInicial);


app.listen(porta, host, () => { 
    console.log("Servidor em execução http//" + host + ":" + porta);

});

