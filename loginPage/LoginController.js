
/////////////////////////Funksjon som pusher ny bruker inn i databasen - Mathias
function makeUser(){
    let PLACEHOLDER = "dette er en placeholder";
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;

    model.inputs.addUser.name = name;
    model.inputs.addUser.password = PLACEHOLDER; /////////// må lage en funksjon som skjekker om "password" og "confirmpassword" er riktig

    model.data.user.push({
        id: model.data.user.length+1,
        name: model.inputs.addUser.name,
        password: model.inputs.addUser.password,
        coins: 0,
        upgrades: {
            hp: 0,
            jump: 0,
        },
        ownedSkins: ["skin1"],
        equippedSkin: ["skin1"],
        highscore: 0,
    })
    
    console.log("lag bruker navn logg")
    console.log(model.data.user[3].name)
    console.log(model.data.user[3].id)
}
/////////////////////////
//funksjon som skjekker om "password" og "confirmpassword" er riktig
function checkIfPasswordMatch(){
    
}
/////////////////////////

//Funksjon som sjekker om er eksisterende bruker eller ikke i databasen - John
function newUser() {
    const usersArray = model.data.user
    console.log(model.data.user[3].name)
    makeUser()
    // console.log(usersArray)
    
    if ( usersArray.includes(model.data.user[3].name) ) {
        // console.log("This user exists!")
        // Allows you to log in as this user if password is correct or...
        // Stops you from creating a new user with this username as it is already taken

        if (passwordInput === model.data.user[3].password) {
            // console.log("Valid username and password, you are now logged in!")
            // Allows the user to log in as they have a valid username and password
        } else {console.log("Wrong username or password!")}
            // No entry!

    } else {
        console.log("This user doesn't exist!")
        // Allow you to create a new user using this username or...
        // Stops you from being able to log in as this is not a valid username
    }
}
/////////////////////////////
// function updateview(){
//     var backbutton = document.querySelector('.container button');
    
// }
///////////////////////////// 

// Funksjon som logger bruker inn og sender til main page
function loginUser() {
    
    let name = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let foundUser = false;
    let user;

    for (let i = 0; i < model.data.user.length; i++) {
        const currentUser = model.data.user[i];
        if (name === currentUser.name && password === currentUser.password) {
            foundUser = true;
            user = currentUser;
            break;
        }
    }

   if (foundUser) {
    alert(`logged in. Hello, ${user.name}`)
    // add view to main when that is made
    mainPage();
   } else {
    alert("not logged in")
   }
}