// Array
let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

for (let suit of suits) {
    countCards(suit);
}

function countCards (suit) {
    console.log('Ace of ' + suit);
    for (let i = 2; i <= 10; i++) {
        console.log(i + ' of ' + suit);
    }
    console.log('Jack of ' + suit);
    console.log('Queen of ' + suit);
    console.log('King of ' + suit);
}

// Function
// countCards('Hearts');
// countCards('Spades');
// countCards('Diamonds');
// countCards('Clubs');

// function countCards(suit) {
//     console.log('Ace of ' + suit);
//     for (let i = 2; i <= 10; i++) {
//     console.log(i + ' of ' + suit);
// }
//    console.log('Jack of ' + suit);
//    console.log('Queen of ' + suit);
//    console.log('King of ' + suit);
// }