//Lyd for hopp og coin collection

<audio id="jumpSound" src="Jump Sound.wav" preload="auto"></audio>

var jumpSound = document.getElementById('jumpSound');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Space') {
        playJumpSound();
    }
});


function playJumpSound() {
    if (!jumpSound.paused) {
        jumpSound.currentTime = 0;
    }
    jumpSound.play();
}