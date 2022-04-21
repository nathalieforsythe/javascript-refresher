let playerNum = 0;
// const pigs = ['Dot', 'No Dot', 'Razorback', 'Trotter', 'Snouter', 'Leaning Jowler'];
let pig1, pig2;
let playerScores = [player0 = { handScore: 0, totalScore: 0 }, player1 = { handScore: 0, totalScore: 0 }, player2 = { handScore: 0, totalScore: 0 }, player3 = { handScore: 0, totalScore: 0 }];

function handleClick(id) {
    const rollButtons = ['player0RollButton', 'player1RollButton', 'player2RollButton', 'player3RollButton'];
    const passButtons = ['player0PassButton', 'player1PassButton', 'player2PassButton', 'player3PassButton'];

    for (let button in rollButtons) {
        if (id === rollButtons[button]) {
            roll();
        } else if (id === passButtons[button]) {
            pass();
        }
    }
}

function roll() {
    setPigs();

    let handScoreText = document.getElementById('player' + playerNum + 'HandScore');
    let score = calcHandScore();

    for (let player in playerScores) {
        if (playerScores[player] === playerScores[playerNum]) {
            playerScores[player].handScore += score;
            handScoreText.innerHTML = 'Score: ' + playerScores[player].handScore;
        } 
    }

    score = 0;
}

function pass() {
    changeBackground();
    // Total Score += Score;
    // Score = 0;
}

function setPigs() {
    let pig1text = document.getElementById('player' + playerNum + 'Pig1');
    let pig2text = document.getElementById('player' + playerNum + 'Pig2');
    pig1 = probability();
    pig2 = probability();

    pig1text.innerHTML = pig1;
    pig2text.innerHTML = pig2;

    pigOut();
}

function probability() {
    let randomNum = Math.random();
    if (randomNum <= 0.349) {
        return 'Dot';
    } else if (randomNum > 0.349 && randomNum <= 0.651) {
        return 'No Dot';
    } else if (randomNum > 0.651 && randomNum <= 0.875) {
        return 'Razorback';
    } else if (randomNum > 0.875 && randomNum <= 0.963) {
        return 'Trotter';
    } else if (randomNum > 0.963 && randomNum <= 0.993) {
        return 'Snouter';
    } else {
        return 'Leaning Jowler';
    }
}

function calcHandScore() {
    if (pig1 === 'Leaning Jowler' && pig2 === 'Leaning Jowler') {
        return 60;
    } else if (pig1 === 'Snouter' && pig2 === 'Snouter') {
        return 40;
    } else if ((pig1 === 'Trotter' && pig2 === 'Trotter') || (pig1 === 'Razorback' && pig2 === 'Razorback')) {
        return 20;
    } else if ((pig1 === 'Dot' && pig2 === 'Dot') || (pig1 === 'No Dot' && pig2 === 'No Dot')) {
        return 1;
    } else {
        if (pig1 === 'Leaning Jowler' || pig2 == 'Leaning Jowler') {
            return 15;
        }
        if (pig1 === 'Snouter' || pig2 === 'Snouter') {
            return 10;
        }
        if (pig1 === 'Trotter' || pig2 === 'Trotter' || pig1 === 'Razorback' || pig2 === 'Razorback') {
            return 5;
        }
    }
}

function pigOut() {
    if ((pig1 === 'Dot' && pig2 === 'No Dot') || (pig1 === 'No Dot' && pig2 === 'Dot')) {
        let handScore = document.getElementById('player' + playerNum + 'HandScore');
        handScore.innerHTML = 'PIG OUT!'
        changeBackground();
    }
}

function changeBackground() {
    let playerId = document.getElementById('player' + playerNum);
    playerId.setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large');
    playerNum++;

    if (playerNum > 3) {
        playerNum = 0;
    }

    playerId = document.getElementById('player' + playerNum);
    playerId.setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large');
}