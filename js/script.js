let firstName = prompt("Type your First Name");
let lastName = prompt("Type your Last Name");
let favColor = prompt("Type your favourite color");
let randomNumber = Math.floor((Math.random() * 100) + 1)

document.getElementById("password").innerHTML = `${firstName}${lastName}${favColor}${randomNumber}` ;