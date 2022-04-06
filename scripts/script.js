const botao = document.querySelector('.play')
const rain = document.querySelector('#audio')

function playAudio() {
    if(rain.paused) {
        rain.play();
        botao.className = ""
        botao.className = "pause"
    }
    else {
        rain.pause()
        botao.className = ""
        botao.className = "play"
    }
}

function pauseButton() {
    if(rain.paused) {
        botao.classList('p')
    }
}

botao.addEventListener('click', function(event) {
    playAudio()
})