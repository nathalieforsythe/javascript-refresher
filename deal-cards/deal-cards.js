const card1 = {rank: 'Ace', suit: 'Hearts'};
const card2 = {rank: 7, suit: 'Diamonds'};
const card3 = {rank: 'King', suit: 'Spades'};
const deck = [];
const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

// console.log('You are holding the ' + card1.rank + ' of ' + card1.suit + ' and the ' + card2.rank + ' of ' + card2.suit);

// deck.push(card1, card2, card3);
// for (let card of deck){
//     console.log(card.rank + ' of ' + card.suit);
// }

for (let suit of suits){
    for (let rank of ranks){
        deck.push({rank: rank, suit: suit});
    }
}
// console.log(deck);

let pickedCard1 = Math.floor(Math.random() * (deck.length - 1));
console.log(deck[pickedCard1]);
deck.splice(pickedCard1, 1);

let pickedCard2 = Math.floor(Math.random() * (deck.length - 1));
console.log(deck[pickedCard2]);
deck.splice(pickedCard2, 1);

console.log(deck);