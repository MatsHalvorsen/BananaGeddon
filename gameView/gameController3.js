var m = 0;
var obstacleX = 100;
var newObsatacle = document.createElement("div");
newObsatacle.style.display = "none";

function moveBackground() {
    m--;
    document.getElementById("back").style.backgroundPosition = m + "px";
}

var isLiving = true;

function spawnObstacle() {
    var obstacleX = 100;

    var newObstacle = document.createElement("img");
    newObstacle.src = "/images/monkey.png"
    newObstacle.style.height = "10%";
    newObstacle.style.width = "5%";
    newObstacle.style.position = "absolute";
    newObstacle.style.top = "45%";
    newObstacle.style.left = "100%";

    setInterval(function () {
        obstacleX -= 1;
        newObstacle.style.left = obstacleX + "%";

        checkCollision(obstacleX);
    }, 100);

    document.body.appendChild(newObstacle);

    var respawnTime = (Math.random() * 3000) + 1000;

    setTimeout(function () {
        spawnObstacle();
    }, respawnTime);
}

function checkCollision(obstacleX) {
    if (isLiving == false) return;

    if (obstacleX > 23 && obstacleX < 25) {
        deathSound.play();
        alert("You died");
        isLiving = false;
        model.data.isAlive = false
        clearInterval(pointInterval);
        clearInterval(coinInterval);
        clearInterval(backgroundInterval);
        clearInterval(runInterval1);
        clearInterval(runInterval2);

        setTimeout(function () {
            mainPage()
        }, 500);
    }
}