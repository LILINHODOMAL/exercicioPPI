import express from "express";

const host ='0.0.0.0';
const porta = 3000;
const app = express();

app.get("/",PaginaInicial);

function PaginaInicial(requisição, resposta ){
    
    const tabuada = parseInt(req.query.tabuada) || 1;
    const sequencia = parseInt(req.query.sequencia) || 10;

    // Gerar a tabuada
    let resultado = `<h1>Tabuada do ${tabuada}</h1>`;
    resultado += `<ul>`;
    for (let i = 0; i <= sequencia; i++) {
        resultado += `<li>${tabuada} x ${i} = ${tabuada * i}</li>`;
    }
    resultado += `</ul>`;

    };
    





app.listen(porta, host, () => { 
    console.log("Servidor em execução http//" + host + ":" + porta);

});

