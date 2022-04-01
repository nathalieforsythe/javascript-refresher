let word = 'pArAlLeL';
let vowels = ['a', 'e', 'i', 'o', 'u', ' '];

word = word.toLowerCase().split("");
console.log(word);

checkVowel();
removeCommas();

function checkVowel () {
    for (let i = 0; i < word.length; i++){
        if (vowels.includes(word[i]) === false){
            word[i] = word[i].concat('op');
        }
    }
    word = word.toString();
    console.log(word);
}

function removeCommas () {
    for (let i = 0; i < word.length; i++){
        word = word.replace(",", "");
    }
    console.log(word);
}