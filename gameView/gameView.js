
function updateGameView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    
    
    <div id="gameScreen">
        <div id="game-stats">
            <h1>|| Topp Score: ${model.app.currentUser.highscore} |</h1>
            <h1>| Poeng: ${model.data.liveHighscore} |</h1>
            <h1>| <img src="./images/coin.png" style="width: 25px"> ${model.data.liveCoins} ||</h1>
        </div>
        
        <button
        onclick="startGame()"
        class="start-btn"
        id="start-btn">
        Start Spill
        </button>
        
        <div id="hp-bar">${updateHealthBar()}</div>
            <img
            style="margin-left: 25vw;"
            id="player-character"
            src="/images/sprites/${model.app.currentAnimation.skin}-${model.app.currentAnimation.sprite}.png">
            <img id="back">
        </div>
    </div>
    
    `
}

function showStartBtn() {
    document.getElementById("start-btn").style.display = "inline"
    newObsatacle.style.display = "none";
}
