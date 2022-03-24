console.log('Hello world...')

// Part 1
let message = 'How are you today?';
// console.log(message);

let greeting = 'Hello';
let name = 'Sue';
// console.log(greeting + ' ' + name + '!'); // name is deprecated?

let age = 13;
// console.log('You are ' + age);
// console.log('In ten years you will be ' + (age + 10));

// Part 2
// if (name == 'Bob'){
//     console.log('I knew it was you, ' + name + '!');
// } else {
//     console.log('Hey ' + name + ', you\'re not Bob!');
// }

// let iAmWearingABelt = false;
// let iAmWearingGlasses = false;
// if (iAmWearingABelt == true && iAmWearingGlasses == true){
//     console.log('Probably not Mr. Gorton');
// } else if (iAmWearingABelt == true && iAmWearingGlasses == false){
//     console.log('Probably is Mr. Gorton');
// } else{
//     console.log('Probably just some dude');
// }

// Part 3
for (let i = 0; i < 6; i++) {
    console.log('comp sci is awesome');
}

for (let i = 0; i < 11; i++) {
    console.log(i);
}

tellMeMyAge();
function tellMeMyAge() {
    console.log('You are ' + age + ' years old.');
}

makePizza('small', 'pepperoni');
makePizza('large', 'cheese');
function makePizza(size, type) {
    console.log('One ' + size + ' ' + type + ' pizza coming up!');
}

pricePizza('small');
pricePizza('large');
function pricePizza(size) {
    // let howMuchForAPizza;
    if (size == 'small') {
        console.log(13);
    } else if (size == 'large') {
        console.log(17);
    }
    // console.log(howMuchForAPizza);
}

let y = 20;
scope();
console.log('y = ' + y);
console.log('x = ' + x);
function scope(){
    let x = 10;
    console.log('x = ' + x);
    console.log('y = ' + y);
}