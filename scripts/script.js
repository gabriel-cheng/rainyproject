const botao = document.querySelector('.play')
const rain = document.querySelector('#audio')
const volume = document.querySelector('#volume')

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

function setVolume(volume) {
    rain.volume = volume
}

botao.addEventListener('click', function(event) {
    playAudio()
})

volume.addEventListener('mousemove', function() {
    setVolume(this.value)
})
