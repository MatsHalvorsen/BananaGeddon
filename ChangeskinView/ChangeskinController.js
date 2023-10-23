let testnumber = 5; ////// tenker å bruke "equippedSkin" i modellen som denne variablen


function changeSkin(buttonpushed){
    let test;
    if (buttonpushed === 'left'){
        testnumber-=1;
        test = model.data.user[0].ownedSkins[testnumber]
    } else{
        testnumber+=1;
        test = model.data.user[0].ownedSkins[testnumber]
    }
    if (testnumber >= 10){
        testnumber = 10
    }
    if (testnumber <= 1){
        testnumber = 1
    }
    console.log(buttonpushed);
    console.log(testnumber);
}