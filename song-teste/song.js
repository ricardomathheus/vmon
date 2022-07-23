const audios = document.querySelectorAll('#musicas audio')
const numberOfAudios = audios.length

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function choseRamdomAudio() {
    if (!audios) {
        return
    }

    const index = parseInt(getRandomArbitrary(0, numberOfAudios) )
    return audios[index]
}

function playRamdomAudio() {
    const audio = choseRamdomAudio()
    if (audio) audio.play()
}


// -ll mudar para point event
window.onclick = () => {
    console.log('play- onclick')
    playRamdomAudio()
    window.onclick = undefined
}

window.ontouchmove = () => {
    console.log('play- ontouchmove')
    playRamdomAudio()
    window.ontouchmove = undefined
}