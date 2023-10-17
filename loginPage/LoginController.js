



/////////////////////////Funksjon som pusher ny bruker inn i databasen
function makeUser(){
    let PLACEHOLDER = "dette er en placeholder";
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;

    model.inputs.addUser.name = name;
    model.inputs.addUser.password = PLACEHOLDER; /////////// må lage en funksjon som skjekker om "password" og "confirmpassword" er riktig

    model.data.user
}
/////////////////////////

//Funksjon som sjekker om er eksisterende bruker eller ikke i databasen
function isLogedIn() {
    
    if ()
}