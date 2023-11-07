

function updateGameView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="game-stats">
        <h1>Topp Score: ${model.app.currentUser.highscore}</h1>
        <h1>Poeng: ${model.data.liveHighscore}</h1>
        <h1>Mynter: ${model.data.liveCoins}</h1>
    </div>

    <button
        onclick="startGame()"
        class="start-btn"
        id="start-btn">
        Start Spill
    </button>

    <div>
        <img
        style="    margin-left: 25vw;        "
        id="player-character"
        src="/images/sprites/${model.app.currentAnimation.skin}-${model.app.currentAnimation.sprite}.png">
    </div>
    `
}
function showStartBtn() {
    document.getElementById("start-btn").style.display = "inline"
}
// updateGameView()
    document.getElementById('app').innerHTML = `
    <button onclick="startGame()" >Start Spill</button>
    <img src="/images/sprites/${model.app.currentAnimation.skin}-${model.app.currentAnimation.sprite}.png">
    <img id="back">
    `;
    setInterval(moveBackground, 2);

setInterval(moveBackground, 2);
// updateGameView();
