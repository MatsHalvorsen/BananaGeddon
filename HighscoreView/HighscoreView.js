function updateViewHighscore() {

    orderedHighscore()

    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="container">
    <h1>Toppliste</h1>
    <ol>
    ${generateHighscore()}
       </ol>         
    <button id="backbutton" onclick="mainPage()">⬅</button>
    </div>
    
    `;
}
function generateHighscore() {

    let highscoreBoard = [];
    for (let i=0; i<model.data.highscoreBoard.length ; i++) {
        highscoreBoard +=`
        <li> ${model.data.highscoreBoard[i].navn}:

        ${model.data.highscoreBoard[i].score}
        </li>
        `
    }
    return highscoreBoard
}

function orderedHighscore() {
    var highscoreBoard = model.data.highscoreBoard;

    highscoreBoard.sort(function(a, b) {
        return b.score - a.score;
    });
    
}

