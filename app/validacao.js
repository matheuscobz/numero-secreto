function verificaChute(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div> Valor inválido </div>'
        return
    } 

    if (numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número precisa ser entre ${menorValor} e ${maiorValor}. </div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <div class="principal">
            <h2> Parabéns, você ACERTOU !! </h2>
            <h3> O número secreto era: ${numeroSecreto} </h3>
            </div>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>
                <h3>
                    O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i> 
                </h3>
            </div>
        ` 
    } else {
        elementoChute.innerHTML += `
            <div>
                <h3> 
                    O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i>
                </h3>
            </div>
        ` 
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}