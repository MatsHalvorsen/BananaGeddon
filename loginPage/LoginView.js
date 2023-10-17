updateView2();

function updateView() {
    document.getElementById('logIn').innerHTML = /*HTML*/ `
    <div class="container">
        <h1 id="firstPage">Banageddon 2</h1>
        <button onclick="updateView2()">NY BRUKER</button>
        <button onclick="updateView3()">LOGG INN</button>
        <!-- <button id="backbutton" onclick="updateview()">tilbake</button>-->
    </div>
    <img src="./img/Logo.png">
    `;
}


function updateView2() {
    document.getElementById('logIn').innerHTML = /*HTML*/ `
    <div class="container">

      <div class="loginPosition">
        <input id="name" type="text" placeholder="NAVN">
        <input id="password" type="password" placeholder="PASSORD">
        <input id="confirmpassword" type="password" placeholder="PASSORD">
      </div>

        <button onclick="makeUser()">LAG BRUKER</button>
        <button id="backbutton" onclick="updateView()">⬅</button>
        
    </div>
    `;
}

function updateView3() {
    document.getElementById('logIn').innerHTML = /*HTML*/ `
    <div class="container">
    
        <div class="loginform"> 
            <input type="text" id="username" placehoder="brukernavn">
            <input type="password" id="password" placeholder="passord">
        </div>

        <button onclick="">logg inn</button>
        <button id="backbutton" onclick="updateView()">⬅</button>
    </div>
    `;
}