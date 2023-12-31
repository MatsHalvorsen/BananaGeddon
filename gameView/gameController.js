let runInterval1;
let runInterval2;
let pointInterval;
let coinInterval;
let backgroundInterval;
let obstacleInterval;

function startGame() {
    newObsatacle.style.display = "inline";

    model.data.isAlive = true
    if (model.data.isAlive === true) {
        runInterval1 = setInterval(setRunAnimation1, 200)
        runInterval2 = setInterval(setRunAnimation2, 400)
        pointInterval = setInterval(incrementPoints, 1000)
        coinInterval = setInterval(incrementCoins, 5000)
        backgroundInterval = setInterval(moveBackground, 2)
        obstacleInterval = setInterval(function () {
            obstacleX -= 1;
            newObsatacle.style.left = obstacleX + "%";

            checkCollision(obstacleX);
        }, 100);

        spawnObstacle()
    } else {
        console.log("isAlive is: False")

        // Adds coins from the current session to the player's coin total
        model.app.currentUser.coins += model.data.liveCoins

        // Checks if the player's current score is higher than their previous high score.
        // If so, then their high score is updated to the new higher value
        if (model.data.liveHighscore > model.app.currentUser.highscore) {
            model.app.currentUser.highscore = model.data.liveHighscore
        }
        return
    }
}

var dinoY = 45;

window.onkeydown = function (e) {
    if (e.keyCode == 32 || e.keyCode == 38) {
        jump()
    }
}

function jump() {
    jumpSound.play();
    updateGameView()
    character = document.getElementById("player-character");

    clearInterval(runInterval1);
    clearInterval(runInterval2);

    setTimeout(function () {
        character.style.margin = "-60px 0 60px 25vw"
    }, 0);
    setTimeout(function () {
        character.style.margin = "-120px 0 120px 25vw"
    }, 200);
    setTimeout(function () {
        character.style.margin = "-60px 0 60px 25vw"
    }, 400);
    setTimeout(function () {
        character.style.margin = "0 0 0 25vw"
        runInterval1 = setInterval(setRunAnimation1, 200);
        runInterval2 = setInterval(setRunAnimation2, 400);
    }, 600);
}

function setRunAnimation1() {
    model.app.currentAnimation.sprite = "run1"
    updateGameView()
}

function setRunAnimation2() {
    model.app.currentAnimation.sprite = "run2"
    updateGameView()
}

function checkIsAlive() {
    if (currentHealth > 0) {
        return
    } else {
        model.data.isAlive = false
        clearInterval(pointInterval);
        clearInterval(coinInterval);
        clearInterval(backgroundInterval);
        clearInterval(runInterval1);
        clearInterval(runInterval2);

        setTimeout(function () {
            mainPage()
        }, 500)
    }
}

let currentHealth = 3;

function updateHealthBar() {
    checkIsAlive()
    let html = ""
    for (let i = 0; i < (3 + model.app.currentUser.upgrades.hp); i++) {
        if (i < currentHealth) {
            html += `<img class="heart-icon" src="./images/heart-full.png">`
        } else {
            html += `<img class="heart-icon" src="./images/heart-empty.png">`
        }
    }
    return html
}

// SCORE + COINS //
// Increments the points by 1 each second
function incrementPoints() {
    model.data.liveHighscore++
}

// Increments the coins by 5 every 5 seconds
function incrementCoins() {
    coinSound.play();
    model.data.liveCoins += 5
}