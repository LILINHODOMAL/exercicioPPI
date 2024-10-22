import express from "express";

const host ='0.0.0.0';
const porta = 3000;
const app = express();

function gerarTabuada() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    if (numero !== '') {
        for (let i = 0; i <= 10; i++) {
            resultado.innerHTML += `<p>${numero} x ${i} = ${numero * i}</p>`;
        }
    } else {
        resultado.innerHTML = '<p>Por favor, insira um número!</p>';
    }
}
app.get("/",gerarTabuada);


app.listen(porta, host, () => { 
    console.log("Servidor em execução http//" + host + ":" + porta);

});

