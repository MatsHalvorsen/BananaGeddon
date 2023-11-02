function changeSkin(buttonpushed){
        if (buttonpushed == 'left'){
            model.app.currentUser.equippedSkin.skinID-=1;
            if (model.app.currentUser.equippedSkin.skinID <= 1){
                model.app.currentUser.equippedSkin.skinID = 1;
            }
        } else{
            model.app.currentUser.equippedSkin.skinID+=1;
            if (model.app.currentUser.equippedSkin.skinID >= model.app.currentUser.ownedSkins.length){
                model.app.currentUser.equippedSkin.skinID = model.app.currentUser.ownedSkins.length;
            }
        }
        UpdateChangeSkinView();
}
function getimg(){
    for(let obj of model.data.skins){
        if(obj.itemnum == model.app.currentUser.equippedSkin.skinID){
            return obj.img;
        }else{
            console.log("nei");
        }
    }
}
