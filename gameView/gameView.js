function updateGameView() {
    document.getElementById('app').innerHTML = `
    <button onclick="startGame()" >Start Spill</button>
    <img src="/images/sprites/${model.app.currentAnimation.skin}-${model.app.currentAnimation.sprite}.png">
    <img id="back">
    `;
    setInterval(moveBackground, 2);
}
setInterval(moveBackground, 2);
updateGameView();
