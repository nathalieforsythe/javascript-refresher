function displayMessage() {
    let clickMe = document.getElementById("message");
    let nameInput = document.getElementById("name").value;
    let animalInput = document.getElementById("animal").value;
    clickMe.innerHTML = "Hello " + nameInput + ". Don't you wish you were a " + animalInput + "?";
}

function changeToRed() {
    document.getElementById("name").style.backgroundColor = "red";
}

// https://stackoverflow.com/questions/1484506/random-color-generator
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("animal").style.backgroundColor = color;
}