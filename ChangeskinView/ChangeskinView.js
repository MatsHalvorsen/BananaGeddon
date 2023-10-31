/*UpdateChangeSkinView()*/
UpdateChangeSkinView()
// let skinPicture = "<h1>BILDE</h1>";
function UpdateChangeSkinView(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="container"> 
            <button id="backbutton" onclick="mainPage()"><h1>⬅</h1></button>
            <button onclick="changeSkin('left')">⬅</button>
            <img src=${getimg()}>
            <button onclick="changeSkin('right')">➡</button>
        </div>
    `;
}