function updateGameView() {
    document.getElementById('app').innerHTML = `
    <button onclick="startGame()">Start Spill</button>
    <img
    src="/images/sprites/${model.app.currentAnimation.skin}-${model.app.currentAnimation.sprite}.png">
    `
}
// updateGameView()