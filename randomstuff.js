var musico = document.getElementById("music")
let state = 0
function playSong(){
    if (state==0) {
        musico.play() 
        document.getElementById("musicButton").textContent = "now playing: song from eon"
        state = 1
    }
    else {
        musico.pause()
        musico.currentTime = 0
        document.getElementById("musicButton").textContent = "музыка играть"
        state = 0
    }
}