


function changeSkin(buttonpushed){
    let test
    let userIndex = 0;
    let equippedSkin = model.data.user[userIndex].equippedSkin;


        if (buttonpushed == 'left'){
            model.data.user[userIndex].equippedSkin-=1;
            if (model.data.user[userIndex].equippedSkin <= 1){
                model.data.user[userIndex].equippedSkin = 1;
            }
            test = model.data.user[userIndex].ownedSkins[model.data.user[userIndex].equippedSkin-2];
        } else{
            model.data.user[userIndex].equippedSkin+=1;
            if (model.data.user[userIndex].equippedSkin >= 10){
                model.data.user[userIndex].equippedSkin = 10;
            }
            test = model.data.user[userIndex].ownedSkins[model.data.user[userIndex].equippedSkin-2];
        }
    
    
    

        console.log(buttonpushed);
        console.log(model.data.user[0].equippedSkin);
        console.log(test);
    }