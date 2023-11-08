function getCoins() {

    const showMeTheMoney = model.app.currentUser.coins;

    return showMeTheMoney;
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
                <button class="skinsbtn" onclick="skinsToModel(${skin.itemnum})">KJØP</button>
            </div>
        `;

        skinCards += card;
    }

    return skinCards;
}

function skinsToModel(skinId) {
// for(let l=0; l < ttape; l++){

// }
    // for (let k = 0; k < model.app.currentUser.ownedSkins.length; k++) {
        // if(model.app.currentUser.ownedSkins.includes(k) == skinId){
        if(model.app.currentUser.ownedSkins[0] == skinId){
            console.log('Du eier allerede dette skinet.');
            alert('Du eier allerede dette skinnet');
            return null;
        }else{
            if(model.app.currentUser.ownedSkins[1] == skinId){
                console.log('Du eier allerede dette skinet.');
                alert('Du eier allerede dette skinnet');
                return null;
            }else{
                if(model.app.currentUser.ownedSkins[2] == skinId){
                    console.log('Du eier allerede dette skinet.');
                    alert('Du eier allerede dette skinnet');
                    return null;
                }else{
                    model.app.currentUser.ownedSkins.push(skinId);
                    alert('Takk for kjøpet ditt');
                    return null;
                }
            }
        }
    // }
    // if(model.app.currentUser.ownedSkins == skinId){
    //     console.log('Du eier allerede dette skinet.');
    // } else{
    // }












    // console.log("skinsToModel called with skinId: ", skinId);
    // let user = model.app.currentUser;

    // if (user.id === skinId) {
    //     const skins = model.data.skins;
    //     let foundSkin = null;
    //     let skinAlreadyOwned = false;

    //     for (let j = 0; j < skins.length; j++) {
    //         if (skins[j].itemnum === skinId) {
    //             foundSkin = skins[j];
    //             break;
    //         }
    //     }

    //     if (foundSkin) {
    //         for (let k = 0; k < user.ownedSkins.length; k++) {
    //             if (user.ownedSkins[k] === skinId) {
    //                 skinAlreadyOwned = true;
    //                 console.log('Du eier allerede dette skinet.');
    //                 break;
    //             }
    //         }

    //         if (!skinAlreadyOwned) {
    //             if (user.coins >= foundSkin.price) {
    //                 user.ownedSkins.push(skinId);
    //                 user.coins -= foundSkin.price;
    //                 console.log(foundSkin.name)
    //                 alert(`Du har kjøpt ${foundSkin.name}`);
    //                 console.log("kjøpt skin")
    //             } else {
    //                 alert('Ikke nok mynter til å kjøpe dette skinet.');
    //             }
    //         } else {
    //             alert('Du eier allerede dette skinet.');
    //         }
    //     } else {
    //         alert('Skinet ble ikke funnet.');
    //     }
    // }
}