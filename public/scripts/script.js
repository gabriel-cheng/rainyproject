const botaoRain = document.querySelector('.play')
const botaoSkyrim = document.querySelector('.playSkyrim')
const volume = document.querySelector('#volume')
const volumeSkyrim = document.querySelector('#volumeSkyrim')
const rain = document.querySelector('#audio')
const audioSkyrim = document.querySelector('#audioSkyrim')

function playAudio() {
    if(rain.paused) {
        rain.play();
        botaoRain.className = ""
        botaoRain.className = "pause"
    }
    else {
        rain.pause()
        botaoRain.className = ""
        botaoRain.className = "play"
    }
}

function playAudioSkyrim() {
    if(audioSkyrim.paused) {
        audioSkyrim.play();
        botaoSkyrim.className = ""
        botaoSkyrim.className = "pauseSkyrim"
    }
    else {
        audioSkyrim.pause()
        botaoSkyrim.className = ""
        botaoSkyrim.className = "playSkyrim"
    }
}

function setVolume(volume) {
    rain.volume = volume
}

function setVolumeSkyrim(volume) {
    audioSkyrim.volume = volume
}

botaoRain.addEventListener('click', function(event) {
    playAudio()
})

volume.addEventListener('mousemove', function() {
    setVolume(this.value)
})

botaoSkyrim.addEventListener('click', function(event) {
    playAudioSkyrim()
})

volumeSkyrim.addEventListener('mousemove', function() {
    setVolumeSkyrim(this.value)
})
