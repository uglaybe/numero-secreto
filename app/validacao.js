
function verificaChute(chute)
{
    const numero = +chute;
    if(!chuteNumerico(numero)){
        return;
    }
    if(!chuteDentroDoIntervalo(numero)){
        return;
    }
    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2> Você acertou! </h2>
            <h3> O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }
    else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></i></div>`;
    }
    else if (numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
    }
    else{
        elementoChute.innerHTML += `<div>Tente outro chute</div>`;
    }
}

function chuteNumerico(numero)
{
    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Valor não numérico</div>';
        return false;
    }
    return true;
}

function chuteDentroDoIntervalo(numero)
{
    if (numero < menorValor) {
        elementoChute.innerHTML += '<div>Valor menor do que o permitido</div>';
        return false;
    }
    else if (numero > maiorValor){
        elementoChute.innerHTML += '<div>Valor maior do que o permitido</div>';
        return false;        
    }
    return true;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});