const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatório();


function gerarNumeroAleatório(){
    return parseInt(maiorValor*Math.random());
}

console.log(numeroSecreto);



const elementoMaiorValor = document.getElementById('maior-valor').textContent = maiorValor;
const elemenotMenorValor = document.getElementById('menor-valor').textContent = menorValor;