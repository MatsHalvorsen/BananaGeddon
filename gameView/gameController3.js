var m = 0;

function moveBackground() {
    m--;
    document.getElementById("back").style.backgroundPosition = m+"px";
}


var isAlive = true;

window.onload = function() {
    spawnObstacle();
}

function spawnObstacle() {
    var obstacleX = 100;

    var newObsatacle = document.createElement("div");
    newObsatacle.style.backgroundColor = "red";
    newObsatacle.style.height = "5%";
    newObsatacle.style.width = "2.5%";
    newObsatacle.style.position = "absolute";
    newObsatacle.style.top = "50%";
    newObsatacle.style.left = "50%";

    setInterval(function() {
        obstacleX -= 1;
        newObsatacle.style.left = obstacleX + "%";

        checkCollision(obstacleX);

    },100)
    document.body.appendChild(newObsatacle)

    var respawnTime = (Math.random()*3000) + 1000

    setTimeout(function(){
        spawnObstacle();
    },respawnTime)
}

function checkCollision(obstacleX) {

    if (isAlive == false) return;

    if (obstacleX > 23 && obstacleX < 25) {
        alert("You died");
        isAlive = false;
        location.reload();
    }
}
