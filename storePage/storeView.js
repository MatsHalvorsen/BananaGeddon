storeView()

function storeView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="pageContainer">
        <div class="header">
            <h2 id="pageheader">
                BUTIKK
            </h2>
            <button id="backbutton" onclick="mainPage()">⬅</button>
            <h3>MYNTER: <span id="coinCount"></span></h3>
        </div>

        <div class="upgrades">
        <h2 class="shopHeader">
            UPGRADE
        </h2>
        <div class="upgradeGrid">
            <div class="upgradebox">
                <p>+ HP</p>
            </div>
            <div class="upgradebox">
                <p>+ HOPP</p>
            </div>
            <div class="upgradebox">
                <p>UPGRADE</p>
            </div>
        </div>
    </div>

    <div class="skins">
        <h2 class="shopHeader">
            SKINS
        </h2>
        <div class="skinsGrid">
            <div class="upgradebox">
                <p>BANAN</p>
            </div>
            
    
            <div class="upgradebox">
            <img class="saurus" src="${model.data.skins[2].img}" alt="bananasaurus">
                <p>${model.data.skins[2].name}</p>
                <p>Pris: ${model.data.skins[2].price}</p>
                <button class="skinsbtn">text here</button>
            </div>

            <div class="upgradebox">
            <img class="slips" src="${model.data.skins[1].img}" alt="bananmedslips">
                <p>${model.data.skins[1].name}</p>
                <p>Pris: ${model.data.skins[1].price}</p>
            </div>

        </div>
    </div>
</div>
`;

getCoins();

}
