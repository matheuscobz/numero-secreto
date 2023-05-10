const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){    
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChute(chute)
}

function exibeChuteNaTela(chute){
    console.log(chute)
    if (chute === 'game over'){
        document.body.innerHTML = `
            <div class="principal" style="background-color: #f95454;"> 
                <h2> GAME OVER! </h2>
            </div>
        `
    }

    elementoChute.innerHTML = `
        <div> Você disse: </div>
        <span class="box"> ${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())


