function UpdateChangeSkinView(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="container"> 
            <button id="backbutton" onclick="mainPage()"><h1>⬅</h1></button>
            <button onclick="changeSkin('left');">⬅</button>
            <img src="${getimg()}" class="upgradebox">
            <button onclick="changeSkin('right');">➡</button>
        </div>
    `;
}