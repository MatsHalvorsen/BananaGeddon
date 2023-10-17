updateView2();

function updateView() {
    document.getElementById('logIn').innerHTML = /*HTML*/ `
    <div class="container">
        <h1 id="firstPage">Banageddon 2</h1>
        <button onclick="updateView2()">NY BRUKER</button>
        <button onclick="updateView3()">LOGG INN</button>
<<<<<<< HEAD
=======
        <!-- <button id="backbutton" onclick="updateview()">tilbake</button>-->
>>>>>>> 73ab11791694b8521ff993f951218e84a90bbfd6
    </div>
    `;
}


function updateView2() {
    document.getElementById('newUser').innerHTML = /*HTML*/ `
    <div class="container">

      <div class="loginPosition">
        <input id="name" type="text" placeholder="NAVN">
        <input id="password" type="text" placeholder="PASSORD">
        <input id="confirmpassword" type="text" placeholder="PASSORD">
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
            <input type="text" id="username" placehoder="brukenavn">
            <input type="password" id="password" placeholder="passord">
<<<<<<< HEAD
            <button onclick="">Logginn</button>
        </div>
=======
        </div>

        <button onclick="">logg inn</button>
        <button id="backbutton" onclick="updateView()">⬅</button>
>>>>>>> 73ab11791694b8521ff993f951218e84a90bbfd6
    </div>
    `;
}