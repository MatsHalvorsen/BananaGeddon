let runInterval1;
let runInterval2;

function startGame() {
    if (model.data.isAlive === true) {
        setInterval(incrementPoints, 1000)
        setInterval(incrementCoins, 5000)
        // setInterval(chooseRandomEncounter, 2500)
        runInterval1 = setInterval(setRunAnimation1, 200)
        runInterval2 = setInterval(setRunAnimation2, 400)
        setInterval(moveBackground, 2)
        
    } else {
        console.log("isAlive is: False")
        
        // Adds coins from current session to the players coin total
        model.app.currentUser.coins += model.data.liveCoins

        // Checks if the players current score is higher than their previous highscore.
        // If so then their highscore is updated to the new higher value
        if (model.data.liveHighscore > model.app.currentUser.highscore) {
            model.app.currentUser.highscore = model.data.liveHighscore
        }
        return
    }
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});
function jump() {
    updateGameView()
    character = document.getElementById("player-character");
    
    clearInterval(runInterval1);
    clearInterval(runInterval2);
    
    setTimeout(function() {
        character.style.margin = "-60px 0 60px 25vw"}, 0);
    setTimeout(function() {
        character.style.margin = "-120px 0 120px 25vw"}, 200);
    setTimeout(function() {
        character.style.margin = "-60px 0 60px 25vw"}, 400);
    setTimeout(function() {
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











let currentHealth = 5;

function updateHealthBar() {
    let html = ""
    for (let i = 0; i < (5 + model.app.currentUser.upgrades.hp); i++) {
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
    model.data.liveCoins += 5
}

// RANDOM ENCOUNTER //
// Picks a random event from model.data.encounters[]
function chooseRandomEncounter() {
    console.log("WATCH OUT! THERE'S A " + model.data.encounters[generateRandomNumber(model.data.encounters.length)].event + ".")
}
// Generates a random number based on the parameter
function generateRandomNumber(number) {
    return Math.floor(Math.random() * number)
}