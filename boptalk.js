let word = 'pArAlLeL';
let vowels = ['a', 'e', 'i', 'o', 'u', ' '];

let bopTalkWord = word.toLowerCase().split("");
// console.log(bopTalkWord);

checkVowel();
removeCommas();
console.log(bopTalkWord);

function checkVowel () {
    for (let i = 0; i < bopTalkWord.length; i++){
        if (!vowels.includes(bopTalkWord[i])){
            bopTalkWord[i] = bopTalkWord[i].concat('op');
        }
    }
    bopTalkWord = bopTalkWord.toString();
    // console.log(bopTalkWord);
}

function removeCommas () {
    for (let i = 0; i < bopTalkWord.length; i++){
        bopTalkWord = bopTalkWord.replace(",", "");
    }
    // console.log(bopTalkWord);
}