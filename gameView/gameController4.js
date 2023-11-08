//Lyd for hopping

const jumpSound = new Audio('/gameView/gameSounds/jumpsound.wav');

// {/* <audio id="jumpSound" src="/gameSounds/jumpsound.wav" preload="auto"></audio> */}

// var jumpSound = document.getElementById('jumpSound');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Space') {
        playJumpSound();
    }
});


function playJumpSound() {
    if (!jumpSound.paused) {
        // jumpSound.currentTime = 0;
    }
    jumpSound.play();
}