function getCoins() {

    const showMeTheMoney = model.app.currentUser.coins;

    return showMeTheMoney;
}

function skinstoModel(id, itemnum) {

    const bruker = model.data.user[id];
    const eierSkins = model.data.user[id].ownedSkins;
    const kjøperSkin = model.data.skins[itemnum];
    


}

function showSkins() {
    const classNames = {
        '1': 'aiBanana',
        '2': 'formalBanana',
        '3': 'bananaSaurus'
        
    };

    let skinCards = '';

    for (let i = 0; i < model.data.skins.length; i++) {
        const skin = model.data.skins[i];
        const className = classNames[skin.itemnum] || 'defaultClassName'; 

        const card = `
            <div class="upgradebox">
                <img class="${className}" src="${skin.img}" alt="${skin.name}">
                <p>${skin.name}</p>
                <p>Pris: ${skin.price}</p>
                <button class="skinsbtn" onclick="skinsToModel('${skin.itemnum}')">KJØP</button>
            </div>
        `;

        skinCards += card;
    }

    return skinCards;
}



/*function showSkins() {
    let showItem = [];

    for (let i = 0; i < model.data.skins.length; i++) {
        showItem += `
        <img src="${model.data.skins[i].img}">
        <p>${model.data.skins[i].name}</p>
        <p>Pris:${model.data.skins[i].price}</p>`
        
    }
    return showItem;
}
*/




/*
// GPT
function skinsToModel(skinId) {
    const users = model.data.user;

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === '1') { // Du må erstatte '1' med brukerens ID
            const user = users[i];

            const skins = model.data.skins;
            let foundSkin = null;

            for (let j = 0; j < skins.length; j++) {
                if (skins[j].itemnum === skinId) {
                    foundSkin = skins[j];
                    break;
                }
            }

            if (foundSkin) {
                // Sjekk om brukeren allerede eier huden
                let skinAlreadyOwned = false;
                for (let k = 0; k < user.ownedSkins.length; k++) {
                    if (user.ownedSkins[k] === skinId) {
                        skinAlreadyOwned = true;
                        break;
                    }
                }

                if (!skinAlreadyOwned) {
                    // Sjekk om brukeren har nok mynter til å kjøpe skinet
                    if (user.coins >= foundSkin.price) {
                        // Legg til skinet i brukerens eide skinnliste
                        user.ownedSkins.push(skinId);
                        
                        // Trekk prisen for skinet fra brukerens mynter
                        user.coins -= foundSkin.price;
                        
                        alert(`Du har kjøpt ${foundSkin.name}`);
                    } else {
                        alert('Ikke nok mynter til å kjøpe dette skinet.');
                        // Du kan legge til en melding til brukeren her hvis det ikke er nok mynter.
                    }
                } else {
                    alert('Du eier allerede dette skinet.');
                    // Du kan legge til en melding til brukeren her hvis de allerede eier skinet.
                }
            } else {
                alert('Skinet ble ikke funnet.');
            }

            break; // Vi har funnet brukeren, ingen grunn til å fortsette løkken
        }
    }
}
*/

