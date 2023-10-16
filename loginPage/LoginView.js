updateView2();

function updateView() {
    document.getElementById('logIn').innerHTML = /*HTML*/ `
    <div class="container">
        <h1 id="firstPage">Banageddon 2</h1>
        <button onclick="">NY BRUKER</button>
        <button onclick="">LOGG INN</button>
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
        
    </div>
    `;
}

function updateView3() {
    document.getElementById('logIn').innerHTML = /*HTML*/ `
    <div class="container">
    
    <div class="loginform"> 
    <input type="text" id"username" placehoder="brukenavn">
    <input type="password" id="password" placeholder="passord">
    </div>
    <button onclick="()">

    </div>
    `;
}
