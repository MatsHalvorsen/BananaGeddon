

function startGame() {
    if (model.data.isAlive === true) {
        setInterval(incrementPoints, 1000)
        setInterval(incrementCoins, 5000)
        setInterval(chooseRandomEncounter, 2500)
        
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

// Increments the points by 1 each second
function incrementPoints() {
    model.data.liveHighscore++
    console.log(model.data.liveHighscore)
}

// Increments the coins by 5 every 5 seconds
function incrementCoins() {
    model.data.liveCoins += 5
    console.log(model.data.liveCoins + " Coins!")
}
chooseRandomEncounter()
// Picks a random event from model.data.encounters[]
function chooseRandomEncounter() {
    console.log("WATCH OUT! THERE'S A " + model.data.encounters[generateRandomNumber(model.data.encounters.length)].event + ".")
}

// Generates a random number based on the parameter
function generateRandomNumber(number) {
    return Math.floor(Math.random() * number)
}