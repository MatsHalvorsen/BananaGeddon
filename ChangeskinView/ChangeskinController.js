function changeSkin(buttonpushed){
    let test
    let userIndex = 0;
    let equippedSkin = model.app.currentUser.equippedSkin;


        if (buttonpushed == 'left'){
            model.app.currentUser.equippedSkin-=1;
            if (model.app.currentUser.equippedSkin <= 1){
                model.app.currentUser.equippedSkin = 1;
            }
            test = model.app.currentUser.ownedSkins[model.app.currentUser.equippedSkin-1];/// "test" er indexen til "ownedSkins", som skal brukes til å velge hvilket skin som er "equippedSkin" 
        } else{
            model.app.currentUser.equippedSkin+=1;
            if (model.app.currentUser.equippedSkin >= model.app.currentUser.ownedSkins.length){
                model.app.currentUser.equippedSkin = model.app.currentUser.ownedSkins.length;
            }
            test = model.app.currentUser.ownedSkins[model.app.currentUser.equippedSkin-1];
        }
    
    
    

        console.log(buttonpushed);
        console.log(model.app.currentUser.equippedSkin);
        console.log(test);
    }