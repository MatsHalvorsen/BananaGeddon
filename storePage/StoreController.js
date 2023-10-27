function getCoins() {

    const coins = model.data.user[1].coins
    document.getElementById('coinCount').textContent = coins;

}
/*
function skinsToModel(itemnum) {
    const bruker = model.data.user;
    const skins = model.data.skins;
 
    let skinToAdd = null;
 
    for (let i = 0; i < skins.length; i++) {
       if (skins[i].itemnum === itemnum) { 
          skinToAdd = skins[i];
          break;
       }
    }
 
    if (skinToAdd) {
        if (!bruker.ownedSkins) {
          bruker.ownedSkins = []; 
        } 
        bruker.ownedSkins.push(skinToAdd);
        console.log("Skin lagt til");
     } else {
        console.log("Skin ikke funnet");
     }
  }
  */