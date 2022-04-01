let word = 'pArALLeL';
let vowels = ['a', 'e', 'i', 'o', 'u'];

word = word.toLowerCase().split("");
console.log(word);

function checkVowel () {
    for (let letter of word){
        if (vowels.includes(word[letter]) === false){
            word[letter] += 'op'; // I don't know how to add something to the end of an array I'll find it later
        }

    }
}