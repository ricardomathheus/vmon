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

window.onpointerdown = () => {
    const audio = choseRamdomAudio()
    if (audio) audio.play()

    window.onpointerdown = undefined
}