//funksjon som bytter skin
function changeSkin(buttonpushed){
    // let tes n = model.app.currentUser.equippedSkin.skinID;


        if (buttonpushed == 'left'){
            model.app.currentUser.equippedSkin.skinID-=1;
            if (model.app.currentUser.equippedSkin.skinID <= 1){
                model.app.currentUser.equippedSkin.skinID = 1;
            }
            // test = model.app.currentUser.ownedSkins[model.app.currentUser.equippedSkin.skinID-1];/// "test" er indexen til "ownedSkins", som skal brukes til å velge hvilket skin som er "equippedSkin.skinID" 
            // model.app.currentUser.equippedSkin.skinID-=1;
        } else{
            model.app.currentUser.equippedSkin.skinID+=1;
            if (model.app.currentUser.equippedSkin.skinID >= model.app.currentUser.ownedSkins.length){
                model.app.currentUser.equippedSkin.skinID = model.app.currentUser.ownedSkins.length;
            }
            // test = model.app.currentUser.ownedSkins[model.app.currentUser.equippedSkin.skinID-1];
            // model.app.currentUser.equippedSkin.skinID+=1;
        }
        console.log("test");
        getimg();
        // console.log(model.app.currentUser.equippedSkin.skinID);
        // console.log(test);
        // console.log(model.app.currentUser.ownedSkins[test-2]);
}

function getimg(){
    for(let obj of model.data.skins){
        if(obj.itemnum == model.app.currentUser.equippedSkin.skinID){
            console.log("ja");
            // model.app.currentUser.equippedSkin.skinID.skinPath = obj.img;
            return obj.img;
            //UpdateChangeSkinView();
        }else{
            console.log("nei");
            break;
        }
    }
    UpdateChangeSkinView();
}
