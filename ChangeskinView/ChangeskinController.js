


function changeSkin(buttonpushed){
    let test



    if(model.data.user[0].equippedSkin <= 1){
        model.data.user[0].equippedSkin+=1
        // console.log(model.data.user[0].equippedSkin);
    } else {

        if (buttonpushed == 'left'){
            model.data.user[0].equippedSkin-=1;
            test = model.data.user[2].ownedSkins[model.data.user[0].equippedSkin-1]
        } else{
            model.data.user[0].equippedSkin+=1;
            test = model.data.user[2].ownedSkins[model.data.user[0].equippedSkin-1]
        }
    
    
    
        if (model.data.user[0].equippedSkin >= 10){
            model.data.user[0].equippedSkin = 10
        }
        // if (model.data.user[0].equippedSkin <= 1){
        //     model.data.user[0].equippedSkin = 1
        // }

        console.log(buttonpushed);
        console.log(model.data.user[0].equippedSkin);
        console.log(test);
    }




}