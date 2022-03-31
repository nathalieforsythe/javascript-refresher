// Array
let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

for (let suit in suits) {
    countCards(suit);
}

function countCards (suit) {
    console.log('Ace of ' + suits[suit]);
    for (let i = 2; i <= 10; i++) {
        console.log(i + ' of ' + suits[suit]);
    }
    console.log('Jack of ' + suits[suit]);
    console.log('Queen of ' + suits[suit]);
    console.log('King of ' + suits[suit]);
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