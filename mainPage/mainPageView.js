// MAIN PAGE VIEW ///////////////////////////////////////////////////////////////////////
function mainPage() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="main">
        <div class="container">
        <h2 id="usernameMenu">user: ${updateUsernameMenu()}</h2>
        <h2>Min Toppscore: ${model.app.currentUser.highscore}</h2>
        <button onclick="UpdateChangeSkinView()">Endre utseende</button>
        <button onclick="storeView()">Butikk</button>
            <button onclick="updateGameView(), showStartBtn()">SPILL</button>
            <button onclick="updateViewNewUserOrLogin()">LOGG UT</button>
            <button onclick="updateViewHighscore()">Toppliste</button>
        </div>
    </div>
    `;
}
mainPage()