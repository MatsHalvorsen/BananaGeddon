var m = 0;

function moveBackground() {
    m--;
    document.getElementById("back").style.backgroundPosition = m+"px";
}


var isLiving = true;

window.onload = function() {
    spawnObstacle();
}

function spawnObstacle() {
    var obstacleX = 100;

    var newObsatacle = document.createElement("img");
    newObsatacle.src = "/images/monkey.png"
    newObsatacle.style.height = "10%";
    newObsatacle.style.width = "5%";
    newObsatacle.style.position = "absolute";
    newObsatacle.style.top = "45%";
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


    if (isLiving == false) return;

    var dino = document.getElementById("player-character");
    var dinoTop = dinoY; 
    var dinoBottom = dinoY + dino.clientHeight; 


    if (obstacleX > 23 && obstacleX < 25) {
        alert("You died");
        isLiving = false;
        location.reload();
    }
}
