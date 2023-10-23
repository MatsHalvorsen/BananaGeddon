// LOGIN PAGE CONTROLLER ////////////////////////////////////////////////////////////////

function createNewUser(){
// Stores new user info into model.inputs for later -----------------------------------------
// New username
    model.inputs.addUser.name = document.getElementById('newUsername').value;
// New password
    model.inputs.addUser.password = document.getElementById('newPassword').value;
// New password confirm
    const newUserPasswordConfirm = document.getElementById('confirmPassword').value;

// Checks if passwords match and then pushes the user into the users array
checkIfUserAlreadyExists(newUserPasswordConfirm)
}


//Funksjon som sjekker om er eksisterende bruker eller ikke i databasen ---------------------
function checkIfUserAlreadyExists(newUserPasswordConfirm) {
    const usersArray = model.data.user
    
for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].name === model.inputs.addUser.name) {
        console.log("This username already exists! Try a different one^^")
        return updateViewCreateUser()
    }
}
console.log("This user doesn't exist! Checking if passwords match...")
return checkIfPasswordMatch(newUserPasswordConfirm)
}


//funksjon som skjekker om "password" og "confirmpassword" er riktig ------------------------
function checkIfPasswordMatch(newUserPasswordConfirm){
    if (model.inputs.addUser.password === newUserPasswordConfirm) {
        console.log("passwords match!")

        pushNewUser()
        updateViewLogin()
    } else {
        console.log(model.inputs.addUser.password)
        console.log(newUserPasswordConfirm)
        console.log("passwords DON'T match!")
        return
    }
}


// Pushes info from model.input.addUser into the array of all users -------------------------
function pushNewUser() {
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
}




// Funksjon som logger bruker inn og sender til main page ----------------------------------------
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
    // Logs in if user exists
   if (foundUser) {
    mainPage();
   } else {
    alert("Feil brukernavn eller passord!")
    return
   }
}