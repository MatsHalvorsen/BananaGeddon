// LOGIN PAGE VIEW //////////////////////////////////////////////////////////////////////
updateViewNewUserOrLogin();



// PAGE FOR CHOOSING TO CREATE NEW USER OR LOG IN AS EXISTING USER //---------------------
function updateViewNewUserOrLogin() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="container">
        <img src="./loginPage/img/Logo.png">
        <h1 id="firstPage">Bananageddon 2</h1>
        <h2>- Bana Harder -</h2>
        <button onclick="updateViewCreateUser()">NY BRUKER</button>
        <button onclick="updateViewLogin()">LOGG INN</button>
    </div>
    `;
}
// Problem with rendering image.
// for some reason the image seems to have weird address on my pc,
// that might be the problem?



// PAGE FOR CREATING A NEW USER //---------------------------------------------------------
function updateViewCreateUser() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="container">

      <div class="loginPosition">
        <input id="newUsername" type="text" placeholder="NAVN">
        <input id="newPassword" type="password" placeholder="PASSORD">
        <input id="confirmPassword" type="password" placeholder="PASSORD">
      </div>

        <button onclick="createNewUser()">LAG BRUKER</button>
        <button id="backbutton" onclick="updateViewNewUserOrLogin()">⬅</button>
        
    </div>
    `;
}



// PAGE FOR LOGGING IN AS AN EXISTING USER //----------------------------------------------
function updateViewLogin() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="container">
    
        <div class="loginform"> 
            <input type="text" id="username" placeholder="brukernavn">
            <input type="password" id="password" placeholder="passord">
        </div>

        <button onclick="loginUser()" onchange="loginUser()">logg inn</button>
        <button id="backbutton" onclick="updateViewNewUserOrLogin()">⬅</button>
    </div>
    `;
}