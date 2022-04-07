console.log("Javascript is working!");
// window.alert("Beep beep");

let pElement = document.getElementById("myPTag");
console.log(pElement);

function change() {
    let firstName = document.getElementById("nameInput").value;
    pElement.innerHTML = "Hello " + firstName;
}