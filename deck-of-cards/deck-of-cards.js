// Function
// countCards('Hearts');
// countCards('Spades');
// countCards('Diamonds');
// countCards('Clubs');

// function countCards(suit) {
//     console.log('Ace of ' + suit);
//     for (let i = 0; i < 9; i++) {
//         console.log((i + 2) + ' of ' + suit);
//     }
//    console.log('Jack of ' + suits[suit]);
//    console.log('Queen of ' + suits[suit]);
//    console.log('King of ' + suits[suit]);
// }

// Array
let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

for (suit in suits) {
    console.log('Ace of ' + suits[suit]);
    for (let i = 0; i < 9; i++) {
        console.log((i + 2) + ' of ' + suits[suit]);
    }
    console.log('Jack of ' + suits[suit]);
    console.log('Queen of ' + suits[suit]);
    console.log('King of ' + suits[suit]);
}